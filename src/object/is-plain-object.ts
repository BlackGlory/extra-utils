import { isPlainObject as isPlainObjectByLodash } from 'lodash-es'

export function isPlainObject(
  val: unknown
): val is object & Record<string | symbol | number, unknown> {
  // 仅通过`Object.getPrototypeOf(val) === Object.prototype`无法判断Node.js的一些纯对象,
  // 因此在此引入lodash的方法.
  return isPlainObjectByLodash(val)
}

export function isntPlainObject<T>(
  val: T
): val is Exclude<T, object & Record<string | symbol | number, unknown>> {
  return !isPlainObject(val)
}
