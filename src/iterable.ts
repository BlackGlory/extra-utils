import { isntNull } from './null'
import { isntUndefined } from './undefined'

export function isIterable<T>(val: any): val is Iterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.iterator] === 'function'
}

export function isntIterable(val: unknown): boolean {
  return !isIterable(val)
}
