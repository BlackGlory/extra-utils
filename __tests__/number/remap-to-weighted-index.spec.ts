import { remapToWeightedIndex } from '@src/number/remap-to-weighted-index.js'
import { NonEmptyArray } from 'justypes'

describe('remapToWeightedIndex', () => {
  describe('[0, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [0, 1] as const
      const weights: NonEmptyArray<number> = [0, 0]

      expect(remapToWeightedIndex(0, range, weights)).toBe(0)
      expect(remapToWeightedIndex(0.5, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })

    test('weights: [0, 100]', () => {
      const range = [0, 1] as const
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedIndex(0, range, weights)).toBe(1)
      expect(remapToWeightedIndex(0.5, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })

    test('weights: [100, 0]', () => {
      const range = [0, 1] as const
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedIndex(0, range, weights)).toBe(1)
      expect(remapToWeightedIndex(0.5, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })

    test('weights: [50, 50]', () => {
      const range = [0, 1] as const
      const weights: NonEmptyArray<number>  = [50, 50]

      expect(remapToWeightedIndex(0, range, weights)).toBe(0)
      expect(remapToWeightedIndex(0.5, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })
  })

  describe('[-1, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [-1, 1] as const
      const weights: NonEmptyArray<number>  = [0, 0]

      expect(remapToWeightedIndex(-1, range, weights)).toBe(0)
      expect(remapToWeightedIndex(0, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })

    test('weights: [0, 100]', () => {
      const range = [-1, 1] as const
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedIndex(-1, range, weights)).toBe(1)
      expect(remapToWeightedIndex(0, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })

    test('weights: [100, 0]', () => {
      const range = [-1, 1] as const
      const weights: NonEmptyArray<number>  = [100, 0]

      expect(remapToWeightedIndex(-1, range, weights)).toBe(0)
      expect(remapToWeightedIndex(0, range, weights)).toBe(0)
      expect(remapToWeightedIndex(1, range, weights)).toBe(0)
    })

    test('weights: [50, 50]', () => {
      const range = [-1, 1] as const
      const weights: NonEmptyArray<number>  = [50, 50]

      expect(remapToWeightedIndex(-1, range, weights)).toBe(0)
      expect(remapToWeightedIndex(0, range, weights)).toBe(1)
      expect(remapToWeightedIndex(1, range, weights)).toBe(1)
    })
  })
})
