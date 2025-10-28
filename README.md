# extra-utils
Utilities for JavaScript and Typescript.

## Install
```sh
npm install --save extra-utils
# or
yarn add extra-utils
```

## API
### ArrayLike
```ts
function first<T>(arr: NonEmptyArray<T>): T
function first<T>(arr: ArrayLike<T>): T | undefined

function last<T>(arr: NonEmptyArray<T>): T
function last<T>(arr: ArrayLike<T>): T | undefined

function ensureArray<T>(value: Arrayable<T>): T[]
```

### Array
```ts
function isArray<T>(val: unknown): val is Array<T>
function isntArray<T>(val: T): val is Exclude<T, Array<unknown>>

function isEmptyArray(val: readonly unknown[]): boolean
function isntEmptyArray<T>(val: readonly T[]): val is NonEmptyArray<T>
```

### Boolean
```ts
function isBoolean(val: unknown): val is boolean
function isntBoolean<T>(val: unknown): val is Exclude<T, boolean>

function isFalsy(val: unknown): val is Falsy
function isntFalsy<T>(val: T): val is Exclude<T, Falsy>
```

### JSON
```ts
function isJSONValue(val: unknown): val is JSONValue
function isntJSONValue<T>(val: T): val is Exclude<T, JSONValue>

function isJSONSerializable<T extends
| JSONValue
| Record<string, JSONValue | JSONSerializable<any>>
| Array<JSONValue | JSONSerializable<any>>
>(val: unknown): val is JSONSerializable<T>
function isntJSONSerializable<T>(val: T): val is Exclude<T, JSONSerializable<any>>
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
function isntFinite(val: number): boolean

function isPositiveInfinity(val: number): boolean
function isntPositiveInfinity(val: number): boolean

function isNegativeInfinity(val: number): boolean
function isntNegativeInfinity(val: number): boolean

function isNaN(val: number): boolean
function isntNaN(val: number): boolean

function isBigInt(val: unknown): val is bigint
function isntBigInt<T>(val: T): val is Exclude<T, bigint>

function clamp(
  val: number
, [min, max]: readonly [min: number, max: number]
): number

function remap(
  value: number
, [oldMin, oldMax]: readonly [oldMin: number, oldMax: number]
, [newMin, newMax]: readonly [newMin: number, newMax: number]
): number

function remapToItem<T>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
): T

interface IWeightedItem {
  weight: number
}

function remapToWeightedItem<T>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
, weights: NonEmptyArray<number>
): T
function remapToWeightedItem<T extends IWeightedItem>(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<T>
): T

function remapToIndex(
  value: number
, range: readonly [min: number, max: number]
, items: NonEmptyArray<unknown>
): number

function remapToWeightedIndex(
  value: number
, range: [min: number, max: number]
, weights: NonEmptyArray<number>
): number

function lerp(
  alpha: number
, [from, to]: readonly [from: number, to: number]
): number

function modf(value: number): [integralPart: number, fractionalPart: number]
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

function isReferenceEqual(a: unknown, b: unknown): boolean
function isShallowEqual(a: unknown, b: unknown): boolean
function isDeepEqual(a: unknown, b: unknown): boolean

function fromEntries<Key extends number | string, Value>(
  entries: Iterable<[Key, Value]>
): Record<Key, Value>
```

### String
```ts
function isString(val: unknown): val is string
function isntString<T>(val: T): val is Exclude<T, string>

function isChar(val: unknown): val is string
function isntChar(val: unknown): boolean

function isURLString(text: string): boolean
function isntURLString(text: string): boolean

function toString(val: unknown): string
```

#### removeExtraIndents
```ts
function removeExtraIndents(
  text: string
, options?: { ignoreBlankLines: boolean = false }
): string
```

Example:
```ts
removeExtraIndents(`
  hello

  world
`, { ignoreBlankLines: true })
//   '\n'
// + 'hello' + '\n'
// + '\n'
// + 'world' + '\n'
```

#### removeBlankLines
```ts
function removeBlankLines(text: string): string
```

