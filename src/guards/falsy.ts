import { Falsy } from '@interfaces/falsy'

export function isFalsy(val: unknown): val is Falsy  {
  return !val
}

export function isntFalsy<T>(val: T): val is Exclude<T, Falsy> {
  return !isFalsy(val)
}
