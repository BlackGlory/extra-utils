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
, ...operators:
  | [...Array<(value: T) => T>, (value: T) => U]
  | Array<(value: T) => T>
): U {
  let result: T | U = value
  for (const operator of operators) {
    result = operator(result as T)
  }
  return result as U
}
