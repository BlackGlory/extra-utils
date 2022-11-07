import * as index from '@src/index'

test('index', () => {
  const expected = [
    'pipe'
  , 'inEnum', 'notInEnum'

  , 'isArray', 'isntArray'
  , 'isEmptyArray', 'isntEmptyArray'

  , 'isDate', 'isntDate'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'
  , 'isNullish', 'isntNullish'

  , 'isChar', 'isntChar'
  , 'isString', 'isntString'
  , 'isURLString', 'isntURLString'

  , 'isBigInt', 'isntBigInt'
  , 'isNumber', 'isntNumber'
  , 'isFinite', 'isPositiveInfinity', 'isNegativeInfinity'
  , 'isNaN', 'isntNaN'

  , 'isBoolean', 'isntBoolean'
  , 'isFalsy', 'isntFalsy'

  , 'isObject', 'isntObject'
  , 'isPlainObject', 'isntPlainObject'
  , 'isEmptyObject', 'isntEmptyObject'
  , 'isJson', 'isntJson'

  , 'isFunction' , 'isntFunction'

  , 'isRegExp', 'isntRegExp'

  , 'isSymbol', 'isntSymbol'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
