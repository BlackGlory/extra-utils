import { isShallowEqual } from '@src/object/is-shallow-equal.js'

describe('isShallowEqual', () => {
  test('shallow equal', () => {
    const a = { foo: 'bar' }
    const b = { foo: 'bar' }

    const result = isShallowEqual(a, b)

    expect(result).toBe(true)
  })

  test('not shallow equal', () => {
    const a = { foo: 'bar' }
    const b = { foo: 'baz' }

    const result = isShallowEqual(a, b)

    expect(result).toBe(false)
  })
})
