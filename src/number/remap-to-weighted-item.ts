import { NonEmptyArray } from 'justypes'
import { remapToWeightedIndex } from './remap-to-weighted-index.js'

export interface IWeightedItem {
  weight: number
}

export function remapToWeightedItem<T>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
, weights: NonEmptyArray<number>
): T
export function remapToWeightedItem<T extends IWeightedItem>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
): T
export function remapToWeightedItem<T extends IWeightedItem>(...args:
| [
    value: number
  , range: readonly [min: number, max: number]
  , items: NonEmptyArray<T>
  , weights: NonEmptyArray<number>
  ]
| [
    value: number
  , range: readonly [min: number, max: number]
  , items: NonEmptyArray<T>
  ]
): T {
  let value: number
  let range: readonly [min: number, max: number]
  let items: NonEmptyArray<T>
  let weights: NonEmptyArray<number>

  if (args.length === 3) {
    [value, range, items] = args
    weights = items.map(item => item.weight) as NonEmptyArray<number>
  } else {
    [value, range, items, weights] = args
  }

  const index = remapToWeightedIndex(value, range, weights)
  return items[index]
}
