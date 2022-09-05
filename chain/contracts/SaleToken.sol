// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SaleToken is ERC20("SaleToken", "SALE") {
    constructor() {
        // mint 1 million BUSD / 18 decimals
        _mint(msg.sender, 10**24);
    }
}