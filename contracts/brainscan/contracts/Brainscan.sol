// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract Synapsic is ERC721, Ownable {
    using EnumerableSet for EnumerableSet.AddressSet;
    EnumerableSet.AddressSet private whitelist;

    event BrainscanNFTMinted(address indexed to, uint256 indexed tokenId, string brainscanData);

    constructor(address initialOwner)
        ERC721("Synapsic", "BRAIN")
        Ownable(initialOwner)
    {}

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

    function addToWhitelist(address _address) external onlyOwner {
        require(!whitelist.contains(_address), "Address is already whitelisted");
        whitelist.add(_address);
    }

    function removeFromWhitelist(address _address) external onlyOwner {
        require(whitelist.contains(_address), "Address is not whitelisted");
        whitelist.remove(_address);
    }
    function isWhitelisted(address _address) public view returns (bool) {
        return whitelist.contains(_address);
    }

    function mintBrainscanNFT(address to, uint256 tokenId, string memory brainscanData) public {
        require(isWhitelisted(msg.sender), "Caller is not whitelisted");
        _safeMint(to, tokenId);
        emit BrainscanNFTMinted(to, tokenId, brainscanData);
    }
}
