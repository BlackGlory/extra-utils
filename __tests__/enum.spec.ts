import { inEnum } from '@src/enum'

describe('inEnum', () => {
  test('in enum', () => {
    enum Enum { Foo = 'foo' }
    const value = 'foo'

    const result = inEnum(value, Enum)

    expect(result).toBe(true)
  })

  test('not in enum', () => {
    enum Enum { Foo = 'foo' }
    const value = 'bar'

    const result = inEnum(value, Enum)

    expect(result).toBe(false)
  })
})
