import { isString, isStringObject } from '@src/string'

export type Char = (string | String) & { length: 1}
export type CharPrimitive = string & { length: 1}
export type CharObject = String & { length: 1 }

export function isChar(val: unknown): val is Char {
  return (isString(val) || isStringObject(val))
      && val.length === 1
}

export function isntChar<T>(val: T): val is Exclude<T, Char> {
  return !isChar(val)
}

export function isCharPrimitive(val: unknown): val is CharPrimitive {
  return isString(val)
      && val.length === 1
}

export function isntCharPrimitive<T>(val: T): val is Exclude<T, CharPrimitive> {
  return !isCharPrimitive(val)
}

export function isCharObject(val: unknown): val is CharObject {
  return isStringObject(val)
      && val.length === 1
}

export function isntCharObject<T>(val: T): val is Exclude<T, CharObject> {
  return !isCharObject(val)
}
