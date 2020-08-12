import { isObject } from '@src/object'

export function isPromise<T>(val: any): val is Promise<T> {
  return val instanceof Promise
}

export function isPromiseLike<T>(val: any): val is PromiseLike<T> {
  return isObject(val) && typeof val.then === 'function'
}
