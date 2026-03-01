import { test, expect } from 'vitest'
import { fromEntries } from '@src/object/from-entries.js'

test('fromEntries', () => {
  const entries: [string, number][] = [
    ['foo', 0]
  , ['bar', 1]
  ]

  const result = fromEntries(entries)

  expect(result).toStrictEqual(Object.fromEntries(entries))
})
