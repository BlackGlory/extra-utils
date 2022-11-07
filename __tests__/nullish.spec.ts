import { expectType, expectNotType } from 'tsd'
import { isNullish, isntNullish, isNull, isntNull } from '@src/nullish'
import { Nullish } from 'justypes'
import 'jest-extended'

describe('isNullish', () => {
  describe('null', () => {
    it('return true', () => {
      const val = null

      const result = isNullish(val)

      expect(result).toBeTrue()
    })

    it('type guard', () => {
      const val: unknown = null

      if (isNullish(val)) {
        expectType<Nullish>(val)
      }
    })
  })

  describe('undefined', () => {
    it('return true', () => {
      const val = undefined

      const result = isNullish(val)

      expect(result).toBeTrue()
    })

    it('type guard', () => {
      const val: unknown = undefined

      if (isNullish(val)) {
        expectType<Nullish>(val)
      }
    })
  })

  describe('non-null', () => {
    it('return false', () => {
      const val = 'foo'

      const result = isNullish(val)

      expect(result).toBeFalse()
    })
  })
})

describe('isntNullish', () => {
  describe('null', () => {
    it('return false', () => {
      const val = null

      const result = isntNullish(val)

      expect(result).toBeFalse()
    })
  })

  describe('undefined', () => {
    it('return false', () => {
      const val = undefined

      const result = isntNullish(val)

      expect(result).toBeFalse()
    })
  })

  describe('non-null', () => {
    it('return true', () => {
      const val = 'foo'

      const result = isntNullish(val)

      expect(result).toBeTrue()
    })

    it('type guard', () => {
      const val: unknown = 'foo'

      if (isntNullish(val)) {
        expectNotType<Nullish>(val)
      }
    })
  })
})

describe('isNull', () => {
  describe('null', () => {
    it('return true', () => {
      const val = null

      const result = isNull(val)

      expect(result).toBeTrue()
    })

    it('type guard', () => {
      const val: unknown = null

      if (isNull(val)) {
        expectType<null>(val)
      }
    })
  })

  describe('non-null', () => {
    it('return false', () => {
      const val = undefined

      const result = isNull(val)

      expect(result).toBeFalse()
    })
  })
})

describe('isntNull', () => {
  describe('null', () => {
    it('return false', () => {
      const val = null

      const result = isntNull(val)

      expect(result).toBeFalse()
    })
  })

  describe('non-null', () => {
    it('return true', () => {
      const val = undefined

      const result = isntNull(val)

      expect(result).toBeTrue()
    })

    it('type guard', () => {
      const val: unknown = undefined

      if (isntNull(val)) {
        expectNotType<null>(val)
      }
    })
  })
})
