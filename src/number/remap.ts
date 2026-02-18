import { assert } from '@blackglory/errors'

export function remap(
  value: number
, [oldMin, oldMax]: readonly [oldMin: number, oldMax: number]
, [newMin, newMax]: readonly [newMin: number, newMax: number]
): number {
  assert(oldMin <= oldMax, 'The oldMin must be less than or equal to oldMax')
  assert(newMin <= newMax, 'The newMin must be less than or equal to newMax')
  assert(
    value >= oldMin && value <= oldMax
  , 'The parameter value must between oldMin and oldMax'
  )

  if (oldMin === oldMax) {
    assert(
      newMin === newMax
    , 'The old range cannot be zero-length unless the new range is also zero-length'
    )

    return newMin
  } else {
    return (value - oldMin) / (oldMax - oldMin)
         * (newMax - newMin)
         + newMin
  }
}
