import { getEnumKey } from '@src/enum/get-enum-key.js'

describe('getEnumKey', () => {
  test('numeric enums', () => {
    enum Enum {
      Foo = 0
    , Bar = 0
    }

    const result = getEnumKey(Enum, Enum.Bar)

    expect(result).toBe('Foo')
  })

  test('string enums', () => {
    enum Enum {
      Foo = 'foo'
    , Bar = 'foo'
    }

    const result = getEnumKey(Enum, Enum.Bar)

    expect(result).toBe('Foo')
  })

  test('heterogeneous enums', () => {
    enum Enum {
      Foo = 0
    , Bar = 'bar'
    }

    const result1 = getEnumKey(Enum, Enum.Foo)
    const result2 = getEnumKey(Enum, Enum.Bar)

    expect(result1).toStrictEqual('Foo')
    expect(result2).toStrictEqual('Bar')
  })
})
