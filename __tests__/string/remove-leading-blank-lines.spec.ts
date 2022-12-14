import { removeLeadingBlankLines } from '@src/string/remove-leading-blank-lines'

describe('removeLeadingBlankLines', () => {
  describe('leading blank lines exist', () => {
    test('\\s+\\n', () => {
      const result = removeLeadingBlankLines(
        '  ' + '\n'
      + 'a' + '\n'
      + '  '
      )

      expect(result).toBe(
        'a' + '\n'
      + '  '
      )
    })

    test('\\n', () => {
      const result = removeLeadingBlankLines(
        '\n'
      + 'a' + '\n'
      + '  '
      )

      expect(result).toBe(
        'a' + '\n'
      + '  '
      )
    })
  })

  test('no leading blank lines', () => {
    const result = removeLeadingBlankLines(
      'a' + '\n'
    + '  '
    )

    expect(result).toBe(
      'a' + '\n'
    + '  '
    )
  })
})
