import { isString } from '@src/string'

export type Char = string & { length: 1 }

export function isChar(val: unknown): val is Char {
  return isString(val)
      && val.length === 1
}

export function isntChar<T>(val: T): val is Exclude<T, Char> {
  return !isChar(val)
}
