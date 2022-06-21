export function isRegExp(val: unknown): val is RegExp {
  return val instanceof RegExp
}

export function isntRegExp<T>(val: T): val is Exclude<T, RegExp> {
  return !isRegExp(val)
}
