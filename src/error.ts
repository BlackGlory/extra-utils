export function isError(val: unknown): val is Error {
  return val instanceof Error
}

export function isntError<T>(val: T): val is Exclude<T, Error> {
  return !isError(val)
}
