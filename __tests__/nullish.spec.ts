import {
  isNullish
, isntNullish
, isNull
, isntNull
, isUndefined
, isntUndefined
} from '@src/nullish'
import 'jest-extended'

describe.each([
  ['isNullish', isNullish, true]
, ['isntNullish', isntNullish, false]
])('%s', (_, fn, positiveResult) => {
  test('null', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('undefined', () => {
    const value = undefined

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-null', () => {
    const value = 'foo'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})

describe.each([
  ['isNull', isNull, true]
, ['isntNull', isntNull, false]
])('%s', (_, fn, positiveResult) => {
  test('null', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-null', () => {
    const val = undefined

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})

describe.each([
  ['isUndefined', isUndefined, true]
, ['isntUndefined', isntUndefined, false]
])('%s', (_, fn, positiveResult) => {
  test('is undefined', () => {
    const value = undefined

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('isnt undefined', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
