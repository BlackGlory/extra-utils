import { enumKeys } from './enum-keys.js'

export function enumValues<T extends Record<string, string | number>>(
  _enum: T
): Array<T[keyof T]> {
  const keys = enumKeys(_enum)
  return keys.map(key => _enum[key])
}
