import { NonEmptyArray } from 'justypes'
import { remap } from './remap.js'
import { remapToIndex } from './remap-to-index.js'

export function remapToWeightedIndex(
  value: number
, range: readonly [min: number, max: number]
, weights: NonEmptyArray<number>
): number {
  const newRangeMax = weights.reduce((acc, cur) => acc + Math.max(cur, 0))

  if (newRangeMax === 0) {
    // 只有在所有权重都小于等于0的情况下会进入此路径, 所有权重此时都被视为1.
    return remapToIndex(value, range, weights)
  } else {
    const newValue = remap(value, range, [0, newRangeMax])

    let remains = newRangeMax
    for (let i = weights.length; i--;) {
      const weight = weights[i]
      if (weight <= 0) {
        continue
      } else {
        remains -= weight
        if (newValue >= remains) return i
      }
    }

    // 浮点数运算的精度导致代码可能会运行到此处, 此时newValue的值小于remains的值, 此时直接返回索引0作为结果.
    return 0
  }
}
