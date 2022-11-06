import { pipe } from '@src/pipe'

test('pipe', () => {
  const value = 1

  const result = pipe(
    value
  , add(2)
  , add(3)
  , toString
  )

  expect(result).toBe('6')

  function add(x: number): (y: number) => number {
    return function (y: number): number {
      return x + y
    }
  }

  function toString(x: unknown): string {
    return `${x}`
  }
})
