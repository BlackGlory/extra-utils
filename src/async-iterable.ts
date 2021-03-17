import { isntNull } from '@src/null'
import { isntUndefined } from '@src/undefined'

export function isAsyncIterable<T>(val: any): val is AsyncIterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.asyncIterator] === 'function'
}

export function isntAsyncIterable<T>(val: T): val is Exclude<T, AsyncIterable<unknown>> {
  return !isAsyncIterable(val)
}
