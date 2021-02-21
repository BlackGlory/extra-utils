export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isntUndefined<T>(val: T): val is Exclude<T, undefined> {
  return !isUndefined(val)
}
