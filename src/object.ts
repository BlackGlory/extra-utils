import isPlainObjectByLodash from 'lodash.isplainobject'

export function isObject(val: unknown): val is object & Record<string | symbol | number, unknown> {
  return val !== null
      && typeof val === 'object'
}

export function isntObject<T>(val: T): val is Exclude<T, object & Record<string | symbol | number, unknown>> {
  return !isObject(val)
}

export function isPlainObject(val: unknown): val is object & Record<string | symbol | number, unknown> {
  // 仅通过`Object.getPrototypeOf(val) === Object.prototype`无法判断Node.js的一些纯对象,
  // 因此在此引入lodash的方法.
  return isPlainObjectByLodash(val)
}

export function isntPlainObject<T>(val: T): val is Exclude<T, object & Record<string | symbol | number, unknown>> {
  return !isPlainObject(val)
}

export function isEmptyObject(val: Record<string | symbol | number, unknown>): boolean {
  return Object.keys(val).length === 0
}

export function isntEmptyObject(val: Record<string | symbol | number, unknown>): boolean {
  return Object.keys(val).length !== 0
}
