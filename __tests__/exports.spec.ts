import * as index from '@src/index'

test('index', () => {
  const expected = [
    'isArray', 'isntArray'
  , 'isEmptyArray', 'isntEmptyArray'

  , 'isDate', 'isntDate'

  , 'inEnum'

  , 'isIterable', 'isntIterable'
  , 'isAsyncIterable', 'isntAsyncIterable'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'
  , 'isNullish', 'isntNullish'

  , 'isChar', 'isntChar'
  , 'isString', 'isntString'
  , 'isURL'

  , 'isBigInt', 'isntBigInt'
  , 'isNumber', 'isntNumber'
  , 'isFinite', 'isPositiveInfinity', 'isNegativeInfinity'
  , 'isNaN', 'isntNaN'

  , 'isBoolean', 'isntBoolean'

  , 'isObject', 'isntObject'
  , 'isPlainObject', 'isntPlainObject'
  , 'isEmptyObject', 'isntEmptyObject'

  , 'isFunction' , 'isntFunction'

  , 'isJson', 'isntJson'

  , 'isFalsy', 'isntFalsy'

  , 'isError', 'isntError'

  , 'isRegExp', 'isntRegExp'

  , 'isSymbol', 'isntSymbol'

  , 'pipe'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
