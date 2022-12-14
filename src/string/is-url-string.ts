export function isURLString(text: string): boolean {
  try {
    new URL(text)
    return true
  } catch {
    return false
  }
}

export function isntURLString(text: string): boolean {
  return !isURLString(text)
}
