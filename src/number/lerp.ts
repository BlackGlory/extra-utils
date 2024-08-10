export function lerp(
  alpha: number
, [from, to]: readonly [from: number, to: number]
): number {
  return from + (to - from) * alpha
}
