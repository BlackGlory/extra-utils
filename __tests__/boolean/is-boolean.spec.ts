import { describe, test, expect } from 'vitest'
import { isBoolean, isntBoolean } from '@src/boolean/is-boolean.js'

describe.each([
  ['isBoolean', isBoolean, true]
, ['isntBoolean', isntBoolean, false]
])('%s', (_, fn, positiveResult) => {
  test('boolean', () => {
    const value = false

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non-boolean', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
