import { isntBlankLine } from './utils'

export function removeBlankLines(text: string): string {
  return text
    .split('\n')
    .filter(line => isntBlankLine(line))
    .join('\n')
}
