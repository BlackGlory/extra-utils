import { isEmptyArray, isntEmptyArray } from '@src/array'

describe('isEmptyArray(val: unknown[]): boolean', () => {
  test('non-empty array', () => {
    const arr = [1]

    const result = isEmptyArray(arr)

    expect(result).toBe(false)
  })

  test('empty array', () => {
    const arr: number[] = []

    const result = isEmptyArray(arr)

    expect(result).toBe(true)
  })
})

describe('isntEmptyArray(val: array): boolean', () => {
  test('non-empty array', () => {
    const arr = [1]

    const result = isntEmptyArray(arr)

    expect(result).toBe(true)
  })

  test('empty array', () => {
    const arr: number[] = []

    const result = isntEmptyArray(arr)

    expect(result).toBe(false)
  })
})
