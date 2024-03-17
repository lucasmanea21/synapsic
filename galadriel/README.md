## Galadriel module

AI module for Synapsic, making use of Galadriel in order to integrate & deploy our own AI data verifier.

The Galadriel Marketplace smart contract is an improvement of the regular Marketplace contract, featuring data AI verification using an oracle, so that the platform is secure to malicious actors and fake data.

Deployment address: `0xe5bC889C0C3677f871f35361F68cd735fd86427f`

## Features and endpoints

### setListingPrice

```solidity
function setListingPrice(uint256 newPrice) public onlyOwner
```

- **Purpose**: Sets the listing price for creating a market item.
- **Access**: Restricted to the contract owner.
- **Parameters**:
  - `newPrice`: The new listing price to set.

### createMarketItem

```solidity
function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price,
    string calldata tokenUri
) public payable nonReentrant
```

- **Purpose**: Creates a new market item and requests data verification from the oracle.
- **Access**: Open to any user who pays the listing fee.
- **Parameters**:
  - `nftContract`: The address of the NFT contract.
  - `tokenId`: The token ID of the NFT.
  - `price`: The sale price of the NFT.
  - `tokenUri`: The URI of the token data to be verified.

### updateVerificationStatus

```solidity
function updateVerificationStatus(uint256 itemId, uint256 requestId) external
```

- **Purpose**: Updates the verification status of a market item based on the oracle's response.
- **Access**: Typically called by the oracle contract.
- **Parameters**:
  - `itemId`: The item ID of the market item.
  - `requestId`: The request ID from the data verification request.

## Events

### MarketItemCreated

Emitted when a new market item is created.

```solidity
event MarketItemCreated(
    uint256 indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint256 price,
    bool sold
);
```

### VerificationRequested

Emitted when a verification request is sent to the oracle.

```solidity
event VerificationRequested(uint256 indexed itemId, uint256 indexed requestId);
```

### VerificationResult

Emitted after the oracle updates the verification status of a market item.

```solidity
event VerificationResult(uint256 indexed itemId, bool verified, string message);
```

**Note**: The `onlyOwner` modifier restricts certain functions to be callable only by the contract's owner. Non-reentrant functions prevent re-entrancy attacks by not allowing nested calls to itself.
