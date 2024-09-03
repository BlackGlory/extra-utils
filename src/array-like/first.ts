import { NonEmptyArray } from 'justypes'

export function first<T>(arr: NonEmptyArray<T>): T
export function first<T>(arr: ArrayLike<T>): T | undefined
export function first<T>(arr: ArrayLike<T>): T | undefined {
  return arr.length
       ? arr[0]
       : undefined
}
