import { isReferenceEqual } from '@src/object/is-reference-equal.js'

describe('isReferenceEqual', () => {
  test('reference equal', () => {
    const a = {}
    const b = a

    const result = isReferenceEqual(a, b)

    expect(result).toBe(true)
  })

  test('not reference equal', () => {
    const a = {}
    const b = {}

    const result = isReferenceEqual(a, b)

    expect(result).toBe(false)
  })
})
