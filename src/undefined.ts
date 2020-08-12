export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isntUndefined(val: unknown): boolean {
  return !isUndefined(val)
}
