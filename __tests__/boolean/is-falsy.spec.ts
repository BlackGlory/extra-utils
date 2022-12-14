import { isFalsy, isntFalsy } from '@src/boolean/is-falsy'

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
