export function isSymbol(val: unknown): val is symbol {
  return typeof val === 'symbol'
}

export function isntSymbol<T>(val: T): val is Exclude<T, symbol> {
  return !isSymbol(val)
}
