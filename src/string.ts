export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isntString<T>(val: T): val is Exclude<T, string> {
  return !isString(val)
}

export function isChar(val: unknown): val is string {
  return isString(val)
      && val.length === 1
}

export function isntChar(val: unknown): boolean {
  return !isChar(val)
}
