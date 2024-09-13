export function fromEntries<Key extends number | string, Value>(
  entries: Iterable<[Key, Value]>
): Record<Key, Value> {
  return Object.fromEntries(entries) as Record<Key, Value>
}
