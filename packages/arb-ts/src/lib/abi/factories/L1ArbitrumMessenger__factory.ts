/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  L1ArbitrumMessenger,
  L1ArbitrumMessengerInterface,
} from '../L1ArbitrumMessenger'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
]

export class L1ArbitrumMessenger__factory {
  static readonly abi = _abi
  static createInterface(): L1ArbitrumMessengerInterface {
    return new utils.Interface(_abi) as L1ArbitrumMessengerInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ArbitrumMessenger {
    return new Contract(address, _abi, signerOrProvider) as L1ArbitrumMessenger
  }
}
