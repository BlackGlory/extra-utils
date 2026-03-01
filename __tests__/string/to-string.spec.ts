import { describe, test, expect } from 'vitest'
import { toString } from '@src/string/to-string.js'

describe('toString', () => {
  test('string', () => {
    const val = 'foo'

    const result = toString(val)

    expect(result).toBe(val)
  })

  test('non-string', () => {
    const val = new Error('foo')

    const result = toString(val)

    expect(result).toBe('Error: foo')
  })
})
