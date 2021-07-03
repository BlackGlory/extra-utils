export function isObject(val: unknown): val is object {
  return val !== null && typeof val === 'object'
}

export function isntObject<T>(val: T): val is Exclude<T, object> {
  return !isObject(val)
}

export function isRecord(val: unknown): val is Record<string | symbol | number, unknown> {
  return isObject(val)
}

export function isEmptyObject(val: object): boolean {
  return Object.keys(val).length === 0
}

export function isntEmptyObject(val: object): boolean {
  return Object.keys(val).length !== 0
}
