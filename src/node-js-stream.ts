// https://nodejs.org/docs/latest/api/stream.html#stream_api_for_stream_implementers

import { isObject } from './object'

export function isNodeJSWritableStream(val: any): val is NodeJS.WritableStream {
  return isObject(val)
      && typeof val._write === 'function'
      && typeof val._writev === 'function'
      && typeof val._final === 'function'
}

export function isNodeJSReadableStream(val: any): val is NodeJS.ReadableStream {
  return isObject(val)
      && typeof val._read === 'function'
      && typeof val.pipe === 'function'
}
