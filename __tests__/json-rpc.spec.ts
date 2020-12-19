import { isJsonRpcNotification, isJsonRpcRequest, isJsonRpcSuccess, isJsonRpcError } from '@src/json-rpc'

describe('isJsonRpcNotification', () => {
  it('return true', () => {
    const obj = {
      jsonrpc: '2.0'
    , method: 'method'
    , params: []
    }

    const result = isJsonRpcNotification(obj)

    expect(result).toBe(true)
  })

  it('return false', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , method: 'method'
    , params: []
    }

    const result = isJsonRpcNotification(obj)

    expect(result).toBe(false)
  })
})

describe('isJsonRpcRequest', () => {
  it('return true', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , method: 'method'
    , params: []
    }

    const result = isJsonRpcRequest(obj)

    expect(result).toBe(true)
  })

  it('return false', () => {
    const obj = {
      jsonrpc: '2.0'
    , method: 'method'
    , params: []
    }

    const result = isJsonRpcRequest(obj)

    expect(result).toBe(false)
  })
})

describe('isJsonRpcSuccess', () => {
  it('return true', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , result: 'result'
    }

    const result = isJsonRpcSuccess(obj)

    expect(result).toBe(true)
  })

  it('return false', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , error: {
        code: 0
      , message: 'message'
      }
    }

    const result = isJsonRpcSuccess(obj)

    expect(result).toBe(false)
  })
})

describe('isJsonRpcError', () => {
  it('return true', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , error: {
        code: 0
      , message: 'message'
      }
    }

    const result = isJsonRpcError(obj)

    expect(result).toBe(true)
  })

  it('return false', () => {
    const obj = {
      jsonrpc: '2.0'
    , id: 'id'
    , result: 'result'
    }

    const result = isJsonRpcError(obj)

    expect(result).toBe(false)
  })
})
