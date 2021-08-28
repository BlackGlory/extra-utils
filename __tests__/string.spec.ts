import { isString } from '@src/string'
import 'jest-extended'

describe('isString(val: unknown): val is string', () => {
  describe('string', () => {
    it('return true', () => {
      const val = 'str'

      const result = isString(val)

      expect(result).toBeTrue()
    })
  })

  describe('String', () => {
    it('return false', () => {
      const val = new String('str')

      const result = isString(val)

      expect(result).toBeFalse()
    })
  })
})
