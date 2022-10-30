# types
Type guards for JavaScript and Typescript.

## Install
```sh
npm install --save @blackglory/types
# or
yarn add @blackglory/types
```

## API
```ts
function isArray<T>(val: unknown): val is Array<T>
function isntArray<T>(val: T): val is Exclude<T, Array<unknown>>

function isEmptyArray(val: unknown[]): boolean
function isntEmptyArray<T>(val: T[]): val is NonEmptyArray<T>

function isAsyncIterable<T>(val: unknown): val is AsyncIterable<T>
function isntAsyncIterable<T>(val: T): val is Exclude<T, AsyncIterable<unknown>>

function isBigInt(val: unknown): val is bigint
function isntBigInt<T>(val: T): val is Exclude<T, bigint>

function isBoolean(val: unknown): val is boolean

function isChar(val: unknown): val is string
function isntChar(val: unknown): boolean

function isDate(val: unknown): val is Date
function isntDate<T>(val: T): val is Exclude<T, Date>

function inEnum<T>(val: unknown, _enum: object): val is T

function isError(val: unknown): val is Error
function isntError<T>(val: T): val is Exclude<T, Error>

function isFalsy(val: unknown): val is Falsy
function isntFalsy<T>(val: T): val is Exclude<T, Falsy>

function isFunction<T extends Function = (...args: any[]) => any>(
  val: unknown
): val is T
function isntFunction<T>(val: T): val is Exclude<T, Function>

function isIterable<T>(val: unknown): val is Iterable<T>
function isntIterable<T>(val: T): val is Exclude<T, Iterable<unknown>>

function isJson(val: unknown): Json
function isntJson<T>(val: T): val is Exclude<T, Json>

function isJsonable(val: unknown): boolean
function isntJsonable<T>(val: T): boolean

function isNull(val: unknown): val is null
function isntNull<T>(val: T): val is Exclude<T, null>

function isNullish(val: unknown): val is Nullish
function isntNullish<T>(val: T): val is Exclude<T, Nullish>

function isNumber(val: unknown): val is number
function isntNumber<T>(val: T): val is Exclude<T, number>

function isFinite(val: number): boolean
function isPositiveInfinity(val: number): boolean
function isNegativeInfinity(val: number): boolean
function isNaN(val: number): boolean
function isntNaN(val: number): boolean

function isObject(val: unknown): val is object & Record<string | symbol | number, unknown>
function isntObject<T>(val: T): val is Exclude<T, object & Record<string | symbol | number, unknown>>

function isPlainObject(val: unknown): val is object & Record<string | symbol | number, unknown>
function isntPlainObject<T>(val: T): val is Exclude<T, object & Record<string | symbol | number, unknown>>

function isEmptyObject(val: object): boolean
function isntEmptyObject(val: object): boolean

function isPromise<T>(val: unknown): val is Promise<T>
function isntPromise<T>(val: T): val is Exclude<T, Promise<unknown>>

function isntPromiseLike<T>(val: T): val is Exclude<T, PromiseLike<unknown>>
function isPromiseLike<T>(val: unknown): val is PromiseLike<T>

function isString(val: unknown): val is string
function isntString<T>(val: T): val is Exclude<T, string>

function isUndefined(val: unknown): val is undefined
function isntUndefined<T>(val: T): val is Exclude<T, undefined>

function isAbsoluteURL(str: string): boolean

function isRegExp(val: unknown): val is RegExp
function isntRegExp<T>(val: T): val is Exclude<T, RegExp>

function isSymbol(val: unknown): val is symbol
function isntSymbol<T>(val: T): val is Exclude<T, symbol>
```
