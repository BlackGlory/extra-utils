import { isNumber, isntNumber } from '@src/number/is-number.js'

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
