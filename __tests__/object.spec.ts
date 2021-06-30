import { isEmptyObject, isntEmptyObject } from '@src/object'

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
