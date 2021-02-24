import { JsonRpcError, JsonRpcNotification, JsonRpcRequest, JsonRpcSuccess } from '@interfaces/json-rpc'
import Ajv from 'ajv'

const JsonRpcIdSchema = {
  oneOf: [
    { type: 'string' }
  , { type: 'number' }
  ]
}

const JsonRpcParamsSchema = {
  oneOf: [
    { type: 'array' }
  , { type: 'object' }
  ]
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

const JsonRpcSuccessSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , id: JsonRpcIdSchema
  , result: {}
  }
, required: ['jsonrpc', 'id', 'result']
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

const JsonRpcErrorSchema = {
  type: 'object'
, properties: {
    jsonrpc: { type: 'string' }
  , id: JsonRpcIdSchema
  , error: JsonRpcErrorObjectSchema
  }
, required: ['jsonrpc', 'id', 'error']
}

let ajv: Ajv

export function isJsonRpcNotification<T>(val: unknown): val is JsonRpcNotification<T> {
  if (!ajv) ajv = new Ajv()
  return ajv.validate(JsonRpcNotificationSchema, val)
}

export function isntJsonRpcNotification<T>(val: T): val is Exclude<T, JsonRpcNotification<unknown>> {
  return !isJsonRpcNotification(val)
}

export function isJsonRpcRequest<T>(val: unknown): val is JsonRpcRequest<T> {
  if (!ajv) ajv = new Ajv()
  return ajv.validate(JsonRpcRequestSchema, val)
}

export function isntJsonRpcRequest<T>(val: T): val is Exclude<T, JsonRpcRequest<unknown>> {
  return !isJsonRpcRequest(val)
}

export function isJsonRpcSuccess<T>(val: unknown): val is JsonRpcSuccess<T> {
  if (!ajv) ajv = new Ajv()
  return ajv.validate(JsonRpcSuccessSchema, val)
}

export function isntJsonRpcSuccess<T>(val: T): val is Exclude<T, JsonRpcSuccess<unknown>> {
  return !isJsonRpcSuccess(val)
}

export function isJsonRpcError<T>(val: unknown): val is JsonRpcError<T> {
  if (!ajv) ajv = new Ajv()
  return ajv.validate(JsonRpcErrorSchema, val)
}

export function isntJsonRpcError<T>(val: T): val is Exclude<T, JsonRpcError<unknown>> {
  return !isJsonRpcError(val)
}
