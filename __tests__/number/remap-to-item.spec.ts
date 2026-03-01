import { describe, test, expect } from 'vitest'
import { remapToItem } from '@src/number/remap-to-item.js'
import { NonEmptyArray } from 'justypes'

describe('remapToItem', () => {
  test('range: [0, 1]', () => {
    const range = [0, 1] as const
    const items: NonEmptyArray<string> = ['foo', 'bar']

    expect(remapToItem(0, range, items)).toBe('foo')
    expect(remapToItem(0.5, range, items)).toBe('bar')
    expect(remapToItem(1, range, items)).toBe('bar')
  })

  test('range: [-1, 1]', () => {
    const range = [-1, 1] as const
    const items: NonEmptyArray<string>  = ['foo', 'bar']

    expect(remapToItem(-1, range, items)).toBe('foo')
    expect(remapToItem(0, range, items)).toBe('bar')
    expect(remapToItem(1, range, items)).toBe('bar')
  })
})
