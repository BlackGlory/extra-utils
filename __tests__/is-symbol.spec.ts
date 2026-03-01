import { describe, test, expect } from 'vitest'
import { isSymbol, isntSymbol } from '@src/is-symbol.js'

describe.each([
  ['isSymbol', isSymbol, true]
, ['isntSymbol', isntSymbol, false]
])('%s', (_, fn, positiveResult) => {
  test('symbol', () => {
    const val = Symbol()

    const result = fn(val)

    expect(result).toBe(positiveResult)
  })

  test('non-symbol', () => {
    const val = 'symbol'

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
