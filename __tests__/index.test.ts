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

  , 'isNumber'

  , 'isObject', 'isntObject'

  , 'isPromise', 'isntPromise'
  , 'isPromiseLike', 'isntPromiseLike'

  , 'isFunction' , 'isntFunction'

  , 'isNodeJSWritableStream', 'isntNodeJSWritableStream'
  , 'isNodeJSReadableStream', 'isntNodeJSReadableStream'

  , 'isJson'
  , 'isntJson'

  , 'isJsonRpcNotification'
  , 'isJsonRpcRequest'
  , 'isJsonRpcSuccess'
  , 'isJsonRpcError'

  , 'isFalsy'
  , 'isntFalsy'

  , 'isAbsoluteURL'

  , 'isElement'
  , 'isDocument'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