Example:
```ts
removeBlankLines(
  '\n'
+ 'hello' + '\n'
+ '\n'
+ 'world' + '\n'
+ '\n'
)
//   'hello' + '\n'
// + 'world'
```

#### removeLeadingBlankLines
```ts
function removeLeadingBlankLines(
  text: string
, maxRemovals: number = Infinity
): string
```

Example:
```ts
removeLeadingBlankLines(
  '  ' + '\n'
+ 'a' + '\n'
+ '  '
)
//   'a' + '\n'
// + '  '
```

#### removeTrailingBlankLines
```ts
function removeTrailingBlankLines(
  text: string
, maxRemovals: number = Infinity
): string
```

Example:
```ts
removeTrailingBlankLines(
  '  ' + '\n'
+ 'a' + '\n'
+ '  '
)
//   '  ' + '\n'
// + 'a'
```

### Enum
```ts
function inEnum<T extends Record<string, string | number>>(
  val: unknown
, _enum: T
): val is T[keyof T]
function notInEnum(
  val: unknown
, _enum: Record<string, string | number>
): boolean

function enumKeys<T extends Record<string, string | number>>(
  _enum: T
): Array<keyof T>
function enumValues<T extends Record<string, string | number>>(
  _enum: T
): Array<T[keyof T]>
function enumEntries<T extends Record<string, string | number>>(
  _enum: T
): Array<{ [Key in keyof T]: [Key, T[Key]] }[keyof T]>

function getEnumKey<T extends Record<string, string | number>>(
  _enum: T
, enumValue: T[keyof T]
): keyof T
```

### Date
```ts
function isDate(val: unknown): val is Date
function isntDate<T>(val: T): val is Exclude<T, Date>
```

### Function
```ts
function isFunction<T extends Function = (...args: any[]) => any>(
  val: unknown
): val is T
function isntFunction<T>(val: T): val is Exclude<T, Function>
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

### Functional programming
#### not
```ts
function not<Args extends unknown[]>(
  predicate: (...args: Args) => boolean
): (...args: Args) => boolean
```

#### pipe
```ts
function pipe<A, B, C, D, E, F, G, H>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  , (value: F) => G
  , (value: G) => H
  ]
): H
function pipe<A, B, C, D, E, F, G>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  , (value: F) => G
  ]
): G
function pipe<A, B, C, D, E, F>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  , (value: E) => F
  ]
): F
function pipe<A, B, C, D, E>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  , (value: D) => E
  ]
): E
function pipe<A, B, C, D>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  , (value: C) => D
  ]
): D
function pipe<A, B, C>(
  value: A
, ...operators: [
    (value: A) => B
  , (value: B) => C
  ]
): C
function pipe<A, B>(
  value: A
, ...operators: [
    (value: A) => B
  ]
): B
function pipe<T, U>(
  value: T
, ...operators: Array<(value: any) => unknown>
): U
```

#### pipeAsync
```ts
function pipeAsync<A, B, C, D, E, F, G, H>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  , (value: G) => Awaitable<H>
  ]
): Promise<H>
function pipeAsync<A, B, C, D, E, F, G>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  , (value: F) => Awaitable<G>
  ]
): Promise<G>
function pipeAsync<A, B, C, D, E, F>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  , (value: E) => Awaitable<F>
  ]
): Promise<F>
function pipeAsync<A, B, C, D, E>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  , (value: D) => Awaitable<E>
  ]
): Promise<E>
function pipeAsync<A, B, C, D>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  , (value: C) => Awaitable<D>
  ]
): Promise<D>
function pipeAsync<A, B, C>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  , (value: B) => Awaitable<C>
  ]
): Promise<C>
function pipeAsync<A, B>(
  value: Awaitable<A>
, ...operators: [
    (value: A) => Awaitable<B>
  ]
): Promise<B>
function pipeAsync<T, U>(
  value: Awaitable<T>
, ...operators: Array<(value: any) => Awaitable<unknown>>
): Promise<U>
```

#### Reducers
```ts
function max(result: number, current: number): number
function min(result: number, current: number): number
function sum(result: number, current: number): number
function product(result: number, current: number): number
```
