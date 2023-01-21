import { isChar, isntChar } from '@src/string/is-char.js'

describe.each([
  ['isChar', isChar, true]
, ['isntChar', isntChar, false]
])('%s', (_, fn, positiveResult) => {
  test('char', () => {
    const value = 'c'

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-char', () => {
    const value = 'string'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
