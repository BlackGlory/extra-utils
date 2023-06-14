export function first<T>(arr: ArrayLike<T>): T | undefined {
  return arr.length
       ? arr[0]
       : undefined
}
