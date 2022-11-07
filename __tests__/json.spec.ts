import { isJson } from '@src/json'

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
