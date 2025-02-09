/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface ChallengeFactoryInterface extends ethers.utils.Interface {
  functions: {
    'beacon()': FunctionFragment
    'createChallenge(address,bytes32,uint256,address,address,uint256,uint256,address,address)': FunctionFragment
    'executors(uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'beacon', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createChallenge',
    values: [
      string,
      BytesLike,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'executors',
    values: [BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'beacon', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createChallenge',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'executors', data: BytesLike): Result

  events: {}
}

export class ChallengeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ChallengeFactoryInterface

  functions: {
    beacon(overrides?: CallOverrides): Promise<[string]>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>
  }

  beacon(overrides?: CallOverrides): Promise<string>

  createChallenge(
    _resultReceiver: string,
    _executionHash: BytesLike,
    _maxMessageCount: BigNumberish,
    _asserter: string,
    _challenger: string,
    _asserterTimeLeft: BigNumberish,
    _challengerTimeLeft: BigNumberish,
    _sequencerBridge: string,
    _delayedBridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  callStatic: {
    beacon(overrides?: CallOverrides): Promise<string>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: CallOverrides
    ): Promise<string>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    beacon(overrides?: CallOverrides): Promise<BigNumber>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    executors(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createChallenge(
      _resultReceiver: string,
      _executionHash: BytesLike,
      _maxMessageCount: BigNumberish,
      _asserter: string,
      _challenger: string,
      _asserterTimeLeft: BigNumberish,
      _challengerTimeLeft: BigNumberish,
      _sequencerBridge: string,
      _delayedBridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    executors(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
