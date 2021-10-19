import { isArray } from './array'
import { isRecord, isObject } from './object'
import { isString } from './string'
import { isNumber } from './number'
import { isUndefined } from './undefined'
import {
  JsonRpcId
, JsonRpcParams
, JsonRpcNotification
, JsonRpcRequest
, JsonRpcSuccess
, JsonRpcError
, JsonRpcErrorObject
} from 'justypes'

function isJsonRpcId(val: unknown): val is JsonRpcId {
  return isString(val) || isNumber(val)
}

function isJsonRpcParams<T>(val: unknown): val is JsonRpcParams<T> {
  return isArray(val) || isObject(val)
}

export function isJsonRpcNotification<T>(val: unknown): val is JsonRpcNotification<T> {
  return isRecord(val)
      && isString(val.jsonrpc)
      && isString(val.method)
      && isUndefined(val.id)
      && isJsonRpcParams(val.params)
}

export function isntJsonRpcNotification<T>(
  val: T
): val is Exclude<T, JsonRpcNotification<unknown>> {
  return !isJsonRpcNotification(val)
}

export function isJsonRpcRequest<T>(val: unknown): val is JsonRpcRequest<T> {
  return isRecord(val)
      && isString(val.jsonrpc)
      && isString(val.method)
      && isJsonRpcId(val.id)
      && isJsonRpcParams(val.params)
}

export function isntJsonRpcRequest<T>(val: T): val is Exclude<T, JsonRpcRequest<unknown>> {
  return !isJsonRpcRequest(val)
}

export function isJsonRpcSuccess<T>(val: unknown): val is JsonRpcSuccess<T> {
  return isRecord(val)
      && isString(val.jsonrpc)
      && isString(val.id)
      && 'result' in val
}

export function isntJsonRpcSuccess<T>(val: T): val is Exclude<T, JsonRpcSuccess<unknown>> {
  return !isJsonRpcSuccess(val)
}

export function isJsonRpcError<T>(val: unknown): val is JsonRpcError<T> {
  return isRecord(val)
      && isString(val.jsonrpc)
      && isJsonRpcId(val.id)
      && isJsonRpcErrorObject(val.error)
}

export function isntJsonRpcError<T>(val: T): val is Exclude<T, JsonRpcError<unknown>> {
  return !isJsonRpcError(val)
}

function isJsonRpcErrorObject<T>(val: unknown): val is JsonRpcErrorObject<T> {
  return isRecord(val)
      && isNumber(val.code)
      && isString(val.message)
      && (isUndefined(val.data) || isObject(val.data))
}
