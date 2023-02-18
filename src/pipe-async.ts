import { Awaitable } from 'justypes'

export function pipeAsync<A, B, C, D, E, F, G, H>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  ]
): Promise<H>
export function pipeAsync<A, B, C, D, E, F, G>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  ]
): Promise<G>
export function pipeAsync<A, B, C, D, E, F>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  ]
): Promise<F>
export function pipeAsync<A, B, C, D, E>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  ]
): Promise<E>
export function pipeAsync<A, B, C, D>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  ]
): Promise<D>
export function pipeAsync<A, B, C>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  ]
): Promise<C>
export function pipeAsync<A, B>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  ]
): Promise<B>
export function pipeAsync<T, U>(
  value: Awaitable<T>
, ...operators: Array<(value: any) => Awaitable<unknown>>
): Promise<U>
export async function pipeAsync<T, U>(
  value: Awaitable<T>
, ...operators: Array<(value: T | U) => T | U>
): Promise<U> {
  let result: T | U = await value
  for (const operator of operators) {
    result = await operator(result)
  }
  return result as U
}
