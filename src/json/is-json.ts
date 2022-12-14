import { Json } from 'justypes'
import { isNull } from '@src/nullish'
import { isBoolean } from '@src/boolean'
import { isString } from '@src/string'
import { isNumber } from '@src/number'
import { isArray } from '@src/array'
import { isPlainObject } from '@src/object'

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
