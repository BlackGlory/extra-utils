import { enumKeys } from './enum-keys.js'

export function enumEntries<T extends string | number>(
  _enum: Record<string, T>
): Array<[key: string, value: T]> {
  return enumKeys(_enum).map(key => [key, _enum[key]])
}
