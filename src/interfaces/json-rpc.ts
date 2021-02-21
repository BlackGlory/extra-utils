import { Dict } from '@interfaces/dict'

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

export interface JsonRpcErrorObject<T> {
  code: number
  message: string
  data?: T
}

export interface JsonRpcError<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  error: JsonRpcErrorObject<T>
}
