import { isBlankLine } from './utils.js'

export function removeLeadingBlankLines(
  text: string
, maxRemovals: number = Infinity
): string {
  const lines = text.split('\n')

  let removals = 0
  while (
    removals < maxRemovals &&
    lines.length > 0 &&
    isBlankLine(lines[0])
  ) {
    lines.shift()
    removals++
  }

  return lines.join('\n')
}
