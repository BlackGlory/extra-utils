import { enumValues } from './enum-values.js'

export function inEnum<T extends Record<string | number, string | number>>(
  val: string | number
, _enum: T
): val is T[keyof T] {
  return enumValues(_enum).includes(val as T[keyof T])
}

// 由于TypeScript无法从string | number里精确排除掉枚举类型, 因此返回值为boolean.
export function notInEnum(
  val: string | number
, _enum: Record<string | number, string | number>
): boolean {
  return !inEnum(val, _enum)
}
