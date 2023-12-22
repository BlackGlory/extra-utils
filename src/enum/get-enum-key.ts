import { enumEntries } from './enum-entries.js'

export function getEnumKey<T extends Record<string, string | number>>(
  _enum: T
, enumValue: T[keyof T]
): keyof T {
  for (const [key, value] of enumEntries(_enum)) {
    if (value === enumValue) {
      return key
    }
  }

  throw new Error('There are no enumeration items matching the given value.')
}
