import { isString, isntString } from '@src/string/is-string'

describe.each([
  ['isString', isString, true]
, ['isntString', isntString, false]
])('%s', (_, fn, positiveResult) => {
  test('string', () => {
    const value = 'str'

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('String', () => {
    const val = new String('str')

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
