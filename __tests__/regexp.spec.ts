import { isRegExp, isntRegExp } from '@src/regexp'

describe('isRegExp', () => {
  test('non-regexp', () => {
    const val = 'regexp'

    const result = isRegExp(val)

    expect(result).toBe(false)
  })

  test('regexp', () => {
    const val = /^.*$/

    const result = isRegExp(val)

    expect(result).toBe(true)
  })
})

describe('isntRegExp', () => {
  test('non-regexp', () => {
    const val = 'regexp'

    const result = isntRegExp(val)

    expect(result).toBe(true)
  })

  test('regexp', () => {
    const val = /^.*$/

    const result = isntRegExp(val)

    expect(result).toBe(false)
  })
})
