import { Json } from 'justypes'

export function isJson(val: unknown): val is Json {
  try {
    JSON.stringify(val)
    return true
  } catch {
    return false
  }
}

export function isntJson<T>(val: T): val is Exclude<T, Json> {
  return !isntJson(val)
}
