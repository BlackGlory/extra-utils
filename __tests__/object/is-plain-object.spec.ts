import { isPlainObject, isntPlainObject } from '@src/object/is-plain-object'
import { pass } from '@blackglory/pass'

describe.each([
  ['isPlainObject', isPlainObject, true]
, ['isntPlainObject', isntPlainObject, false]
])('%s', (_, fn, positiveResult) => {
  test('plain object', () => {
    const value = {}

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('array', () => {
    const value: unknown = []

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('function', () => {
    const value = () => pass()

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('number', () => {
    const value = 1

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('string', () => {
    const value = 'string'

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('String', () => {
    const value = new String('string')

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
