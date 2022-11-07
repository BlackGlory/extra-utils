export function pipe<T, U, V>(
  value: T
, ...operators: [
    (value: T) => U
  , ...Array<(value: U) => U>
  , (value: U) => V
  ]
): V
export function pipe<T, U>(
  value: T
, ...operators: [
    (value: T) => U
  , ...Array<(value: U) => U>
  ]
): U
export function pipe<T, U>(
  value: T
, ...operators: [
    ...Array<(value: T) => T>
  , (value: T) => U
  ]
): U
export function pipe<T>(
  value: T
, ...operators: Array<(value: T) => T>
): T
export function pipe<T, U>(
  value: T
, ...operators: Array<(value: T | U) => T | U>
): U {
  let result: T | U = value
  for (const operator of operators) {
    result = operator(result)
  }
  return result as U
}
