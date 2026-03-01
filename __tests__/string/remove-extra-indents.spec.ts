import { describe, test, expect } from 'vitest'
import { removeExtraIndents } from '@src/string/remove-extra-indents.js'

describe('removeExtraIndents', () => {
  describe('no indentation', () => {
    test('empty', () => {
      const result = removeExtraIndents('')

      expect(result).toBe('')
    })

    test('single-line', () => {
      const result = removeExtraIndents('hello world')

      expect(result).toBe('hello world')
    })

    test('multi-line', () => {
      const result = removeExtraIndents(
        'hello' + '\n'
      + 'world'
      )

      expect(result).toBe(
        'hello' + '\n'
      + 'world'
      )
    })
  })

  describe('indented', () => {
    test('single-line', () => {
      const result = removeExtraIndents(' hello world ')

      expect(result).toBe('hello world ')
    })

    test('multi-line', () => {
      const result = removeExtraIndents(`
        hello
        world
      `)

      expect(result).toBe(`
        hello
        world
      `)
    })

    test('ignoreBlankLines = true', () => {
      const result = removeExtraIndents(`
        hello

        world
      `, { ignoreBlankLines: true })

      expect(result).toBe(
        '\n'
      + 'hello' + '\n'
      + '\n'
      + 'world' + '\n'
      )
    })
  })
})
