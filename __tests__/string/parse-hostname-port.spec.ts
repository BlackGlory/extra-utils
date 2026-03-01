import { parseHostnamePort } from '@src/string/parse-hostname-port.js'
import { getError } from 'return-style'

describe('parseHostnamePort', () => {
  describe('valid', () => {
    test('hostname and port', () => {
      const text = 'localhost:65535'

      const result = parseHostnamePort(text)

      expect(result).toStrictEqual({
        hostname: 'localhost'
      , port: 65535
      })
    })

    test('hostname only', () => {
      const text = 'localhost'

      const result = parseHostnamePort(text)

      expect(result).toStrictEqual({
        hostname: 'localhost'
      , port: undefined
      })
    })
  })

  describe('invalid', () => {
    test('invalid format', () => {
      const text = ':-)'

      const err = getError(() => parseHostnamePort(text))

      expect(err).toBeInstanceOf(Error)
    })

    test('port > 65535', () => {
      const text = 'localhost:65536'

      const err = getError(() => parseHostnamePort(text))

      expect(err).toBeInstanceOf(Error)
    })
  })
})
