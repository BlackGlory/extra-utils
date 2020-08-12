import { isntNull } from '@src/null'
import { isntUndefined } from '@src/undefined'

export function isIterable<T>(val: any): val is Iterable<T> {
  return isntNull(val)
      && isntUndefined(val)
      && typeof val[Symbol.iterator] === 'function'
}

export function isntIterable(val: unknown): boolean {
  return !isIterable(val)
}
