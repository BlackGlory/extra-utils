import { isObject, isPlainObject, isEmptyObject, isntEmptyObject, isJson } from '@src/object'
import { pass } from '@blackglory/pass'

describe('isObject', () => {
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

describe('isPlainObject', () => {
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

describe('isEmptyObject', () => {
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

describe('isntEmptyObject', () => {
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

describe('isJson', () => {
  test('undefined', () => {
    expect(isJson(undefined)).toBe(false)
  })

  test('null', () => {
    expect(isJson(null)).toBe(true)
  })

  test('Date', () => {
    expect(isJson(new Date())).toBe(false)
  })

  test('RegExp', () => {
    expect(isJson(/\w/)).toBe(false)
  })

  test('json array', () => {
    expect(isJson(['foo'])).toBe(true)
  })

  test('non json array', () => {
    expect(isJson([new Map()])).toBe(false)
  })

  test('plain object', () => {
    expect(isJson({ foo: 'bar' })).toBe(true)
  })

  test('non plain object', () => {
    expect(isJson({ foo: new Map() })).toBe(false)
  })
})
