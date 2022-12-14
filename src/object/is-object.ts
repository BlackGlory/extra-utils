export function isObject(
  val: unknown
): val is object & Record<string | symbol | number, unknown> {
  return val !== null
      && typeof val === 'object'
}

export function isntObject<T>(
  val: T
): val is Exclude<T, object & Record<string | symbol | number, unknown>> {
  return !isObject(val)
}
