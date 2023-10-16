import { enumKeys } from './enum-keys.js'

export function enumEntries<T extends Record<string, string | number>>(
  _enum: T
): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]> {
  return enumKeys(_enum).map(key => [key, _enum[key]])
}
