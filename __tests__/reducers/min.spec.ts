import { min } from '@src/reducers/min.js'

test('min', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(min)

  expect(result).toBe(1)
})
