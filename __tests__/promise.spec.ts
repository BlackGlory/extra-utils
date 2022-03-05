import { isPromise, isPromiseLike } from '@src/promise'
import { pass } from '@blackglory/pass'

describe('isPromise<T>(val: any): boolean', () => {
  describe('val is Promise<T>', () => {
    it('return true', () => {
      const obj = Promise.resolve()

      const result = isPromise(obj)

      expect(result).toBe(true)
    })
  })

  describe('val isnt Promise<T>', () => {
    it('return false', () => {
      const obj = null

      const result = isPromise(obj)

      expect(result).toBe(false)
    })
  })
})

describe('isPromiseLike<T>(val: any): boolean', () => {
  describe('val is PromiseLike<T>', () => {
    it('return true', () => {
      const obj = { then: pass }

      const result = isPromiseLike(obj)

      expect(result).toBe(true)
    })
  })

  describe('val isnt PromiseLike<T>', () => {
    it('return false', () => {
      const obj = null

      const result = isPromiseLike(obj)

      expect(result).toBe(false)
    })
  })
})
