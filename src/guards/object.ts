export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isntObject<T>(val: T): val is Exclude<T, Object> {
  return !isObject(val)
}
