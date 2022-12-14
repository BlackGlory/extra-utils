import { removeBlankLines } from '@src/string/remove-blank-lines'

test('removeBlankLines', () => {
  const result = removeBlankLines(
    '\n'
  + 'hello' + '\n'
  + '\n'
  + 'world' + '\n'
  + '\n'
  )

  expect(result).toBe(
    'hello' + '\n'
  + 'world'
  )
})
