import { isString, isStringObject } from './string'

export type Char = (string | String) & { length: 1}
export type CharPrimitive = string & { length: 1}
export type CharObject = String & { length: 1 }

export function isChar(val: unknown): val is Char {
  return (isString(val) || isStringObject(val))
      && val.length === 1
}

export function isCharPrimitive(val: unknown): val is CharPrimitive {
  return isString(val)
      && val.length === 1
}

export function isCharObject(val: unknown): val is CharObject {
  return isStringObject(val)
      && val.length === 1
}

export function isntChar(val: unknown): boolean {
  return !isChar(val)
}

export function isntCharPrimitive(val: unknown): boolean {
  return !isCharPrimitive(val)
}

export function isntCharObject(val: unknown): boolean {
  return !isCharObject(val)
}
