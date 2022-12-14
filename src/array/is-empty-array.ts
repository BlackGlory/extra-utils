import { NonEmptyArray } from 'justypes'

export function isEmptyArray(val: unknown[]): boolean {
  return val.length === 0
}

export function isntEmptyArray<T>(val: T[]): val is NonEmptyArray<T> {
  return val.length !== 0
}
