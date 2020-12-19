import { isObject } from './object'
import { isString } from './string'
import { isNumber } from './number'
import { Dict } from './dict'
import {  } from 'ajv'

export type JsonRpcId = string | number
export type JsonRpcParams<T> = T[] | Dict<T>
export type JsonRpc<T> =
| JsonRpcNotification<T>
| JsonRpcRequest<T>
| JsonRpcResponse<T>

export type JsonRpcResponse<T> =
| JsonRpcSuccess<T>
| JsonRpcError<T>

export interface JsonRpcNotification<T> {
  jsonrpc: '2.0'
  method: string
  params?: JsonRpcParams<T>
}

export interface JsonRpcRequest<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  method: string
  params?: JsonRpcParams<T>
}

export interface JsonRpcSuccess<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  result: T
}

export interface JsonRpcError<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  error: JsonRpcErrorObject<T>
}

export interface JsonRpcErrorObject<T> {
  code: number
  message: string
  data?: T
}

export function isJsonRpc<T>(val: unknown): val is JsonRpc<T> {
  return isObject(val)
      && 'jsonrpc' in val && isString(val['jsonrpc'])
}

export function isJsonRpcNotification<T>(val: unknown): val is JsonRpcNotification<T> {
  return isJsonRpc<T>(val)
      && 'method' in val && isString(val['method'])
      && !('id' in val)
}

export function isJsonRpcRequest<T>(val: unknown): val is JsonRpcRequest<T> {
  return isJsonRpc<T>(val)
      && 'method' in val && isString(val['method'])
      && hasId(val)
}

export function isJsonRpcError<T>(val: unknown): val is JsonRpcError<T> {
  return isJsonRpc<T>(val)
      && hasId()
      && 'error' in val && isObject(val['error'])
}

function hasId(val: Dict<any>): boolean {
  return 'id' in val && (isString(val['id']) || isNumber(val['id']))
}
