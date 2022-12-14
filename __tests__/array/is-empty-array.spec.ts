import { isEmptyArray, isntEmptyArray } from '@src/array/is-empty-array'

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
