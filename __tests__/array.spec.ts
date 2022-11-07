import { expectType, expectNotType } from 'tsd'
import { isEmptyArray, isntEmptyArray } from '@src/array'

describe('isEmptyArray', () => {
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

describe('isntEmptyArray', () => {
  test('non-empty array', () => {
    const arr = [1]

    const result = isntEmptyArray(arr)

    expect(result).toBe(true)
    if (result) {
      expectType<[number, ...number[]]>(arr)
    }
  })

  test('empty array', () => {
    const arr: number[] = []

    const result = isntEmptyArray(arr)

    expect(result).toBe(false)
    expectNotType<[number, ...number[]]>(arr)
  })
})
