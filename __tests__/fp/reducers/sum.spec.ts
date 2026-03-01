import { test, expect } from 'vitest'
import { sum } from '@src/fp/reducers/sum.js'

test('sum', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(sum)

  expect(result).toBe(1 + 2 + 3)
})
