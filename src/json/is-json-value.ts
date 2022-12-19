import { JSONValue } from 'justypes'
import { isNull } from '@src/nullish'
import { isBoolean } from '@src/boolean'
import { isString } from '@src/string'
import { isNumber } from '@src/number'
import { isArray } from '@src/array'
import { isPlainObject } from '@src/object'

export function isJSONValue(val: unknown): val is JSONValue {
  return isNull(val)
      || isBoolean(val)
      || isString(val)
      || isNumber(val)
      || (isArray(val) && val.every(isJSONValue))
      || (isPlainObject(val) && Object.values(val).every(isJSONValue))
}

export function isntJSONValue<T>(val: T): val is Exclude<T, JSONValue> {
  return !isJSONValue(val)
}
