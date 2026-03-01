import { describe, test, expect } from 'vitest'
import { isUndefined, isntUndefined } from '@src/nullish/is-undefined.js'

describe.each([
  ['isUndefined', isUndefined, true]
, ['isntUndefined', isntUndefined, false]
])('%s', (_, fn, positiveResult) => {
  test('is undefined', () => {
    const value = undefined

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('isnt undefined', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
