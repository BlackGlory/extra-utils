export function enumKeys(_enum: Record<string, unknown>): string[] {
  return Object.keys(_enum)
    .filter(key => Number.isNaN(Number(key))) // TypeScript枚举不能以数值为键
}
