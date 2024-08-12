// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract AAyuToken is ERC20, Ownable, Pausable {

    constructor(uint256 initialSupply) ERC20("AAyu", "AYU") {
        _mint(msg.sender, initialSupply);
    }

    // Pause the contract in case of emergency
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause the contract
    function unpause() public onlyOwner {
        _unpause();
    }

    // Allow burning of tokens to reduce supply
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Override _beforeTokenTransfer to include pause feature
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
