import { isJson, isJsonable } from '@src/json'

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

describe('isJsonable', () => {
  test('undefined', () => {
    expect(isJsonable(undefined)).toBe(true)
  })

  test('null', () => {
    expect(isJsonable(null)).toBe(true)
  })

  test('Date', () => {
    expect(isJsonable(new Date())).toBe(true)
  })

  test('RegExp', () => {
    expect(isJsonable(/\w/)).toBe(true)
  })

  test('json array', () => {
    expect(isJsonable(['foo'])).toBe(true)
  })

  test('non json array', () => {
    expect(isJsonable([new Map()])).toBe(true)
  })

  test('plain object', () => {
    expect(isJsonable({ foo: 'bar' })).toBe(true)
  })

  test('non plain object', () => {
    expect(isJsonable({ foo: new Map() })).toBe(true)
  })
})
