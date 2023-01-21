import { isArray, isntArray } from '@src/array/is-array.js'

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
