import { describe, test, expect } from 'vitest'
import { inEnum, notInEnum } from '@src/enum/in-enum.js'

describe('inEnum', () => {
  describe('numeric enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 0
      }
      const value = 0

      const result = inEnum(value, Enum)

      expect(result).toBe(true)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 0
      }
      const value = 1

      const result = inEnum(value, Enum)

      expect(result).toBe(false)
    })

    describe('edge: reverse mappings', () => {
      test('in enum', () => {
        enum Enum {
          Foo = 0
        }
        const value = 'Foo'

        const result = inEnum(value, Enum)

        expect(result).toBe(false)
      })

      test('not in enum', () => {
        enum Enum {
          Foo = 0
        }
        const value = 'Foo'

        const result = inEnum(value, Enum)

        expect(result).toBe(false)
      })
    })
  })

  describe('string enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 'foo'
      }
      const value = 'foo'

      const result = inEnum(value, Enum)

      expect(result).toBe(true)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 'foo'
      }
      const value = 'bar'

      const result = inEnum(value, Enum)

      expect(result).toBe(false)
    })
  })

  describe('heterogeneous enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 0
      , Bar = 'bar'
      }
      const value = 0

      const result = inEnum(value, Enum)

      expect(result).toBe(true)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 0
      , Bar = 'bar'
      }
      const value = 1

      const result = inEnum(value, Enum)

      expect(result).toBe(false)
    })

    describe('edge: reverse mappings', () => {
      test('in enum', () => {
        enum Enum {
          Foo = 0
        , Bar = 'bar'
        }
        const value = 'Foo'

        const result = inEnum(value, Enum)

        expect(result).toBe(false)
      })

      test('not in enum', () => {
        enum Enum {
          Foo = 0
        , Bar = 'bar'
        }
        const value = 'Foo'

        const result = inEnum(value, Enum)

        expect(result).toBe(false)
      })
    })
  })
})

describe('notInEnum', () => {
  describe('numeric enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 0
      }
      const value = 0

      const result = notInEnum(value, Enum)

      expect(result).toBe(false)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 0
      }
      const value = 1

      const result = notInEnum(value, Enum)

      expect(result).toBe(true)
    })

    describe('edge: reverse mappings', () => {
      test('in enum', () => {
        enum Enum {
          Foo = 0
        }
        const value = 'Foo'

        const result = notInEnum(value, Enum)

        expect(result).toBe(true)
      })

      test('not in enum', () => {
        enum Enum {
          Foo = 0
        }
        const value = 'Foo'

        const result = notInEnum(value, Enum)

        expect(result).toBe(true)
      })
    })
  })

  describe('string enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 'foo'
      }
      const value = 'foo'

      const result = notInEnum(value, Enum)

      expect(result).toBe(false)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 'foo'
      }
      const value = 'bar'

      const result = notInEnum(value, Enum)

      expect(result).toBe(true)
    })
  })

  describe('heterogeneous enums', () => {
    test('in enum', () => {
      enum Enum {
        Foo = 0
      , Bar = 'bar'
      }
      const value = 0

      const result = notInEnum(value, Enum)

      expect(result).toBe(false)
    })

    test('not in enum', () => {
      enum Enum {
        Foo = 0
      , Bar = 'bar'
      }
      const value = 1

      const result = notInEnum(value, Enum)

      expect(result).toBe(true)
    })

    describe('edge: reverse mappings', () => {
      test('in enum', () => {
        enum Enum {
          Foo = 0
        , Bar = 'bar'
        }
        const value = 'Foo'

        const result = notInEnum(value, Enum)

        expect(result).toBe(true)
      })

      test('not in enum', () => {
        enum Enum {
          Foo = 0
        , Bar = 'bar'
        }
        const value = 'Foo'

        const result = notInEnum(value, Enum)

        expect(result).toBe(true)
      })
    })
  })
})
