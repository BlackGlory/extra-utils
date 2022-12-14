import { isBlankLine } from './utils'

export function removeLeadingBlankLines(text: string): string {
  const lines = text.split('\n')

  while (lines.length > 0 && isBlankLine(lines[0])) {
    lines.shift()
  }

  return lines.join('\n')
}
