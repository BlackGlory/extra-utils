export function isPositiveInfinity(val: number): boolean {
  return val === Infinity
}

export function isNegativeInfinity(val: number): boolean {
  return val === -Infinity
}

export function isntPositiveInfinity(val: number): boolean {
  return !isPositiveInfinity(val)
}

export function isntNegativeInfinity(val: number): boolean {
  return !isNegativeInfinity(val)
}
