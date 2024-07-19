export function remap(
  value: number
, [oldMin, oldMax]: readonly [oldMin: number, oldMax: number]
, [newMin, newMax]: readonly [newMin: number, newMax: number]
): number {
  return (value - oldMin) / (oldMax - oldMin)
       * (newMax - newMin)
       + newMin
}
