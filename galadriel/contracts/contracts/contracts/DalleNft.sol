// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


interface IOracle {
    function createFunctionCall(
        uint functionCallbackId,
        string memory functionType,
        string memory functionInput
    ) external returns (uint i);
}

contract DalleNft is ERC721URIStorage {
    uint256 private _nextTokenId;

    struct MintInput {
        address owner;
        string prompt;
        bool isMinted;
    }

    mapping(uint => MintInput) public mintInputs;
    uint private mintsCount;

    event MintInputCreated(address indexed owner, uint indexed chatId);

    address private owner;
    address public oracleAddress;

    string public prompt;

    event PromptUpdated(string indexed newPrompt);
    event OracleAddressUpdated(address indexed newOracleAddress);

    constructor(
        address initialOracleAddress,
        string memory initialPrompt
    ) ERC721("DALL-E", "DLE") {
        owner = msg.sender;
        oracleAddress = initialOracleAddress;
        prompt = initialPrompt;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    modifier onlyOracle() {
        require(msg.sender == oracleAddress, "Caller is not oracle");
        _;
    }

    function setPrompt(string memory newPrompt) public onlyOwner {
        prompt = newPrompt;
        emit PromptUpdated(newPrompt);
    }

    function setOracleAddress(address newOracleAddress) public onlyOwner {
        oracleAddress = newOracleAddress;
        emit OracleAddressUpdated(newOracleAddress);
    }

    function initializeMint(string memory message) public returns (uint i) {
        MintInput storage mintInput = mintInputs[mintsCount];

        mintInput.owner = msg.sender;
        mintInput.prompt = message;
        mintInput.isMinted = false;

        uint currentId = mintsCount;
        mintsCount = currentId + 1;

        string memory fullPrompt = prompt;
        fullPrompt = string.concat(fullPrompt, message);
        fullPrompt = string.concat(fullPrompt, "\"");
        IOracle(oracleAddress).createFunctionCall(
            currentId,
            "image_generation",
            fullPrompt
        );
        emit MintInputCreated(msg.sender, currentId);

        return currentId;
    }

    function onOracleFunctionResponse(
        uint runId,
        string memory response,
        string memory errorMessage
    ) public onlyOracle {
        MintInput storage mintInput = mintInputs[runId];
        require(!mintInput.isMinted, "NFT already minted");

        mintInput.isMinted = true;

        uint256 tokenId = _nextTokenId++;
        _mint(mintInput.owner, tokenId);
        _setTokenURI(tokenId, response);
    }

    function getMessageHistoryContents(uint chatId) public view returns (string[] memory) {
        string[] memory promptsArray = new string[](1);
        string memory fullPrompt = prompt;
        fullPrompt = string.concat(fullPrompt, mintInputs[chatId].prompt);
        fullPrompt = string.concat(fullPrompt, "\"");
        promptsArray[0] = fullPrompt;
        return promptsArray;
    }

    function getRoles(address _owner, uint _chatId) public pure returns (string[] memory) {
        string[] memory rolesArray = new string[](1);
        rolesArray[0] = "user";
        return rolesArray;
    }
}
