export function pipe<A, B, C, D, E, F, G>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , ...Array<(value: D) => D>
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
  , ...Array<(value: C) => C>
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  ]
): F
export function pipe<A, B, C, D, E, F>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , ...Array<(value: D) => D>
  , (value: D) => E
  , (value: E) => F
  ]
): F
export function pipe<A, B, C, D, E>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , ...Array<(value: C) => C>
  , (value: C) => D
  , (value: D) => E
  ]
): E
export function pipe<A, B, C, D>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , ...Array<(value: C) => C>
  , (value: C) => D
  ]
): D
export function pipe<A, B, C, D>(
  value: A
, ...operators: [
    (value: A) => B
  , ...Array<(value: B) => B>
  , (value: B) => C
  , (value: C) => D
  ]
): D
export function pipe<A, B, C>(
  value: A
, ...operators: [
    (value: A) => B
  , ...Array<(value: B) => B>
  , (value: B) => C
  ]
): C
export function pipe<A, B>(
  value: A
, ...operators: [
    (value: A) => B
  , ...Array<(value: B) => B>
  ]
): B
export function pipe<A, B>(
  value: A
, ...operators: [
    ...Array<(value: A) => A>
  , (value: A) => B
  ]
): B
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
