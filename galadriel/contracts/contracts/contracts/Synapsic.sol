// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

interface IDataOracle {
    function requestVerification(uint256 tokenId, string calldata tokenUri) external returns (uint256 requestId);
    function getVerificationResult(uint256 requestId) external view returns (bool verified, string memory errorMessage);
}

contract SynapsicMarketplace is ReentrancyGuard {
    uint256 private _itemIds = 0;
    uint256 private _itemsSold = 0;

    address payable owner;
    uint256 listingPrice = 0.025 ether;
    IDataOracle public dataOracle;

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
        bool verified;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    event VerificationRequested(uint256 indexed itemId, uint256 indexed requestId);
    event VerificationResult(uint256 indexed itemId, bool verified, string message);

    constructor(address dataOracleAddress) {
        owner = payable(msg.sender);
        dataOracle = IDataOracle(dataOracleAddress);
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Only marketplace owner can perform this operation.");
        _;
    }

    function setListingPrice(uint256 newPrice) public onlyOwner {
        listingPrice = newPrice;
    }

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price,
        string calldata tokenUri
    ) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Must pay listing price");

        _itemIds++;
        uint256 itemId = _itemIds;

        uint256 requestId = dataOracle.requestVerification(tokenId, tokenUri);
        emit VerificationRequested(itemId, requestId);

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false,
            false
        );

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    // this function is called by the oracle to update the verification status
    function updateVerificationStatus(uint256 itemId, uint256 requestId) external {
        (bool verified, string memory errorMessage) = dataOracle.getVerificationResult(requestId);

        MarketItem storage item = idToMarketItem[itemId];
        require(item.itemId != 0, "Market item does not exist");

        item.verified = verified;
        emit VerificationResult(itemId, verified, errorMessage);
    }

     function cancelListing(address nftContract, uint256 itemId) public nonReentrant {
        require(idToMarketItem[itemId].seller == msg.sender, "You are not the seller.");
        require(!idToMarketItem[itemId].sold, "Item is already sold.");

        uint tokenId = idToMarketItem[itemId].tokenId;

        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        delete idToMarketItem[itemId];
    }

    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint unsoldItemCount = _itemIds - _itemsSold;
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint i = 0; i < _itemIds; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

}
