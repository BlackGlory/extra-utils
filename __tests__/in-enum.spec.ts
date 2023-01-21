import { inEnum, notInEnum } from '@src/in-enum.js'

describe.each([
  ['inEnum', inEnum, true]
, ['notInEnum', notInEnum, false]
])('%s', (_, fn, positiveResult) => {
  test('in enum', () => {
    enum Enum { Foo = 'foo' }
    const value = 'foo'

    const result = fn(value, Enum)

    expect(result).toBe(positiveResult)
  })

  test('not in enum', () => {
    enum Enum { Foo = 'foo' }
    const value = 'bar'

    const result = fn(value, Enum)

    expect(result).toBe(!positiveResult)
  })
})
