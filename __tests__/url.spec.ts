import { isAbsoluteURL } from '@src/url'

describe('isAbsoluteURL(str: string): boolean', () => {
  describe('is absolute url', () => {
    it('return true', () => {
      const str= 'https://example.com'

      const result = isAbsoluteURL(str)

      expect(result).toBe(true)
    })
  })

  describe('is relative url', () => {
    it('return false', () => {
      const str= '.'

      const result = isAbsoluteURL(str)

      expect(result).toBe(false)
    })
  })
})
