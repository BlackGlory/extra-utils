import { Falsy } from 'justypes'

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isntBoolean<T>(val: unknown): val is Exclude<T, boolean> {
  return !isBoolean(val)
}

export function isFalsy(val: unknown): val is Falsy {
  return !val
}

export function isntFalsy<T>(val: T): val is Exclude<T, Falsy> {
  return !isFalsy(val)
}
