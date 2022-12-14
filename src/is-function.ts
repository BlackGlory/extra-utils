export function isFunction<T extends Function = (...args: any[]) => any>(
  val: unknown
): val is T {
  return typeof val === 'function'
}

export function isntFunction<T>(val: T): val is Exclude<T, Function> {
  return !isFunction(val)
}
