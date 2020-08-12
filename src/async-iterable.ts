import { isntNull } from './null'
import { isntUndefined } from './undefined'

export function isAsyncIterable<T>(val: any): val is AsyncIterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.asyncIterator] === 'function'
}

export function isntAsyncIterable(val: unknown): boolean {
  return !isAsyncIterable(val)
}
