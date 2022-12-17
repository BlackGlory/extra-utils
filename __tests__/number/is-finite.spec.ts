import { isFinite } from '@src/number/is-finite'

describe('isFinite', () => {
  describe('finite', () => {
    it('return true', () => {
      const val = 123

      const result = isFinite(val)

      expect(result).toBe(true)
    })
  })

  describe('Infinity', () => {
    it('return false', () => {
      const val = Infinity

      const result = isFinite(val)

      expect(result).toBe(false)
    })
  })

  describe('-Infinity', () => {
    it('return false', () => {
      const val = -Infinity

      const result = isFinite(val)

      expect(result).toBe(false)
    })
  })
})
