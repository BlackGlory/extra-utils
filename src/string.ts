export function isString(val: unknown): val is string | String {
  return isStringPrimitive(val) || isStringObject(val)
}

export function isStringPrimitive(val: unknown): val is string {
  return typeof val === 'string'
}

export function isStringObject(val: unknown): val is String {
  return typeof val === 'object' && val instanceof String
}

export function isntString(val: unknown): boolean {
  return !isString(val)
}

export function isntStringPrimitive(val: unknown): boolean {
  return !isStringPrimitive(val)
}

export function isntStringObject(val: unknown): boolean {
  return !isStringObject(val)
}
