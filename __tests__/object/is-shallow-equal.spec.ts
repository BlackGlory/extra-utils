import { describe, test, expect } from 'vitest'
import { isShallowEqual } from '@src/object/is-shallow-equal.js'
import { go } from '@blackglory/go'

describe('isShallowEqual', () => {
  test.each([
    [
      { foo: 'bar' }
    , { foo: 'bar' }
    ]
  , [
      ['foo']
    , ['foo']
    ]
  , go(() => {
      const date = new Date('2026-01-01')
      return [date, date]
    })
  ])('shallow equal $0, $1', (a, b) => {
    const result = isShallowEqual(a, b)

    expect(result).toBe(true)
  })

  test.each([
    [
      { foo: 'bar' }
    , { foo: 'baz' }
    ]
  , [
      ['foo']
    , ['bar']
    ]
  , [
      { foo: { bar: 'baz' }}
    , { foo: { bar: 'baz' }}
    ]
  , [
      [{ foo: 'bar' }]
    , [{ foo: 'bar' }]
    ]
  , [
      new Date('2026-01-01')
    , new Date('2026-01-01')
    ]
  ])('not shallow equal $0, $1', (a, b) => {
    const result = isShallowEqual(a, b)

    expect(result).toBe(false)
  })
})
