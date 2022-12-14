export function isEmptyObject(val: object): boolean {
  return Object.keys(val).length === 0
}

export function isntEmptyObject(val: object): boolean {
  return Object.keys(val).length !== 0
}
