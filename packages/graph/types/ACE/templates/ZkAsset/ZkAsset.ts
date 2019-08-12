// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateNoteRegistry extends EthereumEvent {
  get params(): CreateNoteRegistry__Params {
    return new CreateNoteRegistry__Params(this);
  }
}

export class CreateNoteRegistry__Params {
  _event: CreateNoteRegistry;

  constructor(event: CreateNoteRegistry) {
    this._event = event;
  }

  get zkAssetAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get linkedTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get scalingFactor(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get canAdjustSupply(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get canConvert(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class CreateZkAsset extends EthereumEvent {
  get params(): CreateZkAsset__Params {
    return new CreateZkAsset__Params(this);
  }
}

export class CreateZkAsset__Params {
  _event: CreateZkAsset;

  constructor(event: CreateZkAsset) {
    this._event = event;
  }

  get aceAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get linkedTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get scalingFactor(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _canAdjustSupply(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get _canConvert(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class ApprovedAddress extends EthereumEvent {
  get params(): ApprovedAddress__Params {
    return new ApprovedAddress__Params(this);
  }
}

export class ApprovedAddress__Params {
  _event: ApprovedAddress;

  constructor(event: ApprovedAddress) {
    this._event = event;
  }

  get addressApproved(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get noteHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class CreateNoteRegistry1 extends EthereumEvent {
  get params(): CreateNoteRegistry1__Params {
    return new CreateNoteRegistry1__Params(this);
  }
}

export class CreateNoteRegistry1__Params {
  _event: CreateNoteRegistry1;

  constructor(event: CreateNoteRegistry1) {
    this._event = event;
  }

  get noteRegistryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class CreateNote extends EthereumEvent {
  get params(): CreateNote__Params {
    return new CreateNote__Params(this);
  }
}

export class CreateNote__Params {
  _event: CreateNote;

  constructor(event: CreateNote) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get noteHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get metadata(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class DestroyNote extends EthereumEvent {
  get params(): DestroyNote__Params {
    return new DestroyNote__Params(this);
  }
}

export class DestroyNote__Params {
  _event: DestroyNote;

  constructor(event: DestroyNote) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get noteHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get metadata(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ConvertTokens extends EthereumEvent {
  get params(): ConvertTokens__Params {
    return new ConvertTokens__Params(this);
  }
}

export class ConvertTokens__Params {
  _event: ConvertTokens;

  constructor(event: ConvertTokens) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RedeemTokens extends EthereumEvent {
  get params(): RedeemTokens__Params {
    return new RedeemTokens__Params(this);
  }
}

export class RedeemTokens__Params {
  _event: RedeemTokens;

  constructor(event: RedeemTokens) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdateNoteMetaData extends EthereumEvent {
  get params(): UpdateNoteMetaData__Params {
    return new UpdateNoteMetaData__Params(this);
  }
}

export class UpdateNoteMetaData__Params {
  _event: UpdateNoteMetaData;

  constructor(event: UpdateNoteMetaData) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get noteHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get metadata(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ZkAsset extends SmartContract {
  static bind(address: Address): ZkAsset {
    return new ZkAsset("ZkAsset", address);
  }

  JOIN_SPLIT_PROOF(): i32 {
    let result = super.call("JOIN_SPLIT_PROOF", []);
    return result[0].toI32();
  }

  ZERO_VALUE_NOTE_HASH(): Bytes {
    let result = super.call("ZERO_VALUE_NOTE_HASH", []);
    return result[0].toBytes();
  }

  confidentialApproved(param0: Bytes, param1: Address): boolean {
    let result = super.call("confidentialApproved", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1)
    ]);
    return result[0].toBoolean();
  }

  PRIVATE_RANGE_PROOF(): i32 {
    let result = super.call("PRIVATE_RANGE_PROOF", []);
    return result[0].toI32();
  }

  DIVIDEND_PROOF(): i32 {
    let result = super.call("DIVIDEND_PROOF", []);
    return result[0].toI32();
  }

  MINT_PROOF(): i32 {
    let result = super.call("MINT_PROOF", []);
    return result[0].toI32();
  }

  ace(): Address {
    let result = super.call("ace", []);
    return result[0].toAddress();
  }

  BURN_PROOF(): i32 {
    let result = super.call("BURN_PROOF", []);
    return result[0].toI32();
  }

  EIP712_DOMAIN_HASH(): Bytes {
    let result = super.call("EIP712_DOMAIN_HASH", []);
    return result[0].toBytes();
  }

  linkedToken(): Address {
    let result = super.call("linkedToken", []);
    return result[0].toAddress();
  }

  scalingFactor(): BigInt {
    let result = super.call("scalingFactor", []);
    return result[0].toBigInt();
  }
}

export class ConfidentialApproveCall extends EthereumCall {
  get inputs(): ConfidentialApproveCall__Inputs {
    return new ConfidentialApproveCall__Inputs(this);
  }

  get outputs(): ConfidentialApproveCall__Outputs {
    return new ConfidentialApproveCall__Outputs(this);
  }
}

export class ConfidentialApproveCall__Inputs {
  _call: ConfidentialApproveCall;

  constructor(call: ConfidentialApproveCall) {
    this._call = call;
  }

  get _noteHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _status(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _signature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ConfidentialApproveCall__Outputs {
  _call: ConfidentialApproveCall;

  constructor(call: ConfidentialApproveCall) {
    this._call = call;
  }
}

export class UpdateNoteMetaDataCall extends EthereumCall {
  get inputs(): UpdateNoteMetaDataCall__Inputs {
    return new UpdateNoteMetaDataCall__Inputs(this);
  }

  get outputs(): UpdateNoteMetaDataCall__Outputs {
    return new UpdateNoteMetaDataCall__Outputs(this);
  }
}

export class UpdateNoteMetaDataCall__Inputs {
  _call: UpdateNoteMetaDataCall;

  constructor(call: UpdateNoteMetaDataCall) {
    this._call = call;
  }

  get noteHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get metaData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpdateNoteMetaDataCall__Outputs {
  _call: UpdateNoteMetaDataCall;

  constructor(call: UpdateNoteMetaDataCall) {
    this._call = call;
  }
}

export class ConfidentialTransferCall extends EthereumCall {
  get inputs(): ConfidentialTransferCall__Inputs {
    return new ConfidentialTransferCall__Inputs(this);
  }

  get outputs(): ConfidentialTransferCall__Outputs {
    return new ConfidentialTransferCall__Outputs(this);
  }
}

export class ConfidentialTransferCall__Inputs {
  _call: ConfidentialTransferCall;

  constructor(call: ConfidentialTransferCall) {
    this._call = call;
  }

  get _proofData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _signatures(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ConfidentialTransferCall__Outputs {
  _call: ConfidentialTransferCall;

  constructor(call: ConfidentialTransferCall) {
    this._call = call;
  }
}

export class ConfidentialTransferFromCall extends EthereumCall {
  get inputs(): ConfidentialTransferFromCall__Inputs {
    return new ConfidentialTransferFromCall__Inputs(this);
  }

  get outputs(): ConfidentialTransferFromCall__Outputs {
    return new ConfidentialTransferFromCall__Outputs(this);
  }
}

export class ConfidentialTransferFromCall__Inputs {
  _call: ConfidentialTransferFromCall;

  constructor(call: ConfidentialTransferFromCall) {
    this._call = call;
  }

  get _proof(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _proofOutput(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ConfidentialTransferFromCall__Outputs {
  _call: ConfidentialTransferFromCall;

  constructor(call: ConfidentialTransferFromCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _aceAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _linkedTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _scalingFactor(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
