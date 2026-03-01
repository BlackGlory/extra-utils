import { describe, test, expect } from 'vitest'
import { enumEntries } from '@src/enum/enum-entries.js'

describe('enumEntries', () => {
  test('numeric enums', () => {
    enum Enum {
      Foo = 0
    }

    const result = enumEntries(Enum)

    expect(result).toStrictEqual([
      ['Foo', 0]
    ])
  })

  test('string enums', () => {
    enum Enum {
      Foo = 'foo'
    }

    const result = enumEntries(Enum)

    expect(result).toStrictEqual([
      ['Foo', 'foo']
    ])
  })

  test('heterogeneous enums', () => {
    enum Enum {
      Foo = 0
    , Bar = 'bar'
    }

    const result = enumEntries(Enum)

    expect(result).toStrictEqual([
      ['Foo', 0]
    , ['Bar', 'bar']
    ])
  })
})
