import { clamp } from '@src/number/clamp'

describe('clamp', () => {
  test('min < value < max', () => {
    const value = 10
    const min = 1
    const max = 20

    const result = clamp(value, [min, max])

    expect(result).toBe(10)
  })

  test('value < min', () => {
    const value = 0
    const min = 1
    const max = 20

    const result = clamp(value, [min, max])

    expect(result).toBe(1)
  })

  test('value > max', () => {
    const value = 21
    const min = 1
    const max = 20

    const result = clamp(value, [min, max])

    expect(result).toBe(20)
  })
})
