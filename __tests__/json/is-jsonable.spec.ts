import { isJSONSerializable, isntJSONSerializable } from '@src/json/is-json-serializable'

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

    // @ts-ignore
    const result = fn(obj)

    expect(result).toBe(positiveResult)
  })

  test('object without toJSON method', () => {
    const obj = {}

    // @ts-ignore
    const result = fn(obj)

    expect(result).toBe(!positiveResult)
  })
})
