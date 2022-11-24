import { Json, Jsonable } from 'justypes'
import { isNull } from './nullish'
import { isBoolean } from './boolean'
import { isString } from './string'
import { isNumber } from './number'
import { isArray } from './array'
import { isObject, isPlainObject } from './object'
import { isFunction } from './function'

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

export function isJsonable<T extends Json>(val: unknown): val is Jsonable<T> {
  return isObject(val)
      && 'toJSON' in val
      && isFunction(val.toJSON)
}

export function isntJsonable<T>(val: T): val is Exclude<T, Jsonable<Json>> {
  return !isJsonable(val)
}
