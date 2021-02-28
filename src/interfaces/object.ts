export type NonNullableKeys<T> = {
  [P in keyof T]:
    null extends T[P]
    ? never
    : undefined extends T[P]
      ? never
      : P
}[keyof T]

export type PickNonNullableProps<T> = Pick<T, NonNullableKeys<T>>

export type FunctionKeys<T> = {
  [P in keyof T]:
    T[P] extends (...args: any) => unknown
    ? P
    : never
}[keyof T]
