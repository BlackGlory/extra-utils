import { isRegExp, isntRegExp } from '@src/is-regexp.js'

describe.each([
  ['isRegExp', isRegExp, true]
, ['isntRegExp', isntRegExp, false]
])('%s', (_, fn, positiveResult) => {
  test('regexp', () => {
    const val = /^.*$/

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  test('non-regexp', () => {
    const val = 'regexp'

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
