import { isObject } from './object'
import { isFunction } from './function'

export function isPromise<T>(val: any): val is Promise<T> {
  return val instanceof Promise
}

export function isntPromise<T>(val: T): val is Exclude<T, Promise<unknown>> {
  return !isPromise(val)
}

export function isntPromiseLike<T>(val: T): val is Exclude<T, PromiseLike<unknown>> {
  return !isPromiseLike(val)
}

export function isPromiseLike<T>(val: any): val is PromiseLike<T> {
  return isObject(val)
      && isFunction(val.then)
}
