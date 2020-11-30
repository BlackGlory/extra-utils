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

  , 'isObject', 'isntObject'

  , 'isPromise', 'isntPromise'
  , 'isPromiseLike', 'isntPromiseLike'

  , 'isFunction' , 'isntFunction'

  , 'isNodeJSWritableStream', 'isntNodeJSWritableStream'
  , 'isNodeJSReadableStream', 'isntNodeJSReadableStream'

  , 'isJson'
  , 'isntJson'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
