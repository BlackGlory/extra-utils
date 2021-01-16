import { isObject } from './object'

export function isDocument(val: any): val is Document {
  if ('HTMLDocument' in globalThis && val instanceof HTMLDocument) return true

  return isObject(val) && val.nodeType === Node.DOCUMENT_NODE
}

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) return true

  return isObject(val) && val.nodeType === Node.ELEMENT_NODE
}
