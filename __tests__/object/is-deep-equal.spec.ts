import { describe, test, expect } from 'vitest'
import { isDeepEqual } from '@src/object/is-deep-equal.js'
import { go } from '@blackglory/go'

describe('isDeepEqual', () => {
  test.each([
    [
      { foo: { bar: 'baz' }}
    , { foo: { bar: 'baz' }}
    ]
  , [
      [{ foo: 'bar' }]
    , [{ foo: 'bar' }]
    ]
  , go(() => {
      const date = new Date('2026-01-01')
      return [date, date]
    })
  ])('deep equal $0, $1', (a, b) => {
    const result = isDeepEqual(a, b)

    expect(result).toBe(true)
  })

  test.each([
    [
      { foo: { bar: 'baz' }}
    , { foo: { bar: 'qux' }}
    ]
  , [
      [{ foo: 'bar' }]
    , [{ foo: 'baz' }]
    ]
  , [
      new Date('2026-01-01')
    , new Date('2026-01-01')
    ]
  ])('not deep equal $0, $1', (a, b) => {
    const result = isDeepEqual(a, b)

    expect(result).toBe(false)
  })
})
