export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isntString<T>(val: T): val is Exclude<T, string> {
  return !isString(val)
}
