export type NonNullableKeys<T> = {
  [P in keyof T]:
    null extends T[P]
    ? never
    : undefined extends T[P]
      ? never
      : P
}[keyof T]

export type NullableKeys<T> = {
  [P in keyof T]:
    null extends T[P]
    ? P
    : undefined extends T[P]
      ? P
      : never
}[keyof T]

export type PickNonNullableProps<T> = Pick<T, NonNullableKeys<T>>

export type PickNullableProps<T> = Pick<T, NullableKeys<T>>

export type FunctionKeys<T> = {
  [P in keyof T]:
    T[P] extends (...args: any) => unknown
    ? P
    : never
}[keyof T]

export type MapPropsType<T, OldType, NewType> = {
  [P in keyof T]:
    OldType extends T[P]
    ? Exclude<T[P], OldType> | NewType
    : T[P]
}

export type MapPropsNullToUndefined<T> = MapPropsType<T, null, undefined>

export type NullablePropsToOptionalProps<T> =
  PickNonNullableProps<T>
& Partial<MapPropsNullToUndefined<PickNullableProps<T>>>
