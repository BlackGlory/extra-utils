import { isObject } from '@guards/object'

export function isPromise<T>(val: any): val is Promise<T> {
  return val instanceof Promise
}

export function isntPromise<T>(val: T): val is Exclude<T, Promise<unknown>> {
  return !isPromise(val)
}

export function isPromiseLike<T>(val: any): val is PromiseLike<T> {
  return isObject(val) && typeof val.then === 'function'
}

export function isntPromiseLike<T>(val: T): val is Exclude<T, PromiseLike<unknown>> {
  return !isntPromiseLike(val)
}
