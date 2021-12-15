import * as index from '@src/index'

test('index', () => {
  const expected = [
    'isArray', 'isntArray'
  , 'isEmptyArray', 'isntEmptyArray'

  , 'isBigInt', 'isntBigInt'

  , 'isChar', 'isntChar'

  , 'isDate', 'isntDate'

  , 'inEnum'

  , 'isIterable', 'isntIterable'
  , 'isAsyncIterable', 'isntAsyncIterable'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'

  , 'isString', 'isntString'

  , 'isNumber', 'isntNumber'

  , 'isBoolean', 'isntBoolean'

  , 'isObject', 'isntObject'
  , 'isPlainObject', 'isntPlainObject'
  , 'isEmptyObject', 'isntEmptyObject'

  , 'isFunction' , 'isntFunction'

  , 'isJson', 'isntJson'

  , 'isJsonRpcNotification', 'isntJsonRpcNotification'
  , 'isJsonRpcRequest', 'isntJsonRpcRequest'
  , 'isJsonRpcSuccess', 'isntJsonRpcSuccess'
  , 'isJsonRpcError', 'isntJsonRpcError'

  , 'isFalsy', 'isntFalsy'

  , 'isAbsoluteURL'
  
  , 'isError', 'isntError'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
