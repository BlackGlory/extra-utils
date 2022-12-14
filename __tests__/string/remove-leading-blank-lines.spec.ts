import { removeLeadingBlankLines } from '@src/string/remove-leading-blank-lines'

describe('removeLeadingBlankLines', () => {
  describe('leading blank lines exist', () => {
    describe('maxRemovals = Infintiy', () => {
      test('\\s+\\n', () => {
        const result = removeLeadingBlankLines(
          '  ' + '\n'
        + '  ' + '\n'
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
        + '\n'
        + 'a' + '\n'
        + '  '
        )

        expect(result).toBe(
          'a' + '\n'
        + '  '
        )
      })
    })

    describe('maxRemovals = 1', () => {
      test('\\s+\\n', () => {
        const result = removeLeadingBlankLines(
          '  ' + '\n'
        + '  ' + '\n'
        + 'a' + '\n'
        + '  '
        , 1
        )

        expect(result).toBe(
          '  ' + '\n'
        + 'a' + '\n'
        + '  '
        )
      })

      test('\\n', () => {
        const result = removeLeadingBlankLines(
          '\n'
        + '\n'
        + 'a' + '\n'
        + '  '
        , 1
        )

        expect(result).toBe(
          '\n'
        + 'a' + '\n'
        + '  '
        )
      })
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
