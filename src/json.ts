import { Json } from 'justypes'
import { isNull } from './nullish'
import { isBoolean } from './boolean'
import { isString } from './string'
import { isNumber } from './number'
import { isArray } from './array'
import { isPlainObject } from './object'

export function isJson(val: unknown): val is Json {
  return isNull(val)
      || isBoolean(val)
      || isString(val)
      || isNumber(val)
      || (isArray(val) && val.every(isJson))
      || (isPlainObject(val) && Object.values(val).every(isJson))
}

export function isntJson<T>(val: T): val is Exclude<T, Json> {
  return !isJson(val)
}
