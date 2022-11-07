import { isSymbol, isntSymbol } from '@src/symbol'

describe('isSymbol', () => {
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

describe('isntSymbol', () => {
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
