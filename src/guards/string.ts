export function isString(val: unknown): val is string | String {
  return isStringPrimitive(val) || isStringObject(val)
}

export function isntString<T>(val: T): val is Exclude<T, string | String> {
  return !isString(val)
}

export function isStringPrimitive(val: unknown): val is string {
  return typeof val === 'string'
}

export function isntStringPrimitive<T>(val: T): val is Exclude<T, string> {
  return !isStringPrimitive(val)
}

export function isStringObject(val: unknown): val is String {
  return typeof val === 'object' && val instanceof String
}

export function isntStringObject<T>(val: T): val is Exclude<T, String> {
  return !isStringObject(val)
}
