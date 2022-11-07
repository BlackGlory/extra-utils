import { isBoolean, isntBoolean, isFalsy, isntFalsy } from '@src/boolean'

describe.each([
  ['isBoolean', isBoolean, true]
, ['isntBoolean', isntBoolean, false]
])('%s', (_, fn, positiveResult) => {
  test('boolean', () => {
    const value = false

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-boolean', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})

describe.each([
  ['isFalsy', isFalsy, true]
, ['isntFalsy', isntFalsy, false]
])('%s', (_, fn, positiveResult) => {
  test('falsy', () => {
    const value = ''

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-falsy', () => {
    const value = 'true'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
