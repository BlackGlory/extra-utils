import { Json, Jsonable } from 'justypes'
import { isObject } from '@src/object'
import { isFunction } from '@src/is-function'

export function isJsonable<T extends Json>(val: unknown): val is Jsonable<T> {
  return isObject(val)
      && 'toJSON' in val
      && isFunction(val.toJSON)
}

export function isntJsonable<T>(val: T): val is Exclude<T, Jsonable<Json>> {
  return !isJsonable(val)
}
