import { isReferenceEqual } from './is-reference-equal.js'
import { isObject } from './is-object.js'

export function isShallowEqual(a: unknown, b: unknown): boolean {
  if (isReferenceEqual(a, b)) return true

  if (isObject(a) && isObject(b)) {
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
