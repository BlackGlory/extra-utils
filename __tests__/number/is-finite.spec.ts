import { isFinite, isntFinite } from '@src/number/is-finite.js'

describe.each([
  ['isFinite', isFinite, true]
, ['isntFinite', isntFinite, false]
])('%s', (_, fn, positiveResult) => {
  test('finite', () => {
    const val = 123

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  test('Infinity', () => {
    const val = Infinity

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })

  test('-Infinity', () => {
    const val = -Infinity

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
