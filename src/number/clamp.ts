export function clamp(
  val: number
, [min, max]: readonly [min: number, max: number]
): number {
  return Math.max(min, Math.min(val, max))
}
