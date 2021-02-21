import { isDocument, isElement } from 'extra-dom'
export { isDocument, isElement } from 'extra-dom'

export function isntDocument<T>(val: T): val is Exclude<T, Document> {
  return !isDocument(val)
}

export function isntElement<T>(val: T): val is Exclude<T, Element> {
  return !isElement(val)
}
