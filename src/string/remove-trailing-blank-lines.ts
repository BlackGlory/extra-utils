import { isBlankLine } from './utils'

export function removeTrailingBlankLines(text: string): string {
  const lines = text.split('\n')

  while (lines.length > 0 && isBlankLine(lines[lines.length - 1])) {
    lines.pop()
  }

  return lines.join('\n')
}
