import { first } from '@src/array-like/first.js'

describe('first', () => {
  test('empty', () => {
    const arr: number[] = []

    const result = first(arr)

    expect(result).toBe(undefined)
  })

  test('non-empty', () => {
    const arr: number[] = [1, 2]

    const result = first(arr)

    expect(result).toBe(1)
  })
})
