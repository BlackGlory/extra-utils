import * as index from '@src/index'

test('index', () => {
  const expected = [
    'isChar', 'isntChar'
  , 'isCharPrimitive', 'isntCharPrimitive'
  , 'isCharObject', 'isntCharObject'

  , 'isIterable', 'isntIterable'
  , 'isAsyncIterable', 'isntAsyncIterable'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'

  , 'isString', 'isntString'
  , 'isStringPrimitive', 'isntStringPrimitive'
  , 'isStringObject', 'isntStringObject'

  , 'isNumber', 'isntNumber'

  , 'isObject', 'isntObject'

  , 'isPromise', 'isntPromise'
  , 'isPromiseLike', 'isntPromiseLike'

  , 'isFunction' , 'isntFunction'

  , 'isNodeJSWritableStream', 'isntNodeJSWritableStream'
  , 'isNodeJSReadableStream', 'isntNodeJSReadableStream'

  , 'isJson', 'isntJson'

  , 'isJsonRpcNotification', 'isntJsonRpcNotification'
  , 'isJsonRpcRequest', 'isntJsonRpcRequest'
  , 'isJsonRpcSuccess', 'isntJsonRpcSuccess'
  , 'isJsonRpcError', 'isntJsonRpcError'

  , 'isFalsy', 'isntFalsy'

  , 'isAbsoluteURL'

  , 'isElement', 'isntElement'
  , 'isDocument', 'isntDocument'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
