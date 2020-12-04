export type Falsy = 0 | -0 |  false | 0n | null | '' | undefined

export function isFalsy(val: unknown): val is Falsy  {
  return !val
}

export function isntFalsy(val: unknown): boolean {
  return !isFalsy(val)
}
