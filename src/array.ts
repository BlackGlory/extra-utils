import { NonEmptyArray } from 'justypes'

export function isArray<T>(val: unknown): val is Array<T> {
  return Array.isArray(val)
}

export function isntArray<T>(val: T): val is Exclude<T, Array<unknown>> {
  return !isArray(val)
}

export function isEmptyArray(val: unknown[]): boolean {
  return val.length === 0
}

export function isntEmptyArray<T>(val: T[]): val is NonEmptyArray<T> {
  return val.length !== 0
}
