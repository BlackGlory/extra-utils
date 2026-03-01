import { describe, test, expect } from 'vitest'
import { enumValues } from '@src/enum/enum-values.js'

describe('enumValues', () => {
  test('numeric enums', () => {
    enum Enum {
      Foo = 0
    }

    const result = enumValues(Enum)

    expect(result).toStrictEqual([0])
  })

  test('string enums', () => {
    enum Enum {
      Foo = 'foo'
    }

    const result = enumValues(Enum)

    expect(result).toStrictEqual(['foo'])
  })

  test('heterogeneous enums', () => {
    enum Enum {
      Foo = 0
    , Bar = 'bar'
    }

    const result = enumValues(Enum)

    expect(result).toStrictEqual([0, 'bar'])
  })
})
