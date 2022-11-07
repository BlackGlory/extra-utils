import { isArray, isntArray, isEmptyArray, isntEmptyArray } from '@src/array'

describe.each([
  ['isArray', isArray, true]
, ['isntArray', isntArray, false]
])('%s', (_, fn, positiveResult) => {
  test('array', () => {
    const value: number[] = []

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-array', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})

describe.each([
  ['isEmptyArray', isEmptyArray, true]
, ['isntEmptyArray', isntEmptyArray, false]
])('%s', (_, fn, positiveResult) => {
  test('empty array', () => {
    const value: number[] = []

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-empty array', () => {
    const value = [1]

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
