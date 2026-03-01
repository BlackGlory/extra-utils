import { describe, test, expect } from 'vitest'
import { isJSONSerializable, isntJSONSerializable } from '@src/json/is-json-serializable.js'

describe.each([
  ['isJSONSerializable', isJSONSerializable, true]
, ['isntJSONSerializable', isntJSONSerializable, false]
])('%s', (_, fn, positiveResult) => {
  test('object with toJSON method', () => {
    const obj = {
      toJSON() {
        return 123
      }
    }

    // @ts-expect-error type error
    const result = fn(obj)

    expect(result).toBe(positiveResult)
  })

  test('object without toJSON method', () => {
    const obj = {}

    // @ts-expect-error type error
    const result = fn(obj)

    expect(result).toBe(!positiveResult)
  })
})
