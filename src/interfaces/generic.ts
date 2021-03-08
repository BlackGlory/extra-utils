export type WithDefaultType<T, DefaultType> =
  T extends undefined | null
  ? NonNullable<T> | DefaultType
  : T

export type UnboxPromise<T> = T extends Promise<infer U> ? U : never
export type UnboxPromiseLike<T> = T extends PromiseLike<infer U> ? U : never
