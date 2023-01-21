import { isBigInt, isntBigInt } from '@src/number/is-bigint.js'

describe.each([
  ['isBigInt', isBigInt, true]
, ['isntBigInt', isntBigInt, false]
])('%s', (_, fn, positiveResult) => {
  test('bigint', () => {
    const value = BigInt(123)

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('number', () => {
    const value = 123

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
