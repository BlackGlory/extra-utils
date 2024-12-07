import { pipeAsync } from '@src/fp/pipe-async.js'

describe('pipeAsync', () => {
  test('[input, ...intermediate, output]', async () => {
    const value = '1'

    const result = await pipeAsync(
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

    function add(x: number): (y: number) => PromiseLike<number> {
      return async function (y: number): Promise<number> {
        return x + y
      }
    }
  })

  test('[input, ...intermediate]', async () => {
    const value = '1'

    const result = await pipeAsync(
      value
    , toNumber
    , add(2)
    , add(3)
    )

    expect(result).toBe(6)

    function add(x: number): (y: number) => PromiseLike<number> {
      return async function (y: number): Promise<number> {
        return x + y
      }
    }

    function toNumber(x: unknown): number {
      return Number(x)
    }
  })

  test('[...intermediate, output]', async () => {
    const value = 1

    const result = await pipeAsync(
      value
    , add(2)
    , add(3)
    )

    expect(result).toBe(6)

    function add(x: number): (y: number) => PromiseLike<number> {
      return async function (y: number): Promise<number> {
        return x + y
      }
    }
  })

  test('[...intermediate]', async () => {
    const value = 1

    const result = await pipeAsync(
      value
    , add(2)
    , add(3)
    , toString
    )

    expect(result).toBe('6')

    function add(x: number): (y: number) => PromiseLike<number> {
      return async function (y: number): Promise<number> {
        return x + y
      }
    }

    function toString(x: unknown): string {
      return `${x}`
    }
  })
})
