import { describe, test, expect } from 'vitest'
import { last } from '@src/array-like/last.js'

describe('last', () => {
  test('empty', () => {
    const arr: number[] = []

    const result = last(arr)

    expect(result).toBe(undefined)
  })

  test('non-empty', () => {
    const arr: number[] = [1, 2]

    const result = last(arr)

    expect(result).toBe(2)
  })
})
