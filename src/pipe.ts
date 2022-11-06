export function pipe<T, U>(
  value: T
, ...operators: [
    ...Array<(value: T) => T>
  , (value: T) => U
  ]
): U {
  let result: T | U = value
  for (const operator of operators) {
    result = operator(result as T)
  }
  return result as U
}
