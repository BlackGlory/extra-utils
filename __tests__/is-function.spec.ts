import { describe, test, expect } from 'vitest'
import { isFunction, isntFunction } from '@src/is-function.js'
import { pass } from '@blackglory/pass'

describe.each([
  ['isFunction', isFunction, true]
, ['isntFunction', isntFunction, false]
])('%s', (_, fn, positiveResult) => {
  test('is function', () => {
    const value = pass

    // @ts-expect-error type error
    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('isnt function', () => {
    const value = null

    // @ts-expect-error type error
    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
