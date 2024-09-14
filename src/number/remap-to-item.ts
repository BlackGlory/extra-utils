import { NonEmptyArray } from 'justypes'
import { remapToIndex } from './remap-to-index.js'

export function remapToItem<T>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
): T {
  const index = remapToIndex(value, range, items)
  return items[index]
}
