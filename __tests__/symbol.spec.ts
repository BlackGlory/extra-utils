import { isSymbol, isntSymbol } from '@src/symbol'

describe('isSymbol(val: unknown): boolean', () => {
  test('non-symbol', () => {
    const val = 'symbol'

    const result = isSymbol(val)

    expect(result).toBe(false)
  })

  test('symbol', () => {
    const val = Symbol()

    const result = isSymbol(val)

    expect(result).toBe(true)
  })
})

describe('isntSymbol(val: unknown): boolean', () => {
  test('non-symbol', () => {
    const val = 'symbol'

    const result = isntSymbol(val)

    expect(result).toBe(true)
  })

  test('symbol', () => {
    const val = Symbol()

    const result = isntSymbol(val)

    expect(result).toBe(false)
  })
})
