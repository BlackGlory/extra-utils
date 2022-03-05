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
})
