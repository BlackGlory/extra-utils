import { isString, isURL } from '@src/string'
import 'jest-extended'

describe('isString', () => {
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

describe('isURL', () => {
  describe('is url', () => {
    it('return true', () => {
      const str= 'https://example.com'

      const result = isURL(str)

      expect(result).toBe(true)
    })
  })

  describe('isnt url', () => {
    it('return false', () => {
      const str= '.'

      const result = isURL(str)

      expect(result).toBe(false)
    })
  })
})
