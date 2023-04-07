// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Contract is ERC1155, Ownable {

    bool public paused = false;
    mapping(uint256 => uint256) typeToId;

    event Minted(
        uint256 id,
        uint256 amount,
        address indexed to,
        uint256 cost,
        uint256 timestamp
    );

    struct SaleStruct {
        uint256 id;
        uint256 amount;
        address owner;
        uint256 cost;
        uint256 timestamp;
    }

    SaleStruct[] minted;

    mapping(address => SaleStruct[]) collected;

    constructor(string memory _uri) ERC1155 (_uri) {
        typeToId[1] = 1;
        typeToId[2] = 2;
        typeToId[5] = 3;
        typeToId[10] = 4;
        typeToId[20] = 5;
        typeToId[50] = 6;
        typeToId[100] = 7;
        typeToId[200] = 8;
    }

    function mint(uint256 nftType, uint256 amount) public onlyOwner {
        require(!paused, "NFTs under maintenance!");

        uint256 tokenId = typeToId[nftType];
        _mint(msg.sender, tokenId, amount, "");
        uint256 cost = nftType * 0.01 ether;

        minted.push(
            SaleStruct(
                tokenId,
                amount,
                msg.sender,
                cost,
                block.timestamp
            )
        );
        
        emit Minted(tokenId, amount, msg.sender, cost, block.timestamp);
    }

    function deposit() public payable {}

    function buyFromServer(uint256[] memory tokenIds, uint256[] memory amounts) public {
        require(!paused, "NFTs under maintenance!");

        _burnBatch(owner(), tokenIds, amounts);
        _mintBatch(msg.sender, tokenIds, amounts, "");
        
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 id = tokenIds[i];
            minted[id-1].amount = balanceOf(owner(), id);
        }
    }
    
    function getAllNFTs() public view returns (SaleStruct[] memory) {
        return minted;
    }

    function getAnNFTs(uint256 tokenId) public view returns (SaleStruct memory) {
        return minted[tokenId - 1];
    }

    function payTo(address to, uint256 amount) public onlyOwner {
        (bool success1, ) = payable(to).call{value: amount}("");
        require(success1);
    }

    function setPause(bool _state) public onlyOwner {
        paused = _state;
    }

}