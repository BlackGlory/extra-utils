import { isReferenceEqual } from './is-reference-equal.js'
import { isPlainObject } from './is-plain-object.js'
import { isArray } from '@src/array/is-array.js'

export function isShallowEqual(a: unknown, b: unknown): boolean {
  if (isReferenceEqual(a, b)) return true

  if (isArray(a) && isArray(b)) {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
      }

      return true
    }
  } else if (isPlainObject(a) && isPlainObject(b)) {
    const keysA = Reflect.ownKeys(a)
    const keysB = Reflect.ownKeys(b)

    if (keysA.length === keysB.length) {
      for (const key of keysA) {
        if (
          !Object.prototype.hasOwnProperty.call(b, key) ||
          a[key] !== b[key]
        ) {
          return false
        }
      }

      return true
    }
  }

  return false
}
