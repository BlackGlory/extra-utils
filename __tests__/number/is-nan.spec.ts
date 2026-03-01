import { describe, test, expect } from 'vitest'
import { isNaN, isntNaN } from '@src/number/is-nan.js'

describe.each([
  ['isNaN', isNaN, true]
, ['isntNaN', isntNaN, false]
])('%s', (_, fn, positiveResult) => {
  test('NaN', () => {
    const value = NaN

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('Infinity', () => {
    const value = Infinity

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
