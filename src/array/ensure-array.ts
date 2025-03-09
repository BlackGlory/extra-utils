import { Arrayable } from 'justypes'
import { isArray } from './is-array.js'

export function ensureArray<T>(value: Arrayable<T>): T[] {
  return isArray(value)
       ? value
       : [value]
}
