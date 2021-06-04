import { isntNull } from '@src/null'
import { isntUndefined } from '@src/undefined'

export function isIterable<T>(val: any): val is Iterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.iterator] === 'function'
}

export function isntIterable<T>(val: T): val is Exclude<T, Iterable<unknown>> {
  return !isIterable(val)
}
