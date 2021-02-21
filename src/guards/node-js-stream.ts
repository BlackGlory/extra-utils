// https://nodejs.org/docs/latest/api/stream.html#stream_api_for_stream_implementers

import { isObject } from '@guards/object'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isObject(val)
      && typeof val.writable === 'boolean'
      && typeof val.write === 'function'
}

export function isntNodeJSWritableStream<T>(val: T): val is Exclude<T, NodeJS.WritableStream> {
  return !isNodeJSWritableStream(val)
}

export function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream {
  return isObject(val)
      && typeof val.readable === 'boolean'
      && typeof val.read === 'function'
      && typeof val.pipe === 'function'
}

export function isntNodeJSReadableStream<T>(val: T): val is Exclude<T, NodeJS.ReadableStream> {
  return !isNodeJSReadableStream(val)
}
