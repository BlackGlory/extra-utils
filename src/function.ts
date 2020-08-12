export function isFunction<T extends Function = (...args: any[]) => any>(val: unknown): val is T {
  return typeof val === 'function'
}

export function isntFunction(val: unknown): boolean {
  return !isFunction(val)
}
