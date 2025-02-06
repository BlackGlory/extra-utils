import { modf } from '@src/number/modf.js'

describe('modf', () => {
  describe('value > 1', () => {
    test('value = 1.5', () => {
      const value = 1.5

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(1)
      expect(fractionalPart).toBe(0.5)
    })

    test('1.4', () => {
      const value = 1.4

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(1)
      expect(fractionalPart).toBeCloseTo(0.4)
    })
  })

  describe('0 < value < 1', () => {
    test('value = 0.5', () => {
      const value = 0.5

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(0)
      expect(fractionalPart).toBe(0.5)
    })

    test('value = 0.4', () => {
      const value = 0.4

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(0)
      expect(fractionalPart).toBeCloseTo(0.4)
    })
  })

  describe('value < 0', () => {
    test('value = -1.5', () => {
      const value = -1.5

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(-1)
      expect(fractionalPart).toBe(-0.5)
    })

    test('value = -1.4', () => {
      const value = -1.4

      const [integralPart, fractionalPart] = modf(value)

      expect(integralPart).toBe(-1)
      expect(fractionalPart).toBeCloseTo(-0.4)
    })
  })
})
