import { expectType, expectNotType } from 'tsd'
import { isNull, isntNull } from '@guards/null'
import 'jest-extended'

describe('isNull(val: unknown): val is null', () => {
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

describe('isntNull(val: unknown): val isnt null', () => {
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
