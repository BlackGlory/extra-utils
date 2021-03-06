export function isDate(val: unknown): val is Date {
  return val instanceof Date
}

export function isntDate<T>(val: T): val is Exclude<T, Date> {
  return !isDate(val)
}
