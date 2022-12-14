import { isDate, isntDate } from '@src/is-date'

describe.each([
  ['isDate', isDate, true]
, ['isntDate', isntDate, false]
])('%s', (_, fn, positiveResult) => {
  test('is date', () => {
    const value = new Date()

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('isnt date', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
