import { Nullish } from 'justypes'
import { isNull } from './is-null'
import { isUndefined } from './is-undefined'

export function isNullish(val: unknown): val is Nullish {
  return isNull(val)
      || isUndefined(val)
}

export function isntNullish<T>(val: T): val is Exclude<T, Nullish> {
  return !isNullish(val)
}
