import { describe, test, expect } from 'vitest'
import { remapToIndex } from '@src/number/remap-to-index.js'
import { NonEmptyArray } from 'justypes'

describe('remapToIndex', () => {
  test('range: [0, 1]', () => {
    const range = [0, 1] as const
    const items: NonEmptyArray<string> = ['foo', 'bar']

    expect(remapToIndex(0, range, items)).toBe(0)
    expect(remapToIndex(0.5, range, items)).toBe(1)
    expect(remapToIndex(1, range, items)).toBe(1)
  })

  test('range: [-1, 1]', () => {
    const range = [-1, 1] as const
    const items: NonEmptyArray<string>  = ['foo', 'bar']

    expect(remapToIndex(-1, range, items)).toBe(0)
    expect(remapToIndex(0, range, items)).toBe(1)
    expect(remapToIndex(1, range, items)).toBe(1)
  })
})
