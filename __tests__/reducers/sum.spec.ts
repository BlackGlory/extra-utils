import { sum } from '@src/reducers/sum.js'

test('sum', () => {
  const arr = [1, 2, 3]

  const result = arr.reduce(sum)

  expect(result).toBe(1 + 2 + 3)
})
