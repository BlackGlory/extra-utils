import { isObject } from './object'

const DOCUMENT_NODE = 'Node' in globalThis ? Node.DOCUMENT_NODE : 9
const ELEMENT_NODE = 'Node' in globalThis ? Node.ELEMENT_NODE : 1

export function isDocument(val: any): val is Document {
  if ('HTMLDocument' in globalThis && val instanceof HTMLDocument) return true

  return isObject(val) && val.nodeType === DOCUMENT_NODE
}

export function isElement(val: any): val is Element {
  if ('HTMLElement' in globalThis && val instanceof HTMLElement) return true

  return isObject(val) && val.nodeType === ELEMENT_NODE
}
