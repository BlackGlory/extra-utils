import { describe, test, expect } from 'vitest'
import { getEnumKey } from '@src/enum/get-enum-key.js'

describe('getEnumKey', () => {
  test('numeric enums', () => {
    enum Enum {
      Foo = 0
      // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    , Bar = 0
    }

    const result = getEnumKey(Enum, Enum.Bar)

    expect(result).toBe('Foo')
  })

  test('string enums', () => {
    enum Enum {
      Foo = 'foo'
      // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
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
