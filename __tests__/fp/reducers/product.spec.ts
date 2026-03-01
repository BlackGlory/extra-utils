import { test, expect } from 'vitest'
import { product } from '@src/fp/reducers/product.js'

test('product', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(product)

  expect(result).toBe(1 * 2 * 3)
})
