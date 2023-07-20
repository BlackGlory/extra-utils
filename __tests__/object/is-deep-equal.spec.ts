import { isDeepEqual } from '@src/object/is-deep-equal.js'

describe('isDeepEqual', () => {
  test('deep equal', () => {
    const a = { foo: { bar: 'baz' }}
    const b = { foo: { bar: 'baz' }}

    const result = isDeepEqual(a, b)

    expect(result).toBe(true)
  })

  test('not deep equal', () => {
    const a = { foo: { bar: 'baz' }}
    const b = { foo: { bar: 'foo' }}

    const result = isDeepEqual(a, b)

    expect(result).toBe(false)
  })
})
