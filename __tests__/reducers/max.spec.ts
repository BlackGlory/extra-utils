import { max } from '@src/reducers/max.js'

test('max', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(max)

  expect(result).toBe(3)
})
