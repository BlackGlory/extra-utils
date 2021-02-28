export type WithDefaultType<T, DefaultType> =
  T extends undefined | null
  ? NonNullable<T> | DefaultType
  : T
