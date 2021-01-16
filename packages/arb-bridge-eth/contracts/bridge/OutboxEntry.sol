// SPDX-License-Identifier: Apache-2.0

/*
 * Copyright 2019-2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

pragma solidity ^0.6.11;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../libraries/Cloneable.sol";

import "./interfaces/IOutboxEntry.sol";

contract OutboxEntry is Ownable, Cloneable, IOutboxEntry {
    bytes32 public root;
    mapping(uint256 => bool) public spentOutput;

    function initialize(address _owner, bytes32 _root) external override {
        require(root != 0, "ALREADY_INIT");
        transferOwnership(_owner);
        root = _root;
    }

    function spendOutput(bytes32 _root, uint256 _id) external override onlyOwner {
        require(!spentOutput[_id], "ALREADY_SPENT");
        require(_root == root, "BAD_ROOT");
        spentOutput[_id] = true;
    }
}