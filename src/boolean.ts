export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isntBoolean<T>(val: unknown): val is Exclude<T, boolean> {
  return !isBoolean(val)
}
