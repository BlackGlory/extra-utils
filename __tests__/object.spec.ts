import {
  isObject
, isntObject
, isPlainObject
, isntPlainObject
, isEmptyObject
, isntEmptyObject
} from '@src/object'
import { pass } from '@blackglory/pass'

describe.each([
  ['isObject', isObject, true]
, ['isntObject', isntObject, false]
])('%s', (_, fn, positiveResult) => {
  test('plain object', () => {
    const value = {}

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('array', () => {
    const value: unknown = []

    const result = fn(value)

    expect(result).toBe(positiveResult)
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

    expect(result).toBe(positiveResult)
  })
})

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
