import { Nullish } from 'justypes'

export function isNullish(val: unknown): val is Nullish {
  return isNull(val)
      || isUndefined(val)
}

export function isntNullish<T>(val: T): val is Exclude<T, Nullish> {
  return !isNullish(val)
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isntNull<T>(val: T): val is Exclude<T, null> {
  return !isNull(val)
}

export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isntUndefined<T>(val: T): val is Exclude<T, undefined> {
  return !isUndefined(val)
}
