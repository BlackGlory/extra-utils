import { isJson, isntJson } from '@src/json/is-json'

describe.each([
  ['isJson', isJson, true]
, ['isntJson', isntJson, false]
])('%s', (_, fn, positiveResult) => {
  test('null', () => {
    const value = null

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('undefined', () => {
    const value = undefined

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('Date', () => {
    const value = new Date()

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('RegExp', () => {
    const value = /\w/

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('json array', () => {
    const value = ['foo']

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non json array', () => {
    const value = [new Map()]

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })

  test('plain object', () => {
    const value = { foo: 'bar' }

    const result = fn(value)

    expect(result).toBe(positiveResult)
  })

  test('non plain object', () => {
    const value = { foo: new Map() }

    const result = fn(value)

    expect(result).toBe(!positiveResult)
  })
})
