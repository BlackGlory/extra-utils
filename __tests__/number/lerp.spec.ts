import { lerp } from '@src/number/lerp.js'

describe('lerp', () => {
  test('from < to', () => {
    const alpha = 0.7
    const from = 10
    const to = 20

    const result = lerp(alpha, [from, to])

    expect(result).toBe(17)
  })

  test('from = to', () => {
    const alpha = 0.7
    const from = 10
    const to = 10

    const result = lerp(alpha, [from, to])

    expect(result).toBe(10)
  })

  test('from > to', () => {
    const alpha = 0.7
    const from = 20
    const to = 10

    const result = lerp(alpha, [from, to])

    expect(result).toBe(13)
  })
})
