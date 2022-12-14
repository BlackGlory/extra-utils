import { isFunction, isntFunction } from '@src/is-function'
import { pass } from '@blackglory/pass'

describe.each([
  ['isFunction', isFunction, true]
, ['isntFunction', isntFunction, false]
])('%s', (_, fn, positiveResult) => {
  test('is function', () => {
    const value = pass

    // @ts-ignore
    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('isnt function', () => {
    const value = null

    // @ts-ignore
    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
