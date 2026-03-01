import { describe, test, expect } from 'vitest'
import { remap } from '@src/number/remap.js'

describe('remap', () => {
  test('[0, 1] to [10, 20]', () => {
    const oldRange = [0, 1] as const
    const newRange = [10, 20] as const

    expect(remap(0, oldRange, newRange)).toBe(10)
    expect(remap(0.25, oldRange, newRange)).toBe(12.5)
    expect(remap(0.5, oldRange, newRange)).toBe(15)
    expect(remap(0.75, oldRange, newRange)).toBe(17.5)
    expect(remap(1, oldRange, newRange)).toBe(20)
  })

  test('[-1, 1] to [10, 20]', () => {
    const oldRange = [-1, 1] as const
    const newRange = [10, 20] as const

    expect(remap(-1, oldRange, newRange)).toBe(10)
    expect(remap(-0.5, oldRange, newRange)).toBe(12.5)
    expect(remap(0, oldRange, newRange)).toBe(15)
    expect(remap(0.5, oldRange, newRange)).toBe(17.5)
    expect(remap(1, oldRange, newRange)).toBe(20)
  })

  test('edge: zero-length range', () => {
    const oldRange = [0, 0] as const
    const newRange = [10, 10] as const

    expect(remap(0, oldRange, newRange)).toBe(10)
  })
})
