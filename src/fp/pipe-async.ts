import { Awaitable } from 'justypes'

export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  , (value: U) => Awaitable<V>
  , (value: V) => Awaitable<W>
  , (value: W) => Awaitable<X>
  , (value: X) => Awaitable<Y>
  , (value: Y) => Awaitable<Z>
  ]
): Promise<Z>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  , (value: U) => Awaitable<V>
  , (value: V) => Awaitable<W>
  , (value: W) => Awaitable<X>
  , (value: X) => Awaitable<Y>
  ]
): Promise<Y>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  , (value: U) => Awaitable<V>
  , (value: V) => Awaitable<W>
  , (value: W) => Awaitable<X>
  ]
): Promise<X>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  , (value: U) => Awaitable<V>
  , (value: V) => Awaitable<W>
  ]
): Promise<W>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  , (value: U) => Awaitable<V>
  ]
): Promise<V>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  , (value: T) => Awaitable<U>
  ]
): Promise<U>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  , (value: S) => Awaitable<T>
  ]
): Promise<T>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  , (value: R) => Awaitable<S>
  ]
): Promise<S>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  , (value: Q) => Awaitable<R>
  ]
): Promise<R>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  , (value: P) => Awaitable<Q>
  ]
): Promise<Q>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  , (value: O) => Awaitable<P>
  ]
): Promise<P>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  , (value: N) => Awaitable<O>
  ]
): Promise<O>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  , (value: M) => Awaitable<N>
  ]
): Promise<N>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  , (value: L) => Awaitable<M>
  ]
): Promise<M>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K, L>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  , (value: K) => Awaitable<L>
  ]
): Promise<L>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J, K>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  , (value: J) => Awaitable<K>
  ]
): Promise<K>
export function pipeAsync<A, B, C, D, E, F, G, H, I, J>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  , (value: I) => Awaitable<J>
  ]
): Promise<J>
export function pipeAsync<A, B, C, D, E, F, G, H, I>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  , (value: H) => Awaitable<I>
  ]
): Promise<I>
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
  // 此处any有意义, 不可替换为unknown.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
