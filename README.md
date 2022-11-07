# extra-utils
Utilities for JavaScript and Typescript.

## Install
```sh
npm install --save extra-utils
# or
yarn add extra-utils
```

## API
### pipe
```ts
function pipe<T, U>(
  value: T
, ...operators: [
    ...Array<(value: T) => T>
  , (value: T) => U
  ]
): U
```

### Array
```ts
function isArray<T>(val: unknown): val is Array<T>
function isntArray<T>(val: T): val is Exclude<T, Array<unknown>>

function isEmptyArray(val: unknown[]): boolean
function isntEmptyArray<T>(val: T[]): val is NonEmptyArray<T>
```

### Iterable, AsyncIterable
```ts
function isIterable<T>(val: unknown): val is Iterable<T>
function isntIterable<T>(val: T): val is Exclude<T, Iterable<unknown>>

function isAsyncIterable<T>(val: unknown): val is AsyncIterable<T>
function isntAsyncIterable<T>(val: T): val is Exclude<T, AsyncIterable<unknown>>
```

### Number, BigInt
```ts
function isNumber(val: unknown): val is number
function isntNumber<T>(val: T): val is Exclude<T, number>

function isFinite(val: number): boolean
function isPositiveInfinity(val: number): boolean
function isNegativeInfinity(val: number): boolean

function isNaN(val: number): boolean
function isntNaN(val: number): boolean

function isBigInt(val: unknown): val is bigint
function isntBigInt<T>(val: T): val is Exclude<T, bigint>
```

### Boolean
```ts
function isBoolean(val: unknown): val is boolean

function isFalsy(val: unknown): val is Falsy
function isntFalsy<T>(val: T): val is Exclude<T, Falsy>
```

### String
```ts
function isString(val: unknown): val is string
function isntString<T>(val: T): val is Exclude<T, string>

function isChar(val: unknown): val is string
function isntChar(val: unknown): boolean

function isURL(str: string): boolean
```

### Date
```ts
function isDate(val: unknown): val is Date
function isntDate<T>(val: T): val is Exclude<T, Date>
```

### Enum
```ts
function inEnum<T>(val: unknown, _enum: object): val is T
```

### Function
```ts
function isFunction<T extends Function = (...args: any[]) => any>(
  val: unknown
): val is T
function isntFunction<T>(val: T): val is Exclude<T, Function>
```

### Nullish
```ts
function isNullish(val: unknown): val is Nullish
function isntNullish<T>(val: T): val is Exclude<T, Nullish>

function isNull(val: unknown): val is null
function isntNull<T>(val: T): val is Exclude<T, null>

function isUndefined(val: unknown): val is undefined
function isntUndefined<T>(val: T): val is Exclude<T, undefined>
```

### Object
```ts
function isObject(
  val: unknown
): val is object & Record<string | symbol | number, unknown>
function isntObject<T>(
  val: T
): val is Exclude<T, object & Record<string | symbol | number, unknown>>

function isPlainObject(
  val: unknown
): val is object & Record<string | symbol | number, unknown>
function isntPlainObject<T>(
  val: T
): val is Exclude<T, object & Record<string | symbol | number, unknown>>

function isEmptyObject(val: object): boolean
function isntEmptyObject(val: object): boolean

function isJson(val: unknown): Json
function isntJson<T>(val: T): val is Exclude<T, Json>
```

### RegExp
```ts
function isRegExp(val: unknown): val is RegExp
function isntRegExp<T>(val: T): val is Exclude<T, RegExp>
```

### Symbol
```ts
function isSymbol(val: unknown): val is symbol
function isntSymbol<T>(val: T): val is Exclude<T, symbol>
```
