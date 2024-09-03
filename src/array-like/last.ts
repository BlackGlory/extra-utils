import { NonEmptyArray } from 'justypes'

export function last<T>(arr: NonEmptyArray<T>): T
export function last<T>(arr: ArrayLike<T>): T | undefined
export function last<T>(arr: ArrayLike<T>): T | undefined {
  return arr.length
       ? arr[arr.length - 1]
       : undefined
}
