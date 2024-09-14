import { IWeightedItem, remapToWeightedItem } from '@src/number/remap-to-weighted-item.js'
import { NonEmptyArray } from 'justypes'

describe.each([
  remapToWeightedItem
, (
    (
      value: number
    , range: readonly [min: number, max: number]
    , items: NonEmptyArray<IWeightedItem>
    ) => remapToWeightedItem(
      value
    , range
    , items
    , items.map(x => x.weight) as NonEmptyArray<number>
    )
  ) as typeof remapToWeightedItem
])('remapToWeightedItem', remapToWeightedItem => {
  describe('[0, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 0
        , value: 'foo'
        }
      , {
          weight: 0
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(0, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0.5, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })

    test('weights: [0, 100]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 0
        , value: 'foo'
        }
      , {
          weight: 100
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(0, range, items).value).toBe('bar')
      expect(remapToWeightedItem(0.5, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })

    test('weights: [100, 0]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 100
        , value: 'foo'
        }
      , {
          weight: 0
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(0, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0.5, range, items).value).toBe('foo')
      expect(remapToWeightedItem(1, range, items).value).toBe('foo')
    })

    test('weights: [50, 50]', () => {
      const range = [0, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 50
        , value: 'foo'
        }
      , {
          weight: 50
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(0, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0.5, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })
  })

  describe('[-1, 1] to weights', () => {
    test('weights: [0, 0]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 0
        , value: 'foo'
        }
      , {
          weight: 0
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(-1, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })

    test('weights: [0, 100]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 0
        , value: 'foo'
        }
      , {
          weight: 100
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(-1, range, items).value).toBe('bar')
      expect(remapToWeightedItem(0, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })

    test('weights: [100, 0]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 100
        , value: 'foo'
        }
      , {
          weight: 0
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(-1, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0, range, items).value).toBe('foo')
      expect(remapToWeightedItem(1, range, items).value).toBe('foo')
    })

    test('weights: [50, 50]', () => {
      const range = [-1, 1] as const
      const items: NonEmptyArray<{
        weight: number
        value: string
      }> = [
        {
          weight: 50
        , value: 'foo'
        }
      , {
          weight: 50
        , value: 'bar'
        }
      ]

      expect(remapToWeightedItem(-1, range, items).value).toBe('foo')
      expect(remapToWeightedItem(0, range, items).value).toBe('bar')
      expect(remapToWeightedItem(1, range, items).value).toBe('bar')
    })
  })
})
