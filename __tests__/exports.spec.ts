import * as index from '@src/index'

test('index', () => {
  const expected = [
    'isArray', 'isntArray'
  , 'isEmptyArray', 'isntEmptyArray'

  , 'isChar', 'isntChar'
  , 'isCharPrimitive', 'isntCharPrimitive'
  , 'isCharObject', 'isntCharObject'

  , 'isDate', 'isntDate'

  , 'inEnum'

  , 'isIterable', 'isntIterable'
  , 'isAsyncIterable', 'isntAsyncIterable'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'

  , 'isString', 'isntString'
  , 'isStringPrimitive', 'isntStringPrimitive'
  , 'isStringObject', 'isntStringObject'

  , 'isNumber', 'isntNumber'

  , 'isBoolean', 'isntBoolean'

  , 'isObject', 'isntObject'
  , 'isRecord'
  , 'isEmptyObject', 'isntEmptyObject'

  , 'isFunction' , 'isntFunction'

  , 'isJson', 'isntJson'

  , 'isJsonRpcNotification', 'isntJsonRpcNotification'
  , 'isJsonRpcRequest', 'isntJsonRpcRequest'
  , 'isJsonRpcSuccess', 'isntJsonRpcSuccess'
  , 'isJsonRpcError', 'isntJsonRpcError'

  , 'isFalsy', 'isntFalsy'

  , 'isAbsoluteURL'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
