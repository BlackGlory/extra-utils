export function last<T>(arr: ArrayLike<T>): T | undefined {
  return arr.length
       ? arr[arr.length - 1]
       : undefined
}
