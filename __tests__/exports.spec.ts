import * as index from '@src/index.js'

test('index', () => {
  const expected = [
    'pipe', 'pipeAsync'
  , 'inEnum', 'notInEnum'

  , 'first'
  , 'last'

  , 'isArray', 'isntArray'
  , 'isEmptyArray', 'isntEmptyArray'

  , 'isDate', 'isntDate'

  , 'isNull', 'isntNull'
  , 'isUndefined', 'isntUndefined'
  , 'isNullish', 'isntNullish'

  , 'isChar', 'isntChar'
  , 'isString', 'isntString'
  , 'isURLString', 'isntURLString'
  , 'removeExtraIndents'
  , 'removeBlankLines'
  , 'removeLeadingBlankLines'
  , 'removeTrailingBlankLines'
  , 'toString'

  , 'isBigInt', 'isntBigInt'
  , 'isNumber', 'isntNumber'
  , 'isFinite', 'isPositiveInfinity', 'isNegativeInfinity'
  , 'isNaN', 'isntNaN'

  , 'isBoolean', 'isntBoolean'
  , 'isFalsy', 'isntFalsy'

  , 'isObject', 'isntObject'
  , 'isPlainObject', 'isntPlainObject'
  , 'isEmptyObject', 'isntEmptyObject'
  , 'isReferenceEqual', 'isShallowEqual', 'isDeepEqual'

  , 'isJSONValue', 'isntJSONValue'
  , 'isJSONSerializable', 'isntJSONSerializable'

  , 'isFunction' , 'isntFunction'

  , 'isRegExp', 'isntRegExp'

  , 'isSymbol', 'isntSymbol'
  ].sort()

  const result = Object.keys(index).sort()

  expect(result).toStrictEqual(expected)
})
