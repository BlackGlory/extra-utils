import { enumValues } from './enum-values.js'

// 由于TypeScript枚举对象本身的类型为`typeof enum`, 不能从参数里提取出泛型.
export function inEnum<T extends string | number>(
  val: string | number
, _enum: Record<string | number, string | number>
): val is T {
  return enumValues(_enum).includes(val)
}

// 由于TypeScript无法从string | number里精确排除掉枚举类型, 因此返回值为boolean.
export function notInEnum(
  val: string | number
, _enum: Record<string | number, string | number>
): boolean {
  return !inEnum(val, _enum)
}
