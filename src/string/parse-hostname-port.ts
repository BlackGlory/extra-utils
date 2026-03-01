import { isntNaN } from '@src/number/is-nan.js'
import { getErrorResult } from 'return-style'

export function parseHostnamePort(hostnamePort: string): {
  hostname: string
  port: number | undefined
} {
  const [error, url] = getErrorResult(() => new URL(`protocol://${hostnamePort}`))
  if (error) throw new Error('Invalid hostname port string')

  const hostname = url.hostname
  const portText = url.port
  const port = Number.parseInt(portText, 10)

  return {
    hostname
  , port: isntNaN(port)
        ? port
        : undefined
  }
}
