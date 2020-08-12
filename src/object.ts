export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
