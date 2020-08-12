export function isNull(val: unknown): val is null {
  return val === null
}

export function isntNull(val: unknown): boolean {
  return !isNull(val)
}
