import { enumKeys } from '@src/enum/enum-keys.js'

describe('enumKeys', () => {
  test('numeric enums', () => {
    enum Enum {
      Foo = 0
    }

    const result = enumKeys(Enum)

    expect(result).toStrictEqual(['Foo'])
  })

  test('string enums', () => {
    enum Enum {
      Foo = 'foo'
    }

    const result = enumKeys(Enum)

    expect(result).toStrictEqual(['Foo'])
  })

  test('heterogeneous enums', () => {
    enum Enum {
      Foo = 0
    , Bar = 'bar'
    }

    const result = enumKeys(Enum)

    expect(result).toStrictEqual(['Foo', 'Bar'])
  })
})
