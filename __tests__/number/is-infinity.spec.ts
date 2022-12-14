import { isNegativeInfinity, isPositiveInfinity } from '@src/number/is-infinity'
import 'jest-extended'

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
