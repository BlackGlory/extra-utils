import { not } from '@src/fp/not.js'

test('not', () => {
  const predicate = (value: boolean) => value

  const fn = not(predicate)

  expect(fn(true)).toBe(false)
  expect(fn(false)).toBe(true)
})
