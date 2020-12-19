import { Dict } from './dict'
import Ajv from 'ajv'

const ajv = new Ajv()

export type JsonRpcId = string | number
const JsonRpcIdSchema = {
  oneOf: [
    { type: 'string' }
  , { type: 'number' }
  ]
}

export type JsonRpcParams<T> = T[] | Dict<T>
const JsonRpcParamsSchema = {
  oneOf: [
    { type: 'array' }
  , { type: 'object' }
  ]
}

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
const JsonRpcNotificationSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , method: { type: 'string' }
  , params: JsonRpcParamsSchema
  , id: false
  }
, required: ['jsonrpc', 'method']
}

export interface JsonRpcRequest<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  method: string
  params?: JsonRpcParams<T>
}
const JsonRpcRequestSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , id: JsonRpcIdSchema
  , method: { type: 'string' }
  , params: JsonRpcParamsSchema
  }
, required: ['jsonrpc', 'id', 'method']
}

export interface JsonRpcSuccess<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  result: T
}
const JsonRpcSuccessSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , id: JsonRpcIdSchema
  , result: {}
  }
, required: ['jsonrpc', 'id', 'result']
}

export interface JsonRpcErrorObject<T> {
  code: number
  message: string
  data?: T
}
const JsonRpcErrorObjectSchema = {
  type: 'object'
, properties: {
    code: { type: 'number' }
  , message: { type: 'string' }
  , data: {}
  }
, required: ['code', 'message']
}

export interface JsonRpcError<T> {
  jsonrpc: '2.0'
  id: JsonRpcId
  error: JsonRpcErrorObject<T>
}
const JsonRpcErrorSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , id: JsonRpcIdSchema
  , error: JsonRpcErrorObjectSchema
  }
, required: ['jsonrpc', 'id', 'error']
}

export function isJsonRpcNotification<T>(val: unknown): val is JsonRpcNotification<T> {
  return ajv.validate(JsonRpcNotificationSchema, val)
}

export function isJsonRpcRequest<T>(val: unknown): val is JsonRpcRequest<T> {
  return ajv.validate(JsonRpcRequestSchema, val)
}

export function isJsonRpcSuccess<T>(val: unknown): val is JsonRpcSuccess<T> {
  return ajv.validate(JsonRpcSuccessSchema, val)
}

export function isJsonRpcError<T>(val: unknown): val is JsonRpcError<T> {
  return ajv.validate(JsonRpcErrorSchema, val)
}
