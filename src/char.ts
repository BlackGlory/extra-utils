import { isString } from '@src/string'

export function isChar(val: unknown): val is string {
  return isString(val)
      && val.length === 1
}

export function isntChar(val: unknown): boolean {
  return !isChar(val)
}
