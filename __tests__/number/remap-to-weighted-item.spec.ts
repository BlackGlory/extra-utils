import { remapToWeightedItem } from '@src/number/remap-to-weighted-item.js'
import { NonEmptyArray } from 'justypes'

describe('remapToWeightedItem', () => {
  describe('[0, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number> = [0, 0]

      expect(remapToWeightedItem(0, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(0.5, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })

    test('weights: [0, 100]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedItem(0, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(0.5, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })

    test('weights: [100, 0]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedItem(0, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(0.5, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })

    test('weights: [50, 50]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [50, 50]

      expect(remapToWeightedItem(0, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(0.5, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })
  })

  describe('[-1, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [0, 0]

      expect(remapToWeightedItem(-1, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(0, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })

    test('weights: [0, 100]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [0, 100]

      expect(remapToWeightedItem(-1, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(0, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })

    test('weights: [100, 0]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [100, 0]

      expect(remapToWeightedItem(-1, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(0, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('foo')
    })

    test('weights: [50, 50]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<string> = ['foo', 'bar']
      const weights: NonEmptyArray<number>  = [50, 50]

      expect(remapToWeightedItem(-1, range, items, weights)).toBe('foo')
      expect(remapToWeightedItem(0, range, items, weights)).toBe('bar')
      expect(remapToWeightedItem(1, range, items, weights)).toBe('bar')
    })
  })
})
