import { describe, test, expect } from 'vitest'
import { isShallowEqual } from '@src/object/is-shallow-equal.js'

describe('isShallowEqual', () => {
  test.each([
    [
      { foo: 'bar' }
    , { foo: 'bar' }
    ]
  , [
      ['bar']
    , ['bar']
    ]
  ])('shallow equal', (a, b) => {
    const result = isShallowEqual(a, b)

    expect(result).toBe(true)
  })

  test.each([
    [
      { foo: 'bar' }
    , { foo: 'baz' }
    ]
  , [
      ['bar']
    , ['baz']
    ]
  ])('not shallow equal', (a, b) => {
    const result = isShallowEqual(a, b)

    expect(result).toBe(false)
  })
})
