export type Json =
| string
| number
| boolean
| null
| { [property: string]: Json }
| Json[]

export function isJson(val: unknown): val is Json {
  try {
    JSON.stringify(val)
    return true
  } catch {
    return false
  }
}

export function isntJson(val: unknown): boolean {
  return !isntJson(val)
}
