export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isntObject(val: unknown): boolean {
  return !isObject(val)
}
