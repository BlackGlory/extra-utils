export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

export function isntNumber<T>(val: T): val is Exclude<T, number> {
  return !isNumber(val)
}

export function isFinite(val: number): boolean {
  return Number.isFinite(val)
}

export function isPositiveInfinity(val: number): boolean {
  return val === Infinity
}

export function isNegativeInfinity(val: number): boolean {
  return val === -Infinity
}

export function isNaN(val: number): boolean {
  return Number.isNaN(val)
}

export function isntNaN(val: number): boolean {
  return !isNaN(val)
}
