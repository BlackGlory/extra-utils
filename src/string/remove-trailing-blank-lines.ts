import { isBlankLine } from './utils.js'

export function removeTrailingBlankLines(
  text: string
, maxRemovals: number = Infinity
): string {
  const lines = text.split('\n')

  let removals = 0
  while (
    removals < maxRemovals &&
    lines.length > 0 &&
    isBlankLine(lines[lines.length - 1])
  ) {
    lines.pop()
    removals++
  }

  return lines.join('\n')
}
