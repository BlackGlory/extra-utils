import { isntNull } from '@guards/null'
import { isntUndefined } from '@guards/undefined'

export function isIterable<T>(val: any): val is Iterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.iterator] === 'function'
}

export function isntIterable<T>(val: unknown): val is Exclude<T, Iterable<unknown>> {
  return !isIterable(val)
}
