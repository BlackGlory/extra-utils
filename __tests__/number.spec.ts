import { isNumber } from '@src/number'
import 'jest-extended'

describe('isNumber(val: unknown): val is number', () => {
  describe('number', () => {
    it('return true', () => {
      const val = 123

      const result = isNumber(val)

      expect(result).toBeTrue()
    })
  })

  describe('number-like string', () => {
    it('return false', () => {
      const val = '123'

      const result = isNumber(val)

      expect(result).toBeFalse()
    })
  })
})
