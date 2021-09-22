import { isError, isntError } from '@src/error'

describe('isError(val: unknown): boolean', () => {
  test('non-error', () => {
    const val = 'error'

    const result = isError(val)

    expect(result).toBe(false)
  })

  test('error', () => {
    const val = new Error('error')

    const result = isError(val)

    expect(result).toBe(true)
  })
})

describe('isntError(val: unknown): boolean', () => {
  test('non-error', () => {
    const val = 'error'

    const result = isntError(val)

    expect(result).toBe(true)
  })

  test('error', () => {
    const val = new Error('error')

    const result = isntError(val)

    expect(result).toBe(false)
  })
})
