import { describe, test, expect } from 'vitest'
import { isEmptyObject, isntEmptyObject } from '@src/object/is-empty-object.js'

describe.each([
  ['isEmptyObject', isEmptyObject, true]
, ['isntEmptyObject', isntEmptyObject, false]
])('%s', (_, fn, positiveResult) => {
  test('non-empty object', () => {
    const obj = { foo: 'bar' }

    const result = fn(obj)

    expect(result).toBe(!positiveResult)
  })

  test('empty object', () => {
    const obj = {}

    const result = fn(obj)

    expect(result).toBe(positiveResult)
  })
})
