export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isntFunction(val: unknown): boolean {
  return !isFunction(val)
}
