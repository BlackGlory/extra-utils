export function isBigInt(val: unknown): val is bigint {
  return typeof val === 'bigint'
}

export function isntBigInt<T>(val: T): val is Exclude<T, bigint> {
  return !isBigInt(val)
}
