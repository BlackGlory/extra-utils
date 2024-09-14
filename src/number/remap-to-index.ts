import { NonEmptyArray } from 'justypes'
import { remap } from './remap.js'

export function remapToIndex(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<unknown>
): number {
  const index = Math.floor(
    remap(
      value
    , range
    , [0, items.length]
    )
  )

  return index === items.length
       ? items.length - 1
       : index
}
