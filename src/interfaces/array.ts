export type FirstOfTuple<T> = T extends [infer R, ...unknown[]] ? R : never
export type NonEmptyArray<T> = [T, ...T[]]
