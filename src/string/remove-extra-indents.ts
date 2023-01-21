import { isntBlankLine } from './utils.js'

export function removeExtraIndents(
  text: string
, { ignoreBlankLines = false }: {
    ignoreBlankLines?: boolean
  } = {}
): string {
  const lines = text.split('\n')
  const commonIndentLength = lines
    .filter(line => ignoreBlankLines ? isntBlankLine(line) : true)
    .reduce(
      (acc, cur) => {
        const indent = cur.match(/^(\s+)/)
        if (indent) {
          return Math.min(acc, indent[1].length)
        } else {
          return 0
        }
      }
    , Infinity
    )
  if (commonIndentLength === 0 || commonIndentLength === Infinity) {
    return text
  }

  const newLines = lines.map(x => x.slice(commonIndentLength))
  return newLines.join('\n')
}
