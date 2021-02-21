export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isntNumber<T>(val: T): val is Exclude<T, number> {
  return !isNumber(val)
}
