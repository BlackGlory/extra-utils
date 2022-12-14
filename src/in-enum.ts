// 由于以下原因, 该函数不应该被改写为其他形式:
// - enum在TypeScript里被作为单独的类型看待, 不满足extends object
// - 作为泛型时, enum参数会被提取为typeof enum类型而不是enum
export function inEnum<T>(val: unknown, _enum: object): val is T {
  return Object.values(_enum).includes(val)
}

export function notInEnum<T, U>(val: T, _enum: object): val is Exclude<T, U> {
  return !inEnum(val, _enum)
}
