import { isObject, isPlainObject, isEmptyObject, isntEmptyObject } from '@src/object'
import { pass } from '@blackglory/pass'

describe('isObject(val: unknown): boolean', () => {
  test('plain object', () => {
    const val: any = {}

    const result = isObject(val)

    expect(result).toBe(true)
  })

  test('array', () => {
    const val: any = []

    const result = isObject(val)

    expect(result).toBe(true)
  })

  test('function', () => {
    const val = () => pass()

    const result = isObject(val)

    expect(result).toBe(false)
  })

  test('number', () => {
    const val = 1

    const result = isObject(val)

    expect(result).toBe(false)
  })

  test('string', () => {
    const val = 'string'

    const result = isObject(val)

    expect(result).toBe(false)
  })

  test('String', () => {
    const val = new String('string')

    const result = isObject(val)

    expect(result).toBe(true)
  })
})

describe('isPlainObject(val: unknown): boolean', () => {
  test('plain object', () => {
    const val: any = {}

    const result = isObject(val)

    expect(result).toBe(true)
  })

  test('array', () => {
    const val: any = []

    const result = isPlainObject(val)

    expect(result).toBe(false)
  })

  test('function', () => {
    const val = () => pass()

    const result = isPlainObject(val)

    expect(result).toBe(false)
  })

  test('number', () => {
    const val = 1

    const result = isPlainObject(val)

    expect(result).toBe(false)
  })

  test('string', () => {
    const val = 'string'

    const result = isPlainObject(val)

    expect(result).toBe(false)
  })

  test('String', () => {
    const val = new String('string')

    const result = isPlainObject(val)

    expect(result).toBe(false)
  })
})

describe('isEmptyObject(val: object): boolean', () => {
  test('non-empty object', () => {
    const obj = { foo: 'bar' }

    const result = isEmptyObject(obj)

    expect(result).toBe(false)
  })

  test('empty object', () => {
    const obj = {}

    const result = isEmptyObject(obj)

    expect(result).toBe(true)
  })
})

describe('isntEmptyObject(val: object): boolean', () => {
  test('non-empty object', () => {
    const obj = { foo: 'bar' }

    const result = isntEmptyObject(obj)

    expect(result).toBe(true)
  })

  test('empty object', () => {
    const obj = {}

    const result = isntEmptyObject(obj)

    expect(result).toBe(false)
  })
})
