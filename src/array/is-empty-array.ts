import { NonEmptyArray } from 'justypes'

export function isEmptyArray(val: readonly unknown[]): boolean {
  return val.length === 0
}

export function isntEmptyArray<T>(val: readonly T[]): val is NonEmptyArray<T> {
  return val.length !== 0
}
