export function pipe<A, B, C, D, E, F, G, H>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  , (value: F) => G
  , (value: G) => H
  ]
): H
export function pipe<A, B, C, D, E, F, G>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  , (value: F) => G
  ]
): G
export function pipe<A, B, C, D, E, F>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  ]
): F
export function pipe<A, B, C, D, E>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  ]
): E
export function pipe<A, B, C, D>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  ]
): D
export function pipe<A, B, C>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  ]
): C
export function pipe<A, B>(
  value: A
, ...operators: [
    (value: A) => B
  ]
): B
export function pipe<T, U>(
  value: T
, ...operators: Array<(value: any) => unknown>
): U
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
