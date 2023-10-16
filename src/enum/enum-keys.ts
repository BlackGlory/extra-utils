export function enumKeys<T extends Record<string, string | number>>(
  _enum: T
): Array<keyof T> {
  return Object.keys(_enum)
    .filter(key => Number.isNaN(Number(key))) // TypeScript枚举不能以数值为键
}
