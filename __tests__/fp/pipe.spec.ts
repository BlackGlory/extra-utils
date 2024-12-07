import { pipe } from '@src/fp/pipe.js'

describe('pipe', () => {
  test('[input, ...intermediate, output]', () => {
    const value = '1'

    const result = pipe(
      value
    , toNumber
    , add(2)
    , add(3)
    , toString
    )

    expect(result).toBe('6')

    function toString(x: unknown): string {
      return `${x}`
    }

    function toNumber(x: unknown): number {
      return Number(x)
    }

    function add(x: number): (y: number) => number {
      return function (y: number): number {
        return x + y
      }
    }
  })

  test('[input, ...intermediate]', () => {
    const value = '1'

    const result = pipe(
      value
    , toNumber
    , add(2)
    , add(3)
    )

    expect(result).toBe(6)

    function add(x: number): (y: number) => number {
      return function (y: number): number {
        return x + y
      }
    }

    function toNumber(x: unknown): number {
      return Number(x)
    }
  })

  test('[...intermediate, output]', () => {
    const value = 1

    const result = pipe(
      value
    , add(2)
    , add(3)
    )

    expect(result).toBe(6)

    function add(x: number): (y: number) => number {
      return function (y: number): number {
        return x + y
      }
    }
  })

  test('[...intermediate]', () => {
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
})
