export function isNull(val: unknown): val is null {
  return val === null
}

export function isntNull<T>(val: T): val is Exclude<T, null> {
  return !isNull(val)
}
