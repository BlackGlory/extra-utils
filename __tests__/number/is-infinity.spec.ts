import { describe, test, expect } from 'vitest'
import { isNegativeInfinity, isntNegativeInfinity, isntPositiveInfinity, isPositiveInfinity } from '@src/number/is-infinity.js'

describe.each([
  ['isPositiveInfinity', isPositiveInfinity, true]
, ['isntPositiveInfinity', isntPositiveInfinity, false]
])('%s', (_, fn, positiveResult) => {
  test('Infinity', () => {
    const val = Infinity

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  test('-Infinity', () => {
    const val = -Infinity

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })

  test('finite', () => {
    const val = 123

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})

describe.each([
  ['isNegativeInfinity', isNegativeInfinity, true]
, ['isntNegativeInfinity', isntNegativeInfinity, false]
])('%s', (_, fn, positiveResult) => {
  test('Infinity', () => {
    const val = Infinity

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })

  test('-Infinity', () => {
    const val = -Infinity

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  test('finite', () => {
    const val = 123

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
