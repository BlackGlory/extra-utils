export function isBlankLine(line: string): boolean {
  return line.trim() === ''
}

export function isntBlankLine(line: string): boolean {
  return !isBlankLine(line)
}
