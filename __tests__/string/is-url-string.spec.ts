import { isURLString, isntURLString } from '@src/string/is-url-string'

describe.each([
  ['isURLString', isURLString, true]
, ['isntURLString', isntURLString, false]
])('%s', (_, fn, positiveResult) => {
  test('is url', () => {
    const str= 'https://example.com'

    const result = fn(str)

    expect(result).toBe(positiveResult)
  })

  test('isnt url', () => {
    const str= '.'

    const result = fn(str)

    expect(result).toBe(!positiveResult)
  })
})
