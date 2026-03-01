import { test, expect } from 'vitest'
import { max } from '@src/fp/reducers/max.js'

test('max', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(max)

  expect(result).toBe(3)
})
