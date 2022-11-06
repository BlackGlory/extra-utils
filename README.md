# extra-utils
Utilities for JavaScript and Typescript.

## Install
```sh
npm install --save extra-utils
# or
yarn add extra-utils
```

## API
### Array
```ts
function isArray<T>(val: unknown): val is Array<T>
function isntArray<T>(val: T): val is Exclude<T, Array<unknown>>
function isEmptyArray(val: unknown[]): boolean
function isntEmptyArray<T>(val: T[]): val is NonEmptyArray<T>
```

### AsyncIterable
```ts
function isAsyncIterable<T>(val: unknown): val is AsyncIterable<T>
function isntAsyncIterable<T>(val: T): val is Exclude<T, AsyncIterable<unknown>>
```

### BigInt
```ts
function isBigInt(val: unknown): val is bigint
function isntBigInt<T>(val: T): val is Exclude<T, bigint>
```

### Boolean
```ts
function isBoolean(val: unknown): val is boolean
```

### String
```ts
function isString(val: unknown): val is string
function isntString<T>(val: T): val is Exclude<T, string>
function isChar(val: unknown): val is string
function isntChar(val: unknown): boolean
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

### Error
```ts
function isError(val: unknown): val is Error
function isntError<T>(val: T): val is Exclude<T, Error>
```

### Falsy
```ts
function isFalsy(val: unknown): val is Falsy
function isntFalsy<T>(val: T): val is Exclude<T, Falsy>
```

### Function
```ts
function isFunction<T extends Function = (...args: any[]) => any>(
  val: unknown
): val is T
function isntFunction<T>(val: T): val is Exclude<T, Function>
```

### JSON
```ts
function isJson(val: unknown): Json
function isntJson<T>(val: T): val is Exclude<T, Json>
function isJsonable(val: unknown): boolean
function isntJsonable<T>(val: T): boolean
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

### Number
```ts
function isNumber(val: unknown): val is number
function isntNumber<T>(val: T): val is Exclude<T, number>
function isFinite(val: number): boolean
function isPositiveInfinity(val: number): boolean
function isNegativeInfinity(val: number): boolean
function isNaN(val: number): boolean
function isntNaN(val: number): boolean
```

### Object
```ts
function isObject(val: unknown): val is object & Record<string | symbol | number, unknown>
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
```

### Promise
```ts
function isPromise<T>(val: unknown): val is Promise<T>
function isntPromise<T>(val: T): val is Exclude<T, Promise<unknown>>
function isntPromiseLike<T>(val: T): val is Exclude<T, PromiseLike<unknown>>
function isPromiseLike<T>(val: unknown): val is PromiseLike<T>
```

### URL
```ts
function isAbsoluteURL(str: string): boolean
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
