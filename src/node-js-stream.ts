import { readable, writable } from  'is-stream'

export function isNodeJSWritableStream(val: unknown): val is NodeJS.WritableStream {
  return writable(val)
}

export function isNodeJSReadableStream(val: unknown): val is NodeJS.ReadableStream {
  return readable(val)
}
