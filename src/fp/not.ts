export function not<Args extends unknown[]>(
  predicate: (...args: Args) => boolean
): (...args: Args) => boolean {
  return (...args: Args) => !predicate(...args)
}
