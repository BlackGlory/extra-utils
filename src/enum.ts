export function inEnum<T extends object>(val: unknown, _enum: T): val is T {
  return Object.values(_enum).includes(val)
}
