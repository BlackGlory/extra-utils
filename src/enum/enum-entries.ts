import { enumKeys } from './enum-keys.js'

export function enumEntries<T extends Record<string | number, string | number>>(
  _enum: T
): Array<[key: keyof T, value: T[keyof T]]> {
  return enumKeys(_enum).map(key => [key, _enum[key]])
}
