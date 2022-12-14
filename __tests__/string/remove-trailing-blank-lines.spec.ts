import { removeTrailingBlankLines } from '@src/string/remove-trailing-blank-lines'

describe('removeTrailingBlankLines', () => {
  describe('trailing blank lines exist', () => {
    test('\\n\\s+', () => {
      const result = removeTrailingBlankLines(
        '  ' + '\n'
      + 'a' + '\n'
      + '  '
      )

      expect(result).toBe(
        '  ' + '\n'
      + 'a'
      )
    })

    test('\\n', () => {
      const result = removeTrailingBlankLines(
        '  ' + '\n'
      + 'a' + '\n'
      )

      expect(result).toBe(
        '  ' + '\n'
      + 'a'
      )
    })
  })

  test('no trailing blank lines', () => {
    const result = removeTrailingBlankLines(
      '  ' + '\n'
    + 'a'
    )

    expect(result).toBe(
      '  ' + '\n'
    + 'a'
    )
  })
})
