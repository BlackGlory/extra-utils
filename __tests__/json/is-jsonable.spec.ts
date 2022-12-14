import { isJsonable, isntJsonable } from '@src/json/is-jsonable'

describe.each([
  ['isJsonable', isJsonable, true]
, ['isntJsonable', isntJsonable, false]
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
