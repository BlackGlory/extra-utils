import { enumKeys } from './enum-keys.js'

export function enumValues<T>(_enum: Record<string, T>): T[] {
  const keys = enumKeys(_enum)
  return keys.map(key => _enum[key])
}
