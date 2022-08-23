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
  , 'isFinite', 'isPositiveInfinity', 'isNegativeInfinity'
  , 'isNaN', 'isntNaN'

  , 'isBoolean', 'isntBoolean'

  , 'isObject', 'isntObject'
  , 'isPlainObject', 'isntPlainObject'
  , 'isEmptyObject', 'isntEmptyObject'

  , 'isPromise', 'isntPromise'
  , 'isPromiseLike', 'isntPromiseLike'

  , 'isFunction' , 'isntFunction'

  , 'isJson', 'isntJson'
  , 'isJsonable', 'isntJsonable'

  , 'isFalsy', 'isntFalsy'

  , 'isAbsoluteURL'
  
  , 'isError', 'isntError'

  , 'isRegExp', 'isntRegExp'

  , 'isSymbol', 'isntSymbol'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
