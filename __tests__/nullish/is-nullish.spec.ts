import { isNullish, isntNullish } from '@src/nullish/is-nullish'

describe.each([
  ['isNullish', isNullish, true]
, ['isntNullish', isntNullish, false]
])('%s', (_, fn, positiveResult) => {
  test('null', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('undefined', () => {
    const value = undefined

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-null', () => {
    const value = 'foo'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
