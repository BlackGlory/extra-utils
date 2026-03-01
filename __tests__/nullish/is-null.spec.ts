import { describe, test, expect } from 'vitest'
import { isNull, isntNull } from '@src/nullish/is-null.js'

describe.each([
  ['isNull', isNull, true]
, ['isntNull', isntNull, false]
])('%s', (_, fn, positiveResult) => {
  test('null', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-null', () => {
    const val = undefined

    const result = fn(val)

    expect(result).toBe(!positiveResult)
  })
})
