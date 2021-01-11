export function isAbsoluteURL(str: string): boolean {
  try {
    new URL(str)
    return true
  } catch {
    return false
  }
}
