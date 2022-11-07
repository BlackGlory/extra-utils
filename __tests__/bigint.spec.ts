import { isBigInt } from '@src/bigint'
import 'jest-extended'

describe('isBigInt', () => {
  describe('bigint', () => {
    it('return true', () => {
      const val = BigInt(123)

      const result = isBigInt(val)

      expect(result).toBeTrue()
    })
  })

  describe('number', () => {
    it('return false', () => {
      const val = 123

      const result = isBigInt(val)

      expect(result).toBeFalse()
    })
  })
})
