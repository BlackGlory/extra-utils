import { enumValues } from './enum-values.js'

export function inEnum<T extends Record<string, string | number>>(
  val: unknown
, _enum: T
): val is T[keyof T] {
  return enumValues(_enum).includes(val as T[keyof T])
}

// 由于TypeScript无法从string | number里精确排除掉枚举类型, 因此返回值为boolean.
export function notInEnum(
  val: unknown
, _enum: Record<string, string | number>
): boolean {
  return !inEnum(val, _enum)
}
