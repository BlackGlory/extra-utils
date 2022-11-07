import {
  isNumber
, isntNumber
, isFinite
, isNegativeInfinity
, isPositiveInfinity
, isNaN
, isntNaN
} from '@src/number'
import 'jest-extended'

describe.each([
  ['isNumber', isNumber, true]
, ['isntNumber', isntNumber, false]
])('%s', (_, fn, positiveResult) => {
  test('number', () => {
    const value = 123

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('number-like string', () => {
    const value = '123'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})

describe('isFinite', () => {
  describe('finite', () => {
    it('return true', () => {
      const val = 123

      const result = isFinite(val)

      expect(result).toBe(true)
    })
  })

  describe('Infinity', () => {
    it('return false', () => {
      const val = Infinity

      const result = isFinite(val)

      expect(result).toBe(false)
    })
  })

  describe('-Infinity', () => {
    it('return false', () => {
      const val = -Infinity

      const result = isFinite(val)

      expect(result).toBe(false)
    })
  })
})

describe.each([
  ['isPositiveInfinity', isPositiveInfinity, true]
, ['isNegativeInfinity', isNegativeInfinity, false]
])('%s', (_, fn, positiveResult) => {
  test('finite', () => {
    const val = 123

    const result = fn(val)

    expect(result).toBe(false)
  })

  test('Infinity', () => {
    const val = Infinity

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  describe('-Infinity', () => {
    it('return true', () => {
      const val = -Infinity

      const result = fn(val)

      expect(result).toBe(!positiveResult)
    })
  })
})

describe.each([
  ['isNaN', isNaN, true]
, ['isntNaN', isntNaN, false]
])('%s', (_, fn, positiveResult) => {
  describe('NaN', () => {
    const value = NaN

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  describe('Infinity', () => {
    const value = Infinity

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
