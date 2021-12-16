export function isObject(val: unknown): val is Record<string | symbol | number, unknown> {
  return val !== null
      && typeof val === 'object'
}

export function isntObject<T>(val: T): val is Exclude<T, Record<string | symbol | number, unknown>> {
  return !isObject(val)
}

export function isPlainObject(val: unknown): val is Record<string | symbol | number, unknown> {
  return isObject(val)
      && Object.getPrototypeOf(val) === Object.prototype
}

export function isntPlainObject<T>(val: T): val is Exclude<T, Record<string | symbol | number, unknown>> {
  return !isPlainObject(val)
}

export function isEmptyObject(val: Record<string | symbol | number, unknown>): boolean {
  return Object.keys(val).length === 0
}

export function isntEmptyObject(val: Record<string | symbol | number, unknown>): boolean {
  return Object.keys(val).length !== 0
}
