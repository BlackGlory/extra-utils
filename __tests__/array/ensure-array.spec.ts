import { describe, test, expect } from 'vitest'
import { ensureArray } from '@src/array/ensure-array.js'

describe('ensureArray', () => {
  test('array', () => {
    const value = ['foo']

    const result = ensureArray(value)

    expect(result).toBe(value)
  })

  test('non-array', () => {
    const value = 'foo'

    const result = ensureArray(value)

    expect(result).toStrictEqual([value])
  })
})
