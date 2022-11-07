import { isString, isntString, isChar, isntChar, isURLString, isntURLString } from '@src/string'
import 'jest-extended'

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
