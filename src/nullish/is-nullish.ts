import { Nullish } from 'justypes'
import { isNull } from './is-null.js'
import { isUndefined } from './is-undefined.js'

export function isNullish(val: unknown): val is Nullish {
  return isNull(val)
      || isUndefined(val)
}

export function isntNullish<T>(val: T): val is Exclude<T, Nullish> {
  return !isNullish(val)
}
