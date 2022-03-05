import { isntNull } from '@src/null'
import { isntUndefined } from '@src/undefined'
import { isFunction } from '@src/function'

export function isAsyncIterable<T>(val: unknown): val is AsyncIterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && isFunction((val as any)[Symbol.asyncIterator])
}

export function isntAsyncIterable<T>(val: T): val is Exclude<T, AsyncIterable<unknown>> {
  return !isAsyncIterable(val)
}
