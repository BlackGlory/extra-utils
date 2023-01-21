import { JSONValue } from 'justypes'
import { isNull } from '@src/nullish/index.js'
import { isBoolean } from '@src/boolean/index.js'
import { isString } from '@src/string/index.js'
import { isNumber } from '@src/number/index.js'
import { isArray } from '@src/array/index.js'
import { isPlainObject } from '@src/object/index.js'

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
