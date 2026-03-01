import { describe, test, expect } from 'vitest'
import { clamp } from '@src/number/clamp.js'

describe('clamp', () => {
  test('min < value < max', () => {
    const value = 10
    const range = [1, 20] as const

    const result = clamp(value, range)

    expect(result).toBe(10)
  })

  test('value < min', () => {
    const value = 0
    const range = [1, 20] as const

    const result = clamp(value, range)

    expect(result).toBe(1)
  })

  test('value > max', () => {
    const value = 21
    const range = [1, 20] as const

    const result = clamp(value, range)

    expect(result).toBe(20)
  })
})
