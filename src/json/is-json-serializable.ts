import { JSONValue, JSONSerializable } from 'justypes'
import { isObject } from '@src/object/index.js'
import { isFunction } from '@src/is-function.js'

export function isJSONSerializable<T extends
| JSONValue
| Record<string, JSONValue | JSONSerializable<any>>
| Array<JSONValue | JSONSerializable<any>>
>(val: unknown): val is JSONSerializable<T> {
  return isObject(val)
      && 'toJSON' in val
      && isFunction(val.toJSON)
}

export function isntJSONSerializable<T>(val: T): val is Exclude<T, JSONSerializable<any>> {
  return !isJSONSerializable(val)
}
