export function isFinite(val: number): boolean {
  return Number.isFinite(val)
}

export function isntFinite(val: number): boolean {
  return !isFinite(val)
}
