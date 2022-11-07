import { isNumber, isFinite, isNegativeInfinity, isPositiveInfinity, isNaN } from '@src/number'
import 'jest-extended'

describe('isNumber', () => {
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

describe('isNegativeInfinity', () => {
  describe('finite', () => {
    it('return false', () => {
      const val = 123

      const result = isNegativeInfinity(val)

      expect(result).toBe(false)
    })
  })

  describe('Infinity', () => {
    it('return false', () => {
      const val = Infinity

      const result = isNegativeInfinity(val)

      expect(result).toBe(false)
    })
  })

  describe('-Infinity', () => {
    it('return true', () => {
      const val = -Infinity

      const result = isNegativeInfinity(val)

      expect(result).toBe(true)
    })
  })
})

describe('isPositiveInfinity', () => {
  describe('finite', () => {
    it('return false', () => {
      const val = 123

      const result = isPositiveInfinity(val)

      expect(result).toBe(false)
    })
  })

  describe('Infinity', () => {
    it('return true', () => {
      const val = Infinity

      const result = isPositiveInfinity(val)

      expect(result).toBe(true)
    })
  })

  describe('-Infinity', () => {
    it('return false', () => {
      const val = -Infinity

      const result = isPositiveInfinity(val)

      expect(result).toBe(false)
    })
  })
})

describe('isNaN', () => {
  describe('NaN', () => {
    it('return true', () => {
      const val = NaN

      const result = isNaN(val)

      expect(result).toBe(true)
    })
  })

  describe('Infinity', () => {
    it('return false', () => {
      const val = Infinity

      const result = isNaN(val)

      expect(result).toBe(false)
    })
  })
})
