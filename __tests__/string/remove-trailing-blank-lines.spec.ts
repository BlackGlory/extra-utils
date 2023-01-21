import { removeTrailingBlankLines } from '@src/string/remove-trailing-blank-lines.js'

describe('removeTrailingBlankLines', () => {
  describe('trailing blank lines exist', () => {
    describe('maxRemovals = Infinity', () => {
      test('\\n\\s+', () => {
        const result = removeTrailingBlankLines(
          '  ' + '\n'
        + 'a' + '\n'
        + '  ' + '\n'
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
        + '\n'
        )

        expect(result).toBe(
          '  ' + '\n'
        + 'a'
        )
      })
    })

    describe('maxRemovals = 1', () => {
      test('\\n\\s+', () => {
        const result = removeTrailingBlankLines(
          '  ' + '\n'
        + 'a' + '\n'
        + '  ' + '\n'
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
        const result = removeTrailingBlankLines(
          '  ' + '\n'
        + 'a' + '\n'
        + '\n'
        , 1
        )

        expect(result).toBe(
          '  ' + '\n'
        + 'a' + '\n'
        )
      })
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
