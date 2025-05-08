
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Occupation
 * 
 */
export type Occupation = $Result.DefaultSelection<Prisma.$OccupationPayload>
/**
 * Model Visa
 * 
 */
export type Visa = $Result.DefaultSelection<Prisma.$VisaPayload>
/**
 * Model AssessingAuthority
 * 
 */
export type AssessingAuthority = $Result.DefaultSelection<Prisma.$AssessingAuthorityPayload>
/**
 * Model AssessingAuthorityLink
 * 
 */
export type AssessingAuthorityLink = $Result.DefaultSelection<Prisma.$AssessingAuthorityLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Occupations
 * const occupations = await prisma.occupation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Occupations
   * const occupations = await prisma.occupation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.occupation`: Exposes CRUD operations for the **Occupation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occupations
    * const occupations = await prisma.occupation.findMany()
    * ```
    */
  get occupation(): Prisma.OccupationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visa`: Exposes CRUD operations for the **Visa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visas
    * const visas = await prisma.visa.findMany()
    * ```
    */
  get visa(): Prisma.VisaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessingAuthority`: Exposes CRUD operations for the **AssessingAuthority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessingAuthorities
    * const assessingAuthorities = await prisma.assessingAuthority.findMany()
    * ```
    */
  get assessingAuthority(): Prisma.AssessingAuthorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessingAuthorityLink`: Exposes CRUD operations for the **AssessingAuthorityLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessingAuthorityLinks
    * const assessingAuthorityLinks = await prisma.assessingAuthorityLink.findMany()
    * ```
    */
  get assessingAuthorityLink(): Prisma.AssessingAuthorityLinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Occupation: 'Occupation',
    Visa: 'Visa',
    AssessingAuthority: 'AssessingAuthority',
    AssessingAuthorityLink: 'AssessingAuthorityLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "occupation" | "visa" | "assessingAuthority" | "assessingAuthorityLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Occupation: {
        payload: Prisma.$OccupationPayload<ExtArgs>
        fields: Prisma.OccupationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccupationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccupationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          findFirst: {
            args: Prisma.OccupationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccupationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          findMany: {
            args: Prisma.OccupationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>[]
          }
          create: {
            args: Prisma.OccupationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          createMany: {
            args: Prisma.OccupationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OccupationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          update: {
            args: Prisma.OccupationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          deleteMany: {
            args: Prisma.OccupationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccupationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OccupationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccupationPayload>
          }
          aggregate: {
            args: Prisma.OccupationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccupation>
          }
          groupBy: {
            args: Prisma.OccupationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccupationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccupationCountArgs<ExtArgs>
            result: $Utils.Optional<OccupationCountAggregateOutputType> | number
          }
        }
      }
      Visa: {
        payload: Prisma.$VisaPayload<ExtArgs>
        fields: Prisma.VisaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          findFirst: {
            args: Prisma.VisaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          findMany: {
            args: Prisma.VisaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>[]
          }
          create: {
            args: Prisma.VisaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          createMany: {
            args: Prisma.VisaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          update: {
            args: Prisma.VisaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          deleteMany: {
            args: Prisma.VisaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisaPayload>
          }
          aggregate: {
            args: Prisma.VisaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisa>
          }
          groupBy: {
            args: Prisma.VisaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisaCountArgs<ExtArgs>
            result: $Utils.Optional<VisaCountAggregateOutputType> | number
          }
        }
      }
      AssessingAuthority: {
        payload: Prisma.$AssessingAuthorityPayload<ExtArgs>
        fields: Prisma.AssessingAuthorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessingAuthorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessingAuthorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          findFirst: {
            args: Prisma.AssessingAuthorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessingAuthorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          findMany: {
            args: Prisma.AssessingAuthorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>[]
          }
          create: {
            args: Prisma.AssessingAuthorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          createMany: {
            args: Prisma.AssessingAuthorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessingAuthorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          update: {
            args: Prisma.AssessingAuthorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          deleteMany: {
            args: Prisma.AssessingAuthorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessingAuthorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessingAuthorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityPayload>
          }
          aggregate: {
            args: Prisma.AssessingAuthorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessingAuthority>
          }
          groupBy: {
            args: Prisma.AssessingAuthorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessingAuthorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessingAuthorityCountArgs<ExtArgs>
            result: $Utils.Optional<AssessingAuthorityCountAggregateOutputType> | number
          }
        }
      }
      AssessingAuthorityLink: {
        payload: Prisma.$AssessingAuthorityLinkPayload<ExtArgs>
        fields: Prisma.AssessingAuthorityLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessingAuthorityLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessingAuthorityLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          findFirst: {
            args: Prisma.AssessingAuthorityLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessingAuthorityLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          findMany: {
            args: Prisma.AssessingAuthorityLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>[]
          }
          create: {
            args: Prisma.AssessingAuthorityLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          createMany: {
            args: Prisma.AssessingAuthorityLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessingAuthorityLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          update: {
            args: Prisma.AssessingAuthorityLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          deleteMany: {
            args: Prisma.AssessingAuthorityLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessingAuthorityLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessingAuthorityLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessingAuthorityLinkPayload>
          }
          aggregate: {
            args: Prisma.AssessingAuthorityLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessingAuthorityLink>
          }
          groupBy: {
            args: Prisma.AssessingAuthorityLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessingAuthorityLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessingAuthorityLinkCountArgs<ExtArgs>
            result: $Utils.Optional<AssessingAuthorityLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    occupation?: OccupationOmit
    visa?: VisaOmit
    assessingAuthority?: AssessingAuthorityOmit
    assessingAuthorityLink?: AssessingAuthorityLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OccupationCountOutputType
   */

  export type OccupationCountOutputType = {
    visas: number
    assessingAuthorities: number
  }

  export type OccupationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visas?: boolean | OccupationCountOutputTypeCountVisasArgs
    assessingAuthorities?: boolean | OccupationCountOutputTypeCountAssessingAuthoritiesArgs
  }

  // Custom InputTypes
  /**
   * OccupationCountOutputType without action
   */
  export type OccupationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccupationCountOutputType
     */
    select?: OccupationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccupationCountOutputType without action
   */
  export type OccupationCountOutputTypeCountVisasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaWhereInput
  }

  /**
   * OccupationCountOutputType without action
   */
  export type OccupationCountOutputTypeCountAssessingAuthoritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessingAuthorityWhereInput
  }


  /**
   * Count Type AssessingAuthorityCountOutputType
   */

  export type AssessingAuthorityCountOutputType = {
    assessingAuthorityLink: number
  }

  export type AssessingAuthorityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessingAuthorityLink?: boolean | AssessingAuthorityCountOutputTypeCountAssessingAuthorityLinkArgs
  }

  // Custom InputTypes
  /**
   * AssessingAuthorityCountOutputType without action
   */
  export type AssessingAuthorityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityCountOutputType
     */
    select?: AssessingAuthorityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessingAuthorityCountOutputType without action
   */
  export type AssessingAuthorityCountOutputTypeCountAssessingAuthorityLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessingAuthorityLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Occupation
   */

  export type AggregateOccupation = {
    _count: OccupationCountAggregateOutputType | null
    _avg: OccupationAvgAggregateOutputType | null
    _sum: OccupationSumAggregateOutputType | null
    _min: OccupationMinAggregateOutputType | null
    _max: OccupationMaxAggregateOutputType | null
  }

  export type OccupationAvgAggregateOutputType = {
    id: number | null
  }

  export type OccupationSumAggregateOutputType = {
    id: number | null
  }

  export type OccupationMinAggregateOutputType = {
    id: number | null
    occupation: string | null
    anzscoCode: string | null
    anzscoLink: string | null
    list: string | null
    state: string | null
  }

  export type OccupationMaxAggregateOutputType = {
    id: number | null
    occupation: string | null
    anzscoCode: string | null
    anzscoLink: string | null
    list: string | null
    state: string | null
  }

  export type OccupationCountAggregateOutputType = {
    id: number
    occupation: number
    anzscoCode: number
    anzscoLink: number
    list: number
    state: number
    _all: number
  }


  export type OccupationAvgAggregateInputType = {
    id?: true
  }

  export type OccupationSumAggregateInputType = {
    id?: true
  }

  export type OccupationMinAggregateInputType = {
    id?: true
    occupation?: true
    anzscoCode?: true
    anzscoLink?: true
    list?: true
    state?: true
  }

  export type OccupationMaxAggregateInputType = {
    id?: true
    occupation?: true
    anzscoCode?: true
    anzscoLink?: true
    list?: true
    state?: true
  }

  export type OccupationCountAggregateInputType = {
    id?: true
    occupation?: true
    anzscoCode?: true
    anzscoLink?: true
    list?: true
    state?: true
    _all?: true
  }

  export type OccupationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occupation to aggregate.
     */
    where?: OccupationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occupations to fetch.
     */
    orderBy?: OccupationOrderByWithRelationInput | OccupationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccupationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occupations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occupations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Occupations
    **/
    _count?: true | OccupationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccupationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccupationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccupationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccupationMaxAggregateInputType
  }

  export type GetOccupationAggregateType<T extends OccupationAggregateArgs> = {
        [P in keyof T & keyof AggregateOccupation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccupation[P]>
      : GetScalarType<T[P], AggregateOccupation[P]>
  }




  export type OccupationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccupationWhereInput
    orderBy?: OccupationOrderByWithAggregationInput | OccupationOrderByWithAggregationInput[]
    by: OccupationScalarFieldEnum[] | OccupationScalarFieldEnum
    having?: OccupationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccupationCountAggregateInputType | true
    _avg?: OccupationAvgAggregateInputType
    _sum?: OccupationSumAggregateInputType
    _min?: OccupationMinAggregateInputType
    _max?: OccupationMaxAggregateInputType
  }

  export type OccupationGroupByOutputType = {
    id: number
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state: string | null
    _count: OccupationCountAggregateOutputType | null
    _avg: OccupationAvgAggregateOutputType | null
    _sum: OccupationSumAggregateOutputType | null
    _min: OccupationMinAggregateOutputType | null
    _max: OccupationMaxAggregateOutputType | null
  }

  type GetOccupationGroupByPayload<T extends OccupationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccupationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccupationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccupationGroupByOutputType[P]>
            : GetScalarType<T[P], OccupationGroupByOutputType[P]>
        }
      >
    >


  export type OccupationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    occupation?: boolean
    anzscoCode?: boolean
    anzscoLink?: boolean
    list?: boolean
    state?: boolean
    visas?: boolean | Occupation$visasArgs<ExtArgs>
    assessingAuthorities?: boolean | Occupation$assessingAuthoritiesArgs<ExtArgs>
    _count?: boolean | OccupationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occupation"]>



  export type OccupationSelectScalar = {
    id?: boolean
    occupation?: boolean
    anzscoCode?: boolean
    anzscoLink?: boolean
    list?: boolean
    state?: boolean
  }

  export type OccupationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "occupation" | "anzscoCode" | "anzscoLink" | "list" | "state", ExtArgs["result"]["occupation"]>
  export type OccupationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visas?: boolean | Occupation$visasArgs<ExtArgs>
    assessingAuthorities?: boolean | Occupation$assessingAuthoritiesArgs<ExtArgs>
    _count?: boolean | OccupationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OccupationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Occupation"
    objects: {
      visas: Prisma.$VisaPayload<ExtArgs>[]
      assessingAuthorities: Prisma.$AssessingAuthorityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      occupation: string
      anzscoCode: string
      anzscoLink: string
      list: string
      state: string | null
    }, ExtArgs["result"]["occupation"]>
    composites: {}
  }

  type OccupationGetPayload<S extends boolean | null | undefined | OccupationDefaultArgs> = $Result.GetResult<Prisma.$OccupationPayload, S>

  type OccupationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccupationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccupationCountAggregateInputType | true
    }

  export interface OccupationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Occupation'], meta: { name: 'Occupation' } }
    /**
     * Find zero or one Occupation that matches the filter.
     * @param {OccupationFindUniqueArgs} args - Arguments to find a Occupation
     * @example
     * // Get one Occupation
     * const occupation = await prisma.occupation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccupationFindUniqueArgs>(args: SelectSubset<T, OccupationFindUniqueArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Occupation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccupationFindUniqueOrThrowArgs} args - Arguments to find a Occupation
     * @example
     * // Get one Occupation
     * const occupation = await prisma.occupation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccupationFindUniqueOrThrowArgs>(args: SelectSubset<T, OccupationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occupation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationFindFirstArgs} args - Arguments to find a Occupation
     * @example
     * // Get one Occupation
     * const occupation = await prisma.occupation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccupationFindFirstArgs>(args?: SelectSubset<T, OccupationFindFirstArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occupation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationFindFirstOrThrowArgs} args - Arguments to find a Occupation
     * @example
     * // Get one Occupation
     * const occupation = await prisma.occupation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccupationFindFirstOrThrowArgs>(args?: SelectSubset<T, OccupationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Occupations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occupations
     * const occupations = await prisma.occupation.findMany()
     * 
     * // Get first 10 Occupations
     * const occupations = await prisma.occupation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occupationWithIdOnly = await prisma.occupation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccupationFindManyArgs>(args?: SelectSubset<T, OccupationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Occupation.
     * @param {OccupationCreateArgs} args - Arguments to create a Occupation.
     * @example
     * // Create one Occupation
     * const Occupation = await prisma.occupation.create({
     *   data: {
     *     // ... data to create a Occupation
     *   }
     * })
     * 
     */
    create<T extends OccupationCreateArgs>(args: SelectSubset<T, OccupationCreateArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Occupations.
     * @param {OccupationCreateManyArgs} args - Arguments to create many Occupations.
     * @example
     * // Create many Occupations
     * const occupation = await prisma.occupation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccupationCreateManyArgs>(args?: SelectSubset<T, OccupationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Occupation.
     * @param {OccupationDeleteArgs} args - Arguments to delete one Occupation.
     * @example
     * // Delete one Occupation
     * const Occupation = await prisma.occupation.delete({
     *   where: {
     *     // ... filter to delete one Occupation
     *   }
     * })
     * 
     */
    delete<T extends OccupationDeleteArgs>(args: SelectSubset<T, OccupationDeleteArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Occupation.
     * @param {OccupationUpdateArgs} args - Arguments to update one Occupation.
     * @example
     * // Update one Occupation
     * const occupation = await prisma.occupation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccupationUpdateArgs>(args: SelectSubset<T, OccupationUpdateArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Occupations.
     * @param {OccupationDeleteManyArgs} args - Arguments to filter Occupations to delete.
     * @example
     * // Delete a few Occupations
     * const { count } = await prisma.occupation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccupationDeleteManyArgs>(args?: SelectSubset<T, OccupationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occupations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occupations
     * const occupation = await prisma.occupation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccupationUpdateManyArgs>(args: SelectSubset<T, OccupationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Occupation.
     * @param {OccupationUpsertArgs} args - Arguments to update or create a Occupation.
     * @example
     * // Update or create a Occupation
     * const occupation = await prisma.occupation.upsert({
     *   create: {
     *     // ... data to create a Occupation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occupation we want to update
     *   }
     * })
     */
    upsert<T extends OccupationUpsertArgs>(args: SelectSubset<T, OccupationUpsertArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Occupations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationCountArgs} args - Arguments to filter Occupations to count.
     * @example
     * // Count the number of Occupations
     * const count = await prisma.occupation.count({
     *   where: {
     *     // ... the filter for the Occupations we want to count
     *   }
     * })
    **/
    count<T extends OccupationCountArgs>(
      args?: Subset<T, OccupationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccupationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occupation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OccupationAggregateArgs>(args: Subset<T, OccupationAggregateArgs>): Prisma.PrismaPromise<GetOccupationAggregateType<T>>

    /**
     * Group by Occupation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccupationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OccupationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccupationGroupByArgs['orderBy'] }
        : { orderBy?: OccupationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OccupationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccupationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Occupation model
   */
  readonly fields: OccupationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Occupation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccupationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visas<T extends Occupation$visasArgs<ExtArgs> = {}>(args?: Subset<T, Occupation$visasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessingAuthorities<T extends Occupation$assessingAuthoritiesArgs<ExtArgs> = {}>(args?: Subset<T, Occupation$assessingAuthoritiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Occupation model
   */
  interface OccupationFieldRefs {
    readonly id: FieldRef<"Occupation", 'Int'>
    readonly occupation: FieldRef<"Occupation", 'String'>
    readonly anzscoCode: FieldRef<"Occupation", 'String'>
    readonly anzscoLink: FieldRef<"Occupation", 'String'>
    readonly list: FieldRef<"Occupation", 'String'>
    readonly state: FieldRef<"Occupation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Occupation findUnique
   */
  export type OccupationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter, which Occupation to fetch.
     */
    where: OccupationWhereUniqueInput
  }

  /**
   * Occupation findUniqueOrThrow
   */
  export type OccupationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter, which Occupation to fetch.
     */
    where: OccupationWhereUniqueInput
  }

  /**
   * Occupation findFirst
   */
  export type OccupationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter, which Occupation to fetch.
     */
    where?: OccupationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occupations to fetch.
     */
    orderBy?: OccupationOrderByWithRelationInput | OccupationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occupations.
     */
    cursor?: OccupationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occupations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occupations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occupations.
     */
    distinct?: OccupationScalarFieldEnum | OccupationScalarFieldEnum[]
  }

  /**
   * Occupation findFirstOrThrow
   */
  export type OccupationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter, which Occupation to fetch.
     */
    where?: OccupationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occupations to fetch.
     */
    orderBy?: OccupationOrderByWithRelationInput | OccupationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occupations.
     */
    cursor?: OccupationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occupations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occupations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occupations.
     */
    distinct?: OccupationScalarFieldEnum | OccupationScalarFieldEnum[]
  }

  /**
   * Occupation findMany
   */
  export type OccupationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter, which Occupations to fetch.
     */
    where?: OccupationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occupations to fetch.
     */
    orderBy?: OccupationOrderByWithRelationInput | OccupationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Occupations.
     */
    cursor?: OccupationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occupations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occupations.
     */
    skip?: number
    distinct?: OccupationScalarFieldEnum | OccupationScalarFieldEnum[]
  }

  /**
   * Occupation create
   */
  export type OccupationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * The data needed to create a Occupation.
     */
    data: XOR<OccupationCreateInput, OccupationUncheckedCreateInput>
  }

  /**
   * Occupation createMany
   */
  export type OccupationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Occupations.
     */
    data: OccupationCreateManyInput | OccupationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Occupation update
   */
  export type OccupationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * The data needed to update a Occupation.
     */
    data: XOR<OccupationUpdateInput, OccupationUncheckedUpdateInput>
    /**
     * Choose, which Occupation to update.
     */
    where: OccupationWhereUniqueInput
  }

  /**
   * Occupation updateMany
   */
  export type OccupationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Occupations.
     */
    data: XOR<OccupationUpdateManyMutationInput, OccupationUncheckedUpdateManyInput>
    /**
     * Filter which Occupations to update
     */
    where?: OccupationWhereInput
    /**
     * Limit how many Occupations to update.
     */
    limit?: number
  }

  /**
   * Occupation upsert
   */
  export type OccupationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * The filter to search for the Occupation to update in case it exists.
     */
    where: OccupationWhereUniqueInput
    /**
     * In case the Occupation found by the `where` argument doesn't exist, create a new Occupation with this data.
     */
    create: XOR<OccupationCreateInput, OccupationUncheckedCreateInput>
    /**
     * In case the Occupation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccupationUpdateInput, OccupationUncheckedUpdateInput>
  }

  /**
   * Occupation delete
   */
  export type OccupationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
    /**
     * Filter which Occupation to delete.
     */
    where: OccupationWhereUniqueInput
  }

  /**
   * Occupation deleteMany
   */
  export type OccupationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occupations to delete
     */
    where?: OccupationWhereInput
    /**
     * Limit how many Occupations to delete.
     */
    limit?: number
  }

  /**
   * Occupation.visas
   */
  export type Occupation$visasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    where?: VisaWhereInput
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    cursor?: VisaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Occupation.assessingAuthorities
   */
  export type Occupation$assessingAuthoritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    where?: AssessingAuthorityWhereInput
    orderBy?: AssessingAuthorityOrderByWithRelationInput | AssessingAuthorityOrderByWithRelationInput[]
    cursor?: AssessingAuthorityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessingAuthorityScalarFieldEnum | AssessingAuthorityScalarFieldEnum[]
  }

  /**
   * Occupation without action
   */
  export type OccupationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occupation
     */
    select?: OccupationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occupation
     */
    omit?: OccupationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccupationInclude<ExtArgs> | null
  }


  /**
   * Model Visa
   */

  export type AggregateVisa = {
    _count: VisaCountAggregateOutputType | null
    _avg: VisaAvgAggregateOutputType | null
    _sum: VisaSumAggregateOutputType | null
    _min: VisaMinAggregateOutputType | null
    _max: VisaMaxAggregateOutputType | null
  }

  export type VisaAvgAggregateOutputType = {
    id: number | null
    occupationId: number | null
  }

  export type VisaSumAggregateOutputType = {
    id: number | null
    occupationId: number | null
  }

  export type VisaMinAggregateOutputType = {
    id: number | null
    visaName: string | null
    occupationId: number | null
  }

  export type VisaMaxAggregateOutputType = {
    id: number | null
    visaName: string | null
    occupationId: number | null
  }

  export type VisaCountAggregateOutputType = {
    id: number
    visaName: number
    occupationId: number
    _all: number
  }


  export type VisaAvgAggregateInputType = {
    id?: true
    occupationId?: true
  }

  export type VisaSumAggregateInputType = {
    id?: true
    occupationId?: true
  }

  export type VisaMinAggregateInputType = {
    id?: true
    visaName?: true
    occupationId?: true
  }

  export type VisaMaxAggregateInputType = {
    id?: true
    visaName?: true
    occupationId?: true
  }

  export type VisaCountAggregateInputType = {
    id?: true
    visaName?: true
    occupationId?: true
    _all?: true
  }

  export type VisaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visa to aggregate.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visas
    **/
    _count?: true | VisaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisaMaxAggregateInputType
  }

  export type GetVisaAggregateType<T extends VisaAggregateArgs> = {
        [P in keyof T & keyof AggregateVisa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisa[P]>
      : GetScalarType<T[P], AggregateVisa[P]>
  }




  export type VisaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisaWhereInput
    orderBy?: VisaOrderByWithAggregationInput | VisaOrderByWithAggregationInput[]
    by: VisaScalarFieldEnum[] | VisaScalarFieldEnum
    having?: VisaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisaCountAggregateInputType | true
    _avg?: VisaAvgAggregateInputType
    _sum?: VisaSumAggregateInputType
    _min?: VisaMinAggregateInputType
    _max?: VisaMaxAggregateInputType
  }

  export type VisaGroupByOutputType = {
    id: number
    visaName: string
    occupationId: number
    _count: VisaCountAggregateOutputType | null
    _avg: VisaAvgAggregateOutputType | null
    _sum: VisaSumAggregateOutputType | null
    _min: VisaMinAggregateOutputType | null
    _max: VisaMaxAggregateOutputType | null
  }

  type GetVisaGroupByPayload<T extends VisaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisaGroupByOutputType[P]>
            : GetScalarType<T[P], VisaGroupByOutputType[P]>
        }
      >
    >


  export type VisaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visaName?: boolean
    occupationId?: boolean
    occupation?: boolean | OccupationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visa"]>



  export type VisaSelectScalar = {
    id?: boolean
    visaName?: boolean
    occupationId?: boolean
  }

  export type VisaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visaName" | "occupationId", ExtArgs["result"]["visa"]>
  export type VisaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occupation?: boolean | OccupationDefaultArgs<ExtArgs>
  }

  export type $VisaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visa"
    objects: {
      occupation: Prisma.$OccupationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visaName: string
      occupationId: number
    }, ExtArgs["result"]["visa"]>
    composites: {}
  }

  type VisaGetPayload<S extends boolean | null | undefined | VisaDefaultArgs> = $Result.GetResult<Prisma.$VisaPayload, S>

  type VisaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisaCountAggregateInputType | true
    }

  export interface VisaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visa'], meta: { name: 'Visa' } }
    /**
     * Find zero or one Visa that matches the filter.
     * @param {VisaFindUniqueArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisaFindUniqueArgs>(args: SelectSubset<T, VisaFindUniqueArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisaFindUniqueOrThrowArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisaFindUniqueOrThrowArgs>(args: SelectSubset<T, VisaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindFirstArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisaFindFirstArgs>(args?: SelectSubset<T, VisaFindFirstArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindFirstOrThrowArgs} args - Arguments to find a Visa
     * @example
     * // Get one Visa
     * const visa = await prisma.visa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisaFindFirstOrThrowArgs>(args?: SelectSubset<T, VisaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visas
     * const visas = await prisma.visa.findMany()
     * 
     * // Get first 10 Visas
     * const visas = await prisma.visa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visaWithIdOnly = await prisma.visa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisaFindManyArgs>(args?: SelectSubset<T, VisaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visa.
     * @param {VisaCreateArgs} args - Arguments to create a Visa.
     * @example
     * // Create one Visa
     * const Visa = await prisma.visa.create({
     *   data: {
     *     // ... data to create a Visa
     *   }
     * })
     * 
     */
    create<T extends VisaCreateArgs>(args: SelectSubset<T, VisaCreateArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visas.
     * @param {VisaCreateManyArgs} args - Arguments to create many Visas.
     * @example
     * // Create many Visas
     * const visa = await prisma.visa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisaCreateManyArgs>(args?: SelectSubset<T, VisaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visa.
     * @param {VisaDeleteArgs} args - Arguments to delete one Visa.
     * @example
     * // Delete one Visa
     * const Visa = await prisma.visa.delete({
     *   where: {
     *     // ... filter to delete one Visa
     *   }
     * })
     * 
     */
    delete<T extends VisaDeleteArgs>(args: SelectSubset<T, VisaDeleteArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visa.
     * @param {VisaUpdateArgs} args - Arguments to update one Visa.
     * @example
     * // Update one Visa
     * const visa = await prisma.visa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisaUpdateArgs>(args: SelectSubset<T, VisaUpdateArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visas.
     * @param {VisaDeleteManyArgs} args - Arguments to filter Visas to delete.
     * @example
     * // Delete a few Visas
     * const { count } = await prisma.visa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisaDeleteManyArgs>(args?: SelectSubset<T, VisaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visas
     * const visa = await prisma.visa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisaUpdateManyArgs>(args: SelectSubset<T, VisaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visa.
     * @param {VisaUpsertArgs} args - Arguments to update or create a Visa.
     * @example
     * // Update or create a Visa
     * const visa = await prisma.visa.upsert({
     *   create: {
     *     // ... data to create a Visa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visa we want to update
     *   }
     * })
     */
    upsert<T extends VisaUpsertArgs>(args: SelectSubset<T, VisaUpsertArgs<ExtArgs>>): Prisma__VisaClient<$Result.GetResult<Prisma.$VisaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaCountArgs} args - Arguments to filter Visas to count.
     * @example
     * // Count the number of Visas
     * const count = await prisma.visa.count({
     *   where: {
     *     // ... the filter for the Visas we want to count
     *   }
     * })
    **/
    count<T extends VisaCountArgs>(
      args?: Subset<T, VisaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisaAggregateArgs>(args: Subset<T, VisaAggregateArgs>): Prisma.PrismaPromise<GetVisaAggregateType<T>>

    /**
     * Group by Visa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisaGroupByArgs['orderBy'] }
        : { orderBy?: VisaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visa model
   */
  readonly fields: VisaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    occupation<T extends OccupationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccupationDefaultArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Visa model
   */
  interface VisaFieldRefs {
    readonly id: FieldRef<"Visa", 'Int'>
    readonly visaName: FieldRef<"Visa", 'String'>
    readonly occupationId: FieldRef<"Visa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Visa findUnique
   */
  export type VisaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa findUniqueOrThrow
   */
  export type VisaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa findFirst
   */
  export type VisaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visas.
     */
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa findFirstOrThrow
   */
  export type VisaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visa to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visas.
     */
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa findMany
   */
  export type VisaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter, which Visas to fetch.
     */
    where?: VisaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visas to fetch.
     */
    orderBy?: VisaOrderByWithRelationInput | VisaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visas.
     */
    cursor?: VisaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visas.
     */
    skip?: number
    distinct?: VisaScalarFieldEnum | VisaScalarFieldEnum[]
  }

  /**
   * Visa create
   */
  export type VisaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The data needed to create a Visa.
     */
    data: XOR<VisaCreateInput, VisaUncheckedCreateInput>
  }

  /**
   * Visa createMany
   */
  export type VisaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visas.
     */
    data: VisaCreateManyInput | VisaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visa update
   */
  export type VisaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The data needed to update a Visa.
     */
    data: XOR<VisaUpdateInput, VisaUncheckedUpdateInput>
    /**
     * Choose, which Visa to update.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa updateMany
   */
  export type VisaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visas.
     */
    data: XOR<VisaUpdateManyMutationInput, VisaUncheckedUpdateManyInput>
    /**
     * Filter which Visas to update
     */
    where?: VisaWhereInput
    /**
     * Limit how many Visas to update.
     */
    limit?: number
  }

  /**
   * Visa upsert
   */
  export type VisaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * The filter to search for the Visa to update in case it exists.
     */
    where: VisaWhereUniqueInput
    /**
     * In case the Visa found by the `where` argument doesn't exist, create a new Visa with this data.
     */
    create: XOR<VisaCreateInput, VisaUncheckedCreateInput>
    /**
     * In case the Visa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisaUpdateInput, VisaUncheckedUpdateInput>
  }

  /**
   * Visa delete
   */
  export type VisaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
    /**
     * Filter which Visa to delete.
     */
    where: VisaWhereUniqueInput
  }

  /**
   * Visa deleteMany
   */
  export type VisaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visas to delete
     */
    where?: VisaWhereInput
    /**
     * Limit how many Visas to delete.
     */
    limit?: number
  }

  /**
   * Visa without action
   */
  export type VisaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visa
     */
    select?: VisaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visa
     */
    omit?: VisaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisaInclude<ExtArgs> | null
  }


  /**
   * Model AssessingAuthority
   */

  export type AggregateAssessingAuthority = {
    _count: AssessingAuthorityCountAggregateOutputType | null
    _avg: AssessingAuthorityAvgAggregateOutputType | null
    _sum: AssessingAuthoritySumAggregateOutputType | null
    _min: AssessingAuthorityMinAggregateOutputType | null
    _max: AssessingAuthorityMaxAggregateOutputType | null
  }

  export type AssessingAuthorityAvgAggregateOutputType = {
    id: number | null
    occupationId: number | null
  }

  export type AssessingAuthoritySumAggregateOutputType = {
    id: number | null
    occupationId: number | null
  }

  export type AssessingAuthorityMinAggregateOutputType = {
    id: number | null
    name: string | null
    occupationId: number | null
  }

  export type AssessingAuthorityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    occupationId: number | null
  }

  export type AssessingAuthorityCountAggregateOutputType = {
    id: number
    name: number
    occupationId: number
    _all: number
  }


  export type AssessingAuthorityAvgAggregateInputType = {
    id?: true
    occupationId?: true
  }

  export type AssessingAuthoritySumAggregateInputType = {
    id?: true
    occupationId?: true
  }

  export type AssessingAuthorityMinAggregateInputType = {
    id?: true
    name?: true
    occupationId?: true
  }

  export type AssessingAuthorityMaxAggregateInputType = {
    id?: true
    name?: true
    occupationId?: true
  }

  export type AssessingAuthorityCountAggregateInputType = {
    id?: true
    name?: true
    occupationId?: true
    _all?: true
  }

  export type AssessingAuthorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessingAuthority to aggregate.
     */
    where?: AssessingAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorities to fetch.
     */
    orderBy?: AssessingAuthorityOrderByWithRelationInput | AssessingAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessingAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessingAuthorities
    **/
    _count?: true | AssessingAuthorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessingAuthorityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessingAuthoritySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessingAuthorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessingAuthorityMaxAggregateInputType
  }

  export type GetAssessingAuthorityAggregateType<T extends AssessingAuthorityAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessingAuthority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessingAuthority[P]>
      : GetScalarType<T[P], AggregateAssessingAuthority[P]>
  }




  export type AssessingAuthorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessingAuthorityWhereInput
    orderBy?: AssessingAuthorityOrderByWithAggregationInput | AssessingAuthorityOrderByWithAggregationInput[]
    by: AssessingAuthorityScalarFieldEnum[] | AssessingAuthorityScalarFieldEnum
    having?: AssessingAuthorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessingAuthorityCountAggregateInputType | true
    _avg?: AssessingAuthorityAvgAggregateInputType
    _sum?: AssessingAuthoritySumAggregateInputType
    _min?: AssessingAuthorityMinAggregateInputType
    _max?: AssessingAuthorityMaxAggregateInputType
  }

  export type AssessingAuthorityGroupByOutputType = {
    id: number
    name: string
    occupationId: number
    _count: AssessingAuthorityCountAggregateOutputType | null
    _avg: AssessingAuthorityAvgAggregateOutputType | null
    _sum: AssessingAuthoritySumAggregateOutputType | null
    _min: AssessingAuthorityMinAggregateOutputType | null
    _max: AssessingAuthorityMaxAggregateOutputType | null
  }

  type GetAssessingAuthorityGroupByPayload<T extends AssessingAuthorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessingAuthorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessingAuthorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessingAuthorityGroupByOutputType[P]>
            : GetScalarType<T[P], AssessingAuthorityGroupByOutputType[P]>
        }
      >
    >


  export type AssessingAuthoritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    occupationId?: boolean
    occupation?: boolean | OccupationDefaultArgs<ExtArgs>
    assessingAuthorityLink?: boolean | AssessingAuthority$assessingAuthorityLinkArgs<ExtArgs>
    _count?: boolean | AssessingAuthorityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessingAuthority"]>



  export type AssessingAuthoritySelectScalar = {
    id?: boolean
    name?: boolean
    occupationId?: boolean
  }

  export type AssessingAuthorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "occupationId", ExtArgs["result"]["assessingAuthority"]>
  export type AssessingAuthorityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occupation?: boolean | OccupationDefaultArgs<ExtArgs>
    assessingAuthorityLink?: boolean | AssessingAuthority$assessingAuthorityLinkArgs<ExtArgs>
    _count?: boolean | AssessingAuthorityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessingAuthorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessingAuthority"
    objects: {
      occupation: Prisma.$OccupationPayload<ExtArgs>
      assessingAuthorityLink: Prisma.$AssessingAuthorityLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      occupationId: number
    }, ExtArgs["result"]["assessingAuthority"]>
    composites: {}
  }

  type AssessingAuthorityGetPayload<S extends boolean | null | undefined | AssessingAuthorityDefaultArgs> = $Result.GetResult<Prisma.$AssessingAuthorityPayload, S>

  type AssessingAuthorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessingAuthorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessingAuthorityCountAggregateInputType | true
    }

  export interface AssessingAuthorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessingAuthority'], meta: { name: 'AssessingAuthority' } }
    /**
     * Find zero or one AssessingAuthority that matches the filter.
     * @param {AssessingAuthorityFindUniqueArgs} args - Arguments to find a AssessingAuthority
     * @example
     * // Get one AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessingAuthorityFindUniqueArgs>(args: SelectSubset<T, AssessingAuthorityFindUniqueArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessingAuthority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessingAuthorityFindUniqueOrThrowArgs} args - Arguments to find a AssessingAuthority
     * @example
     * // Get one AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessingAuthorityFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessingAuthorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessingAuthority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityFindFirstArgs} args - Arguments to find a AssessingAuthority
     * @example
     * // Get one AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessingAuthorityFindFirstArgs>(args?: SelectSubset<T, AssessingAuthorityFindFirstArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessingAuthority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityFindFirstOrThrowArgs} args - Arguments to find a AssessingAuthority
     * @example
     * // Get one AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessingAuthorityFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessingAuthorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessingAuthorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessingAuthorities
     * const assessingAuthorities = await prisma.assessingAuthority.findMany()
     * 
     * // Get first 10 AssessingAuthorities
     * const assessingAuthorities = await prisma.assessingAuthority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessingAuthorityWithIdOnly = await prisma.assessingAuthority.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessingAuthorityFindManyArgs>(args?: SelectSubset<T, AssessingAuthorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessingAuthority.
     * @param {AssessingAuthorityCreateArgs} args - Arguments to create a AssessingAuthority.
     * @example
     * // Create one AssessingAuthority
     * const AssessingAuthority = await prisma.assessingAuthority.create({
     *   data: {
     *     // ... data to create a AssessingAuthority
     *   }
     * })
     * 
     */
    create<T extends AssessingAuthorityCreateArgs>(args: SelectSubset<T, AssessingAuthorityCreateArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessingAuthorities.
     * @param {AssessingAuthorityCreateManyArgs} args - Arguments to create many AssessingAuthorities.
     * @example
     * // Create many AssessingAuthorities
     * const assessingAuthority = await prisma.assessingAuthority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessingAuthorityCreateManyArgs>(args?: SelectSubset<T, AssessingAuthorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessingAuthority.
     * @param {AssessingAuthorityDeleteArgs} args - Arguments to delete one AssessingAuthority.
     * @example
     * // Delete one AssessingAuthority
     * const AssessingAuthority = await prisma.assessingAuthority.delete({
     *   where: {
     *     // ... filter to delete one AssessingAuthority
     *   }
     * })
     * 
     */
    delete<T extends AssessingAuthorityDeleteArgs>(args: SelectSubset<T, AssessingAuthorityDeleteArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessingAuthority.
     * @param {AssessingAuthorityUpdateArgs} args - Arguments to update one AssessingAuthority.
     * @example
     * // Update one AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessingAuthorityUpdateArgs>(args: SelectSubset<T, AssessingAuthorityUpdateArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessingAuthorities.
     * @param {AssessingAuthorityDeleteManyArgs} args - Arguments to filter AssessingAuthorities to delete.
     * @example
     * // Delete a few AssessingAuthorities
     * const { count } = await prisma.assessingAuthority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessingAuthorityDeleteManyArgs>(args?: SelectSubset<T, AssessingAuthorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessingAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessingAuthorities
     * const assessingAuthority = await prisma.assessingAuthority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessingAuthorityUpdateManyArgs>(args: SelectSubset<T, AssessingAuthorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessingAuthority.
     * @param {AssessingAuthorityUpsertArgs} args - Arguments to update or create a AssessingAuthority.
     * @example
     * // Update or create a AssessingAuthority
     * const assessingAuthority = await prisma.assessingAuthority.upsert({
     *   create: {
     *     // ... data to create a AssessingAuthority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessingAuthority we want to update
     *   }
     * })
     */
    upsert<T extends AssessingAuthorityUpsertArgs>(args: SelectSubset<T, AssessingAuthorityUpsertArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessingAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityCountArgs} args - Arguments to filter AssessingAuthorities to count.
     * @example
     * // Count the number of AssessingAuthorities
     * const count = await prisma.assessingAuthority.count({
     *   where: {
     *     // ... the filter for the AssessingAuthorities we want to count
     *   }
     * })
    **/
    count<T extends AssessingAuthorityCountArgs>(
      args?: Subset<T, AssessingAuthorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessingAuthorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessingAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessingAuthorityAggregateArgs>(args: Subset<T, AssessingAuthorityAggregateArgs>): Prisma.PrismaPromise<GetAssessingAuthorityAggregateType<T>>

    /**
     * Group by AssessingAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessingAuthorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessingAuthorityGroupByArgs['orderBy'] }
        : { orderBy?: AssessingAuthorityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessingAuthorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessingAuthorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessingAuthority model
   */
  readonly fields: AssessingAuthorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessingAuthority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessingAuthorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    occupation<T extends OccupationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OccupationDefaultArgs<ExtArgs>>): Prisma__OccupationClient<$Result.GetResult<Prisma.$OccupationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assessingAuthorityLink<T extends AssessingAuthority$assessingAuthorityLinkArgs<ExtArgs> = {}>(args?: Subset<T, AssessingAuthority$assessingAuthorityLinkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessingAuthority model
   */
  interface AssessingAuthorityFieldRefs {
    readonly id: FieldRef<"AssessingAuthority", 'Int'>
    readonly name: FieldRef<"AssessingAuthority", 'String'>
    readonly occupationId: FieldRef<"AssessingAuthority", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssessingAuthority findUnique
   */
  export type AssessingAuthorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthority to fetch.
     */
    where: AssessingAuthorityWhereUniqueInput
  }

  /**
   * AssessingAuthority findUniqueOrThrow
   */
  export type AssessingAuthorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthority to fetch.
     */
    where: AssessingAuthorityWhereUniqueInput
  }

  /**
   * AssessingAuthority findFirst
   */
  export type AssessingAuthorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthority to fetch.
     */
    where?: AssessingAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorities to fetch.
     */
    orderBy?: AssessingAuthorityOrderByWithRelationInput | AssessingAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessingAuthorities.
     */
    cursor?: AssessingAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessingAuthorities.
     */
    distinct?: AssessingAuthorityScalarFieldEnum | AssessingAuthorityScalarFieldEnum[]
  }

  /**
   * AssessingAuthority findFirstOrThrow
   */
  export type AssessingAuthorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthority to fetch.
     */
    where?: AssessingAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorities to fetch.
     */
    orderBy?: AssessingAuthorityOrderByWithRelationInput | AssessingAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessingAuthorities.
     */
    cursor?: AssessingAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessingAuthorities.
     */
    distinct?: AssessingAuthorityScalarFieldEnum | AssessingAuthorityScalarFieldEnum[]
  }

  /**
   * AssessingAuthority findMany
   */
  export type AssessingAuthorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorities to fetch.
     */
    where?: AssessingAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorities to fetch.
     */
    orderBy?: AssessingAuthorityOrderByWithRelationInput | AssessingAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessingAuthorities.
     */
    cursor?: AssessingAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorities.
     */
    skip?: number
    distinct?: AssessingAuthorityScalarFieldEnum | AssessingAuthorityScalarFieldEnum[]
  }

  /**
   * AssessingAuthority create
   */
  export type AssessingAuthorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessingAuthority.
     */
    data: XOR<AssessingAuthorityCreateInput, AssessingAuthorityUncheckedCreateInput>
  }

  /**
   * AssessingAuthority createMany
   */
  export type AssessingAuthorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessingAuthorities.
     */
    data: AssessingAuthorityCreateManyInput | AssessingAuthorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessingAuthority update
   */
  export type AssessingAuthorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessingAuthority.
     */
    data: XOR<AssessingAuthorityUpdateInput, AssessingAuthorityUncheckedUpdateInput>
    /**
     * Choose, which AssessingAuthority to update.
     */
    where: AssessingAuthorityWhereUniqueInput
  }

  /**
   * AssessingAuthority updateMany
   */
  export type AssessingAuthorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessingAuthorities.
     */
    data: XOR<AssessingAuthorityUpdateManyMutationInput, AssessingAuthorityUncheckedUpdateManyInput>
    /**
     * Filter which AssessingAuthorities to update
     */
    where?: AssessingAuthorityWhereInput
    /**
     * Limit how many AssessingAuthorities to update.
     */
    limit?: number
  }

  /**
   * AssessingAuthority upsert
   */
  export type AssessingAuthorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessingAuthority to update in case it exists.
     */
    where: AssessingAuthorityWhereUniqueInput
    /**
     * In case the AssessingAuthority found by the `where` argument doesn't exist, create a new AssessingAuthority with this data.
     */
    create: XOR<AssessingAuthorityCreateInput, AssessingAuthorityUncheckedCreateInput>
    /**
     * In case the AssessingAuthority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessingAuthorityUpdateInput, AssessingAuthorityUncheckedUpdateInput>
  }

  /**
   * AssessingAuthority delete
   */
  export type AssessingAuthorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
    /**
     * Filter which AssessingAuthority to delete.
     */
    where: AssessingAuthorityWhereUniqueInput
  }

  /**
   * AssessingAuthority deleteMany
   */
  export type AssessingAuthorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessingAuthorities to delete
     */
    where?: AssessingAuthorityWhereInput
    /**
     * Limit how many AssessingAuthorities to delete.
     */
    limit?: number
  }

  /**
   * AssessingAuthority.assessingAuthorityLink
   */
  export type AssessingAuthority$assessingAuthorityLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    where?: AssessingAuthorityLinkWhereInput
    orderBy?: AssessingAuthorityLinkOrderByWithRelationInput | AssessingAuthorityLinkOrderByWithRelationInput[]
    cursor?: AssessingAuthorityLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessingAuthorityLinkScalarFieldEnum | AssessingAuthorityLinkScalarFieldEnum[]
  }

  /**
   * AssessingAuthority without action
   */
  export type AssessingAuthorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthority
     */
    select?: AssessingAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthority
     */
    omit?: AssessingAuthorityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityInclude<ExtArgs> | null
  }


  /**
   * Model AssessingAuthorityLink
   */

  export type AggregateAssessingAuthorityLink = {
    _count: AssessingAuthorityLinkCountAggregateOutputType | null
    _avg: AssessingAuthorityLinkAvgAggregateOutputType | null
    _sum: AssessingAuthorityLinkSumAggregateOutputType | null
    _min: AssessingAuthorityLinkMinAggregateOutputType | null
    _max: AssessingAuthorityLinkMaxAggregateOutputType | null
  }

  export type AssessingAuthorityLinkAvgAggregateOutputType = {
    id: number | null
    assessingAuthorityId: number | null
  }

  export type AssessingAuthorityLinkSumAggregateOutputType = {
    id: number | null
    assessingAuthorityId: number | null
  }

  export type AssessingAuthorityLinkMinAggregateOutputType = {
    id: number | null
    link: string | null
    assessingAuthorityId: number | null
  }

  export type AssessingAuthorityLinkMaxAggregateOutputType = {
    id: number | null
    link: string | null
    assessingAuthorityId: number | null
  }

  export type AssessingAuthorityLinkCountAggregateOutputType = {
    id: number
    link: number
    assessingAuthorityId: number
    _all: number
  }


  export type AssessingAuthorityLinkAvgAggregateInputType = {
    id?: true
    assessingAuthorityId?: true
  }

  export type AssessingAuthorityLinkSumAggregateInputType = {
    id?: true
    assessingAuthorityId?: true
  }

  export type AssessingAuthorityLinkMinAggregateInputType = {
    id?: true
    link?: true
    assessingAuthorityId?: true
  }

  export type AssessingAuthorityLinkMaxAggregateInputType = {
    id?: true
    link?: true
    assessingAuthorityId?: true
  }

  export type AssessingAuthorityLinkCountAggregateInputType = {
    id?: true
    link?: true
    assessingAuthorityId?: true
    _all?: true
  }

  export type AssessingAuthorityLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessingAuthorityLink to aggregate.
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorityLinks to fetch.
     */
    orderBy?: AssessingAuthorityLinkOrderByWithRelationInput | AssessingAuthorityLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessingAuthorityLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorityLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorityLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessingAuthorityLinks
    **/
    _count?: true | AssessingAuthorityLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessingAuthorityLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessingAuthorityLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessingAuthorityLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessingAuthorityLinkMaxAggregateInputType
  }

  export type GetAssessingAuthorityLinkAggregateType<T extends AssessingAuthorityLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessingAuthorityLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessingAuthorityLink[P]>
      : GetScalarType<T[P], AggregateAssessingAuthorityLink[P]>
  }




  export type AssessingAuthorityLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessingAuthorityLinkWhereInput
    orderBy?: AssessingAuthorityLinkOrderByWithAggregationInput | AssessingAuthorityLinkOrderByWithAggregationInput[]
    by: AssessingAuthorityLinkScalarFieldEnum[] | AssessingAuthorityLinkScalarFieldEnum
    having?: AssessingAuthorityLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessingAuthorityLinkCountAggregateInputType | true
    _avg?: AssessingAuthorityLinkAvgAggregateInputType
    _sum?: AssessingAuthorityLinkSumAggregateInputType
    _min?: AssessingAuthorityLinkMinAggregateInputType
    _max?: AssessingAuthorityLinkMaxAggregateInputType
  }

  export type AssessingAuthorityLinkGroupByOutputType = {
    id: number
    link: string
    assessingAuthorityId: number
    _count: AssessingAuthorityLinkCountAggregateOutputType | null
    _avg: AssessingAuthorityLinkAvgAggregateOutputType | null
    _sum: AssessingAuthorityLinkSumAggregateOutputType | null
    _min: AssessingAuthorityLinkMinAggregateOutputType | null
    _max: AssessingAuthorityLinkMaxAggregateOutputType | null
  }

  type GetAssessingAuthorityLinkGroupByPayload<T extends AssessingAuthorityLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessingAuthorityLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessingAuthorityLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessingAuthorityLinkGroupByOutputType[P]>
            : GetScalarType<T[P], AssessingAuthorityLinkGroupByOutputType[P]>
        }
      >
    >


  export type AssessingAuthorityLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    assessingAuthorityId?: boolean
    assessingAuthority?: boolean | AssessingAuthorityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessingAuthorityLink"]>



  export type AssessingAuthorityLinkSelectScalar = {
    id?: boolean
    link?: boolean
    assessingAuthorityId?: boolean
  }

  export type AssessingAuthorityLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "assessingAuthorityId", ExtArgs["result"]["assessingAuthorityLink"]>
  export type AssessingAuthorityLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessingAuthority?: boolean | AssessingAuthorityDefaultArgs<ExtArgs>
  }

  export type $AssessingAuthorityLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessingAuthorityLink"
    objects: {
      assessingAuthority: Prisma.$AssessingAuthorityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      assessingAuthorityId: number
    }, ExtArgs["result"]["assessingAuthorityLink"]>
    composites: {}
  }

  type AssessingAuthorityLinkGetPayload<S extends boolean | null | undefined | AssessingAuthorityLinkDefaultArgs> = $Result.GetResult<Prisma.$AssessingAuthorityLinkPayload, S>

  type AssessingAuthorityLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessingAuthorityLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessingAuthorityLinkCountAggregateInputType | true
    }

  export interface AssessingAuthorityLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessingAuthorityLink'], meta: { name: 'AssessingAuthorityLink' } }
    /**
     * Find zero or one AssessingAuthorityLink that matches the filter.
     * @param {AssessingAuthorityLinkFindUniqueArgs} args - Arguments to find a AssessingAuthorityLink
     * @example
     * // Get one AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessingAuthorityLinkFindUniqueArgs>(args: SelectSubset<T, AssessingAuthorityLinkFindUniqueArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessingAuthorityLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessingAuthorityLinkFindUniqueOrThrowArgs} args - Arguments to find a AssessingAuthorityLink
     * @example
     * // Get one AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessingAuthorityLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessingAuthorityLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessingAuthorityLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkFindFirstArgs} args - Arguments to find a AssessingAuthorityLink
     * @example
     * // Get one AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessingAuthorityLinkFindFirstArgs>(args?: SelectSubset<T, AssessingAuthorityLinkFindFirstArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessingAuthorityLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkFindFirstOrThrowArgs} args - Arguments to find a AssessingAuthorityLink
     * @example
     * // Get one AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessingAuthorityLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessingAuthorityLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessingAuthorityLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessingAuthorityLinks
     * const assessingAuthorityLinks = await prisma.assessingAuthorityLink.findMany()
     * 
     * // Get first 10 AssessingAuthorityLinks
     * const assessingAuthorityLinks = await prisma.assessingAuthorityLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessingAuthorityLinkWithIdOnly = await prisma.assessingAuthorityLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessingAuthorityLinkFindManyArgs>(args?: SelectSubset<T, AssessingAuthorityLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessingAuthorityLink.
     * @param {AssessingAuthorityLinkCreateArgs} args - Arguments to create a AssessingAuthorityLink.
     * @example
     * // Create one AssessingAuthorityLink
     * const AssessingAuthorityLink = await prisma.assessingAuthorityLink.create({
     *   data: {
     *     // ... data to create a AssessingAuthorityLink
     *   }
     * })
     * 
     */
    create<T extends AssessingAuthorityLinkCreateArgs>(args: SelectSubset<T, AssessingAuthorityLinkCreateArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessingAuthorityLinks.
     * @param {AssessingAuthorityLinkCreateManyArgs} args - Arguments to create many AssessingAuthorityLinks.
     * @example
     * // Create many AssessingAuthorityLinks
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessingAuthorityLinkCreateManyArgs>(args?: SelectSubset<T, AssessingAuthorityLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessingAuthorityLink.
     * @param {AssessingAuthorityLinkDeleteArgs} args - Arguments to delete one AssessingAuthorityLink.
     * @example
     * // Delete one AssessingAuthorityLink
     * const AssessingAuthorityLink = await prisma.assessingAuthorityLink.delete({
     *   where: {
     *     // ... filter to delete one AssessingAuthorityLink
     *   }
     * })
     * 
     */
    delete<T extends AssessingAuthorityLinkDeleteArgs>(args: SelectSubset<T, AssessingAuthorityLinkDeleteArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessingAuthorityLink.
     * @param {AssessingAuthorityLinkUpdateArgs} args - Arguments to update one AssessingAuthorityLink.
     * @example
     * // Update one AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessingAuthorityLinkUpdateArgs>(args: SelectSubset<T, AssessingAuthorityLinkUpdateArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessingAuthorityLinks.
     * @param {AssessingAuthorityLinkDeleteManyArgs} args - Arguments to filter AssessingAuthorityLinks to delete.
     * @example
     * // Delete a few AssessingAuthorityLinks
     * const { count } = await prisma.assessingAuthorityLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessingAuthorityLinkDeleteManyArgs>(args?: SelectSubset<T, AssessingAuthorityLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessingAuthorityLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessingAuthorityLinks
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessingAuthorityLinkUpdateManyArgs>(args: SelectSubset<T, AssessingAuthorityLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessingAuthorityLink.
     * @param {AssessingAuthorityLinkUpsertArgs} args - Arguments to update or create a AssessingAuthorityLink.
     * @example
     * // Update or create a AssessingAuthorityLink
     * const assessingAuthorityLink = await prisma.assessingAuthorityLink.upsert({
     *   create: {
     *     // ... data to create a AssessingAuthorityLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessingAuthorityLink we want to update
     *   }
     * })
     */
    upsert<T extends AssessingAuthorityLinkUpsertArgs>(args: SelectSubset<T, AssessingAuthorityLinkUpsertArgs<ExtArgs>>): Prisma__AssessingAuthorityLinkClient<$Result.GetResult<Prisma.$AssessingAuthorityLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessingAuthorityLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkCountArgs} args - Arguments to filter AssessingAuthorityLinks to count.
     * @example
     * // Count the number of AssessingAuthorityLinks
     * const count = await prisma.assessingAuthorityLink.count({
     *   where: {
     *     // ... the filter for the AssessingAuthorityLinks we want to count
     *   }
     * })
    **/
    count<T extends AssessingAuthorityLinkCountArgs>(
      args?: Subset<T, AssessingAuthorityLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessingAuthorityLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessingAuthorityLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessingAuthorityLinkAggregateArgs>(args: Subset<T, AssessingAuthorityLinkAggregateArgs>): Prisma.PrismaPromise<GetAssessingAuthorityLinkAggregateType<T>>

    /**
     * Group by AssessingAuthorityLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessingAuthorityLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessingAuthorityLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessingAuthorityLinkGroupByArgs['orderBy'] }
        : { orderBy?: AssessingAuthorityLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessingAuthorityLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessingAuthorityLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessingAuthorityLink model
   */
  readonly fields: AssessingAuthorityLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessingAuthorityLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessingAuthorityLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assessingAuthority<T extends AssessingAuthorityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessingAuthorityDefaultArgs<ExtArgs>>): Prisma__AssessingAuthorityClient<$Result.GetResult<Prisma.$AssessingAuthorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessingAuthorityLink model
   */
  interface AssessingAuthorityLinkFieldRefs {
    readonly id: FieldRef<"AssessingAuthorityLink", 'Int'>
    readonly link: FieldRef<"AssessingAuthorityLink", 'String'>
    readonly assessingAuthorityId: FieldRef<"AssessingAuthorityLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssessingAuthorityLink findUnique
   */
  export type AssessingAuthorityLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorityLink to fetch.
     */
    where: AssessingAuthorityLinkWhereUniqueInput
  }

  /**
   * AssessingAuthorityLink findUniqueOrThrow
   */
  export type AssessingAuthorityLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorityLink to fetch.
     */
    where: AssessingAuthorityLinkWhereUniqueInput
  }

  /**
   * AssessingAuthorityLink findFirst
   */
  export type AssessingAuthorityLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorityLink to fetch.
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorityLinks to fetch.
     */
    orderBy?: AssessingAuthorityLinkOrderByWithRelationInput | AssessingAuthorityLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessingAuthorityLinks.
     */
    cursor?: AssessingAuthorityLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorityLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorityLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessingAuthorityLinks.
     */
    distinct?: AssessingAuthorityLinkScalarFieldEnum | AssessingAuthorityLinkScalarFieldEnum[]
  }

  /**
   * AssessingAuthorityLink findFirstOrThrow
   */
  export type AssessingAuthorityLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorityLink to fetch.
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorityLinks to fetch.
     */
    orderBy?: AssessingAuthorityLinkOrderByWithRelationInput | AssessingAuthorityLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessingAuthorityLinks.
     */
    cursor?: AssessingAuthorityLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorityLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorityLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessingAuthorityLinks.
     */
    distinct?: AssessingAuthorityLinkScalarFieldEnum | AssessingAuthorityLinkScalarFieldEnum[]
  }

  /**
   * AssessingAuthorityLink findMany
   */
  export type AssessingAuthorityLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter, which AssessingAuthorityLinks to fetch.
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessingAuthorityLinks to fetch.
     */
    orderBy?: AssessingAuthorityLinkOrderByWithRelationInput | AssessingAuthorityLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessingAuthorityLinks.
     */
    cursor?: AssessingAuthorityLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessingAuthorityLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessingAuthorityLinks.
     */
    skip?: number
    distinct?: AssessingAuthorityLinkScalarFieldEnum | AssessingAuthorityLinkScalarFieldEnum[]
  }

  /**
   * AssessingAuthorityLink create
   */
  export type AssessingAuthorityLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessingAuthorityLink.
     */
    data: XOR<AssessingAuthorityLinkCreateInput, AssessingAuthorityLinkUncheckedCreateInput>
  }

  /**
   * AssessingAuthorityLink createMany
   */
  export type AssessingAuthorityLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessingAuthorityLinks.
     */
    data: AssessingAuthorityLinkCreateManyInput | AssessingAuthorityLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessingAuthorityLink update
   */
  export type AssessingAuthorityLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessingAuthorityLink.
     */
    data: XOR<AssessingAuthorityLinkUpdateInput, AssessingAuthorityLinkUncheckedUpdateInput>
    /**
     * Choose, which AssessingAuthorityLink to update.
     */
    where: AssessingAuthorityLinkWhereUniqueInput
  }

  /**
   * AssessingAuthorityLink updateMany
   */
  export type AssessingAuthorityLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessingAuthorityLinks.
     */
    data: XOR<AssessingAuthorityLinkUpdateManyMutationInput, AssessingAuthorityLinkUncheckedUpdateManyInput>
    /**
     * Filter which AssessingAuthorityLinks to update
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * Limit how many AssessingAuthorityLinks to update.
     */
    limit?: number
  }

  /**
   * AssessingAuthorityLink upsert
   */
  export type AssessingAuthorityLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessingAuthorityLink to update in case it exists.
     */
    where: AssessingAuthorityLinkWhereUniqueInput
    /**
     * In case the AssessingAuthorityLink found by the `where` argument doesn't exist, create a new AssessingAuthorityLink with this data.
     */
    create: XOR<AssessingAuthorityLinkCreateInput, AssessingAuthorityLinkUncheckedCreateInput>
    /**
     * In case the AssessingAuthorityLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessingAuthorityLinkUpdateInput, AssessingAuthorityLinkUncheckedUpdateInput>
  }

  /**
   * AssessingAuthorityLink delete
   */
  export type AssessingAuthorityLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
    /**
     * Filter which AssessingAuthorityLink to delete.
     */
    where: AssessingAuthorityLinkWhereUniqueInput
  }

  /**
   * AssessingAuthorityLink deleteMany
   */
  export type AssessingAuthorityLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessingAuthorityLinks to delete
     */
    where?: AssessingAuthorityLinkWhereInput
    /**
     * Limit how many AssessingAuthorityLinks to delete.
     */
    limit?: number
  }

  /**
   * AssessingAuthorityLink without action
   */
  export type AssessingAuthorityLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessingAuthorityLink
     */
    select?: AssessingAuthorityLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessingAuthorityLink
     */
    omit?: AssessingAuthorityLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessingAuthorityLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OccupationScalarFieldEnum: {
    id: 'id',
    occupation: 'occupation',
    anzscoCode: 'anzscoCode',
    anzscoLink: 'anzscoLink',
    list: 'list',
    state: 'state'
  };

  export type OccupationScalarFieldEnum = (typeof OccupationScalarFieldEnum)[keyof typeof OccupationScalarFieldEnum]


  export const VisaScalarFieldEnum: {
    id: 'id',
    visaName: 'visaName',
    occupationId: 'occupationId'
  };

  export type VisaScalarFieldEnum = (typeof VisaScalarFieldEnum)[keyof typeof VisaScalarFieldEnum]


  export const AssessingAuthorityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    occupationId: 'occupationId'
  };

  export type AssessingAuthorityScalarFieldEnum = (typeof AssessingAuthorityScalarFieldEnum)[keyof typeof AssessingAuthorityScalarFieldEnum]


  export const AssessingAuthorityLinkScalarFieldEnum: {
    id: 'id',
    link: 'link',
    assessingAuthorityId: 'assessingAuthorityId'
  };

  export type AssessingAuthorityLinkScalarFieldEnum = (typeof AssessingAuthorityLinkScalarFieldEnum)[keyof typeof AssessingAuthorityLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const OccupationOrderByRelevanceFieldEnum: {
    occupation: 'occupation',
    anzscoCode: 'anzscoCode',
    anzscoLink: 'anzscoLink',
    list: 'list',
    state: 'state'
  };

  export type OccupationOrderByRelevanceFieldEnum = (typeof OccupationOrderByRelevanceFieldEnum)[keyof typeof OccupationOrderByRelevanceFieldEnum]


  export const VisaOrderByRelevanceFieldEnum: {
    visaName: 'visaName'
  };

  export type VisaOrderByRelevanceFieldEnum = (typeof VisaOrderByRelevanceFieldEnum)[keyof typeof VisaOrderByRelevanceFieldEnum]


  export const AssessingAuthorityOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type AssessingAuthorityOrderByRelevanceFieldEnum = (typeof AssessingAuthorityOrderByRelevanceFieldEnum)[keyof typeof AssessingAuthorityOrderByRelevanceFieldEnum]


  export const AssessingAuthorityLinkOrderByRelevanceFieldEnum: {
    link: 'link'
  };

  export type AssessingAuthorityLinkOrderByRelevanceFieldEnum = (typeof AssessingAuthorityLinkOrderByRelevanceFieldEnum)[keyof typeof AssessingAuthorityLinkOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OccupationWhereInput = {
    AND?: OccupationWhereInput | OccupationWhereInput[]
    OR?: OccupationWhereInput[]
    NOT?: OccupationWhereInput | OccupationWhereInput[]
    id?: IntFilter<"Occupation"> | number
    occupation?: StringFilter<"Occupation"> | string
    anzscoCode?: StringFilter<"Occupation"> | string
    anzscoLink?: StringFilter<"Occupation"> | string
    list?: StringFilter<"Occupation"> | string
    state?: StringNullableFilter<"Occupation"> | string | null
    visas?: VisaListRelationFilter
    assessingAuthorities?: AssessingAuthorityListRelationFilter
  }

  export type OccupationOrderByWithRelationInput = {
    id?: SortOrder
    occupation?: SortOrder
    anzscoCode?: SortOrder
    anzscoLink?: SortOrder
    list?: SortOrder
    state?: SortOrderInput | SortOrder
    visas?: VisaOrderByRelationAggregateInput
    assessingAuthorities?: AssessingAuthorityOrderByRelationAggregateInput
    _relevance?: OccupationOrderByRelevanceInput
  }

  export type OccupationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    anzscoCode?: string
    AND?: OccupationWhereInput | OccupationWhereInput[]
    OR?: OccupationWhereInput[]
    NOT?: OccupationWhereInput | OccupationWhereInput[]
    occupation?: StringFilter<"Occupation"> | string
    anzscoLink?: StringFilter<"Occupation"> | string
    list?: StringFilter<"Occupation"> | string
    state?: StringNullableFilter<"Occupation"> | string | null
    visas?: VisaListRelationFilter
    assessingAuthorities?: AssessingAuthorityListRelationFilter
  }, "id" | "anzscoCode">

  export type OccupationOrderByWithAggregationInput = {
    id?: SortOrder
    occupation?: SortOrder
    anzscoCode?: SortOrder
    anzscoLink?: SortOrder
    list?: SortOrder
    state?: SortOrderInput | SortOrder
    _count?: OccupationCountOrderByAggregateInput
    _avg?: OccupationAvgOrderByAggregateInput
    _max?: OccupationMaxOrderByAggregateInput
    _min?: OccupationMinOrderByAggregateInput
    _sum?: OccupationSumOrderByAggregateInput
  }

  export type OccupationScalarWhereWithAggregatesInput = {
    AND?: OccupationScalarWhereWithAggregatesInput | OccupationScalarWhereWithAggregatesInput[]
    OR?: OccupationScalarWhereWithAggregatesInput[]
    NOT?: OccupationScalarWhereWithAggregatesInput | OccupationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Occupation"> | number
    occupation?: StringWithAggregatesFilter<"Occupation"> | string
    anzscoCode?: StringWithAggregatesFilter<"Occupation"> | string
    anzscoLink?: StringWithAggregatesFilter<"Occupation"> | string
    list?: StringWithAggregatesFilter<"Occupation"> | string
    state?: StringNullableWithAggregatesFilter<"Occupation"> | string | null
  }

  export type VisaWhereInput = {
    AND?: VisaWhereInput | VisaWhereInput[]
    OR?: VisaWhereInput[]
    NOT?: VisaWhereInput | VisaWhereInput[]
    id?: IntFilter<"Visa"> | number
    visaName?: StringFilter<"Visa"> | string
    occupationId?: IntFilter<"Visa"> | number
    occupation?: XOR<OccupationScalarRelationFilter, OccupationWhereInput>
  }

  export type VisaOrderByWithRelationInput = {
    id?: SortOrder
    visaName?: SortOrder
    occupationId?: SortOrder
    occupation?: OccupationOrderByWithRelationInput
    _relevance?: VisaOrderByRelevanceInput
  }

  export type VisaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisaWhereInput | VisaWhereInput[]
    OR?: VisaWhereInput[]
    NOT?: VisaWhereInput | VisaWhereInput[]
    visaName?: StringFilter<"Visa"> | string
    occupationId?: IntFilter<"Visa"> | number
    occupation?: XOR<OccupationScalarRelationFilter, OccupationWhereInput>
  }, "id">

  export type VisaOrderByWithAggregationInput = {
    id?: SortOrder
    visaName?: SortOrder
    occupationId?: SortOrder
    _count?: VisaCountOrderByAggregateInput
    _avg?: VisaAvgOrderByAggregateInput
    _max?: VisaMaxOrderByAggregateInput
    _min?: VisaMinOrderByAggregateInput
    _sum?: VisaSumOrderByAggregateInput
  }

  export type VisaScalarWhereWithAggregatesInput = {
    AND?: VisaScalarWhereWithAggregatesInput | VisaScalarWhereWithAggregatesInput[]
    OR?: VisaScalarWhereWithAggregatesInput[]
    NOT?: VisaScalarWhereWithAggregatesInput | VisaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visa"> | number
    visaName?: StringWithAggregatesFilter<"Visa"> | string
    occupationId?: IntWithAggregatesFilter<"Visa"> | number
  }

  export type AssessingAuthorityWhereInput = {
    AND?: AssessingAuthorityWhereInput | AssessingAuthorityWhereInput[]
    OR?: AssessingAuthorityWhereInput[]
    NOT?: AssessingAuthorityWhereInput | AssessingAuthorityWhereInput[]
    id?: IntFilter<"AssessingAuthority"> | number
    name?: StringFilter<"AssessingAuthority"> | string
    occupationId?: IntFilter<"AssessingAuthority"> | number
    occupation?: XOR<OccupationScalarRelationFilter, OccupationWhereInput>
    assessingAuthorityLink?: AssessingAuthorityLinkListRelationFilter
  }

  export type AssessingAuthorityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    occupationId?: SortOrder
    occupation?: OccupationOrderByWithRelationInput
    assessingAuthorityLink?: AssessingAuthorityLinkOrderByRelationAggregateInput
    _relevance?: AssessingAuthorityOrderByRelevanceInput
  }

  export type AssessingAuthorityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessingAuthorityWhereInput | AssessingAuthorityWhereInput[]
    OR?: AssessingAuthorityWhereInput[]
    NOT?: AssessingAuthorityWhereInput | AssessingAuthorityWhereInput[]
    name?: StringFilter<"AssessingAuthority"> | string
    occupationId?: IntFilter<"AssessingAuthority"> | number
    occupation?: XOR<OccupationScalarRelationFilter, OccupationWhereInput>
    assessingAuthorityLink?: AssessingAuthorityLinkListRelationFilter
  }, "id">

  export type AssessingAuthorityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    occupationId?: SortOrder
    _count?: AssessingAuthorityCountOrderByAggregateInput
    _avg?: AssessingAuthorityAvgOrderByAggregateInput
    _max?: AssessingAuthorityMaxOrderByAggregateInput
    _min?: AssessingAuthorityMinOrderByAggregateInput
    _sum?: AssessingAuthoritySumOrderByAggregateInput
  }

  export type AssessingAuthorityScalarWhereWithAggregatesInput = {
    AND?: AssessingAuthorityScalarWhereWithAggregatesInput | AssessingAuthorityScalarWhereWithAggregatesInput[]
    OR?: AssessingAuthorityScalarWhereWithAggregatesInput[]
    NOT?: AssessingAuthorityScalarWhereWithAggregatesInput | AssessingAuthorityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessingAuthority"> | number
    name?: StringWithAggregatesFilter<"AssessingAuthority"> | string
    occupationId?: IntWithAggregatesFilter<"AssessingAuthority"> | number
  }

  export type AssessingAuthorityLinkWhereInput = {
    AND?: AssessingAuthorityLinkWhereInput | AssessingAuthorityLinkWhereInput[]
    OR?: AssessingAuthorityLinkWhereInput[]
    NOT?: AssessingAuthorityLinkWhereInput | AssessingAuthorityLinkWhereInput[]
    id?: IntFilter<"AssessingAuthorityLink"> | number
    link?: StringFilter<"AssessingAuthorityLink"> | string
    assessingAuthorityId?: IntFilter<"AssessingAuthorityLink"> | number
    assessingAuthority?: XOR<AssessingAuthorityScalarRelationFilter, AssessingAuthorityWhereInput>
  }

  export type AssessingAuthorityLinkOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    assessingAuthorityId?: SortOrder
    assessingAuthority?: AssessingAuthorityOrderByWithRelationInput
    _relevance?: AssessingAuthorityLinkOrderByRelevanceInput
  }

  export type AssessingAuthorityLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessingAuthorityLinkWhereInput | AssessingAuthorityLinkWhereInput[]
    OR?: AssessingAuthorityLinkWhereInput[]
    NOT?: AssessingAuthorityLinkWhereInput | AssessingAuthorityLinkWhereInput[]
    link?: StringFilter<"AssessingAuthorityLink"> | string
    assessingAuthorityId?: IntFilter<"AssessingAuthorityLink"> | number
    assessingAuthority?: XOR<AssessingAuthorityScalarRelationFilter, AssessingAuthorityWhereInput>
  }, "id">

  export type AssessingAuthorityLinkOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    assessingAuthorityId?: SortOrder
    _count?: AssessingAuthorityLinkCountOrderByAggregateInput
    _avg?: AssessingAuthorityLinkAvgOrderByAggregateInput
    _max?: AssessingAuthorityLinkMaxOrderByAggregateInput
    _min?: AssessingAuthorityLinkMinOrderByAggregateInput
    _sum?: AssessingAuthorityLinkSumOrderByAggregateInput
  }

  export type AssessingAuthorityLinkScalarWhereWithAggregatesInput = {
    AND?: AssessingAuthorityLinkScalarWhereWithAggregatesInput | AssessingAuthorityLinkScalarWhereWithAggregatesInput[]
    OR?: AssessingAuthorityLinkScalarWhereWithAggregatesInput[]
    NOT?: AssessingAuthorityLinkScalarWhereWithAggregatesInput | AssessingAuthorityLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessingAuthorityLink"> | number
    link?: StringWithAggregatesFilter<"AssessingAuthorityLink"> | string
    assessingAuthorityId?: IntWithAggregatesFilter<"AssessingAuthorityLink"> | number
  }

  export type OccupationCreateInput = {
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    visas?: VisaCreateNestedManyWithoutOccupationInput
    assessingAuthorities?: AssessingAuthorityCreateNestedManyWithoutOccupationInput
  }

  export type OccupationUncheckedCreateInput = {
    id?: number
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    visas?: VisaUncheckedCreateNestedManyWithoutOccupationInput
    assessingAuthorities?: AssessingAuthorityUncheckedCreateNestedManyWithoutOccupationInput
  }

  export type OccupationUpdateInput = {
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    visas?: VisaUpdateManyWithoutOccupationNestedInput
    assessingAuthorities?: AssessingAuthorityUpdateManyWithoutOccupationNestedInput
  }

  export type OccupationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    visas?: VisaUncheckedUpdateManyWithoutOccupationNestedInput
    assessingAuthorities?: AssessingAuthorityUncheckedUpdateManyWithoutOccupationNestedInput
  }

  export type OccupationCreateManyInput = {
    id?: number
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
  }

  export type OccupationUpdateManyMutationInput = {
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OccupationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisaCreateInput = {
    visaName: string
    occupation: OccupationCreateNestedOneWithoutVisasInput
  }

  export type VisaUncheckedCreateInput = {
    id?: number
    visaName: string
    occupationId: number
  }

  export type VisaUpdateInput = {
    visaName?: StringFieldUpdateOperationsInput | string
    occupation?: OccupationUpdateOneRequiredWithoutVisasNestedInput
  }

  export type VisaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visaName?: StringFieldUpdateOperationsInput | string
    occupationId?: IntFieldUpdateOperationsInput | number
  }

  export type VisaCreateManyInput = {
    id?: number
    visaName: string
    occupationId: number
  }

  export type VisaUpdateManyMutationInput = {
    visaName?: StringFieldUpdateOperationsInput | string
  }

  export type VisaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visaName?: StringFieldUpdateOperationsInput | string
    occupationId?: IntFieldUpdateOperationsInput | number
  }

  export type AssessingAuthorityCreateInput = {
    name: string
    occupation: OccupationCreateNestedOneWithoutAssessingAuthoritiesInput
    assessingAuthorityLink?: AssessingAuthorityLinkCreateNestedManyWithoutAssessingAuthorityInput
  }

  export type AssessingAuthorityUncheckedCreateInput = {
    id?: number
    name: string
    occupationId: number
    assessingAuthorityLink?: AssessingAuthorityLinkUncheckedCreateNestedManyWithoutAssessingAuthorityInput
  }

  export type AssessingAuthorityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    occupation?: OccupationUpdateOneRequiredWithoutAssessingAuthoritiesNestedInput
    assessingAuthorityLink?: AssessingAuthorityLinkUpdateManyWithoutAssessingAuthorityNestedInput
  }

  export type AssessingAuthorityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    occupationId?: IntFieldUpdateOperationsInput | number
    assessingAuthorityLink?: AssessingAuthorityLinkUncheckedUpdateManyWithoutAssessingAuthorityNestedInput
  }

  export type AssessingAuthorityCreateManyInput = {
    id?: number
    name: string
    occupationId: number
  }

  export type AssessingAuthorityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    occupationId?: IntFieldUpdateOperationsInput | number
  }

  export type AssessingAuthorityLinkCreateInput = {
    link: string
    assessingAuthority: AssessingAuthorityCreateNestedOneWithoutAssessingAuthorityLinkInput
  }

  export type AssessingAuthorityLinkUncheckedCreateInput = {
    id?: number
    link: string
    assessingAuthorityId: number
  }

  export type AssessingAuthorityLinkUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    assessingAuthority?: AssessingAuthorityUpdateOneRequiredWithoutAssessingAuthorityLinkNestedInput
  }

  export type AssessingAuthorityLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    assessingAuthorityId?: IntFieldUpdateOperationsInput | number
  }

  export type AssessingAuthorityLinkCreateManyInput = {
    id?: number
    link: string
    assessingAuthorityId: number
  }

  export type AssessingAuthorityLinkUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    assessingAuthorityId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VisaListRelationFilter = {
    every?: VisaWhereInput
    some?: VisaWhereInput
    none?: VisaWhereInput
  }

  export type AssessingAuthorityListRelationFilter = {
    every?: AssessingAuthorityWhereInput
    some?: AssessingAuthorityWhereInput
    none?: AssessingAuthorityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VisaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessingAuthorityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OccupationOrderByRelevanceInput = {
    fields: OccupationOrderByRelevanceFieldEnum | OccupationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OccupationCountOrderByAggregateInput = {
    id?: SortOrder
    occupation?: SortOrder
    anzscoCode?: SortOrder
    anzscoLink?: SortOrder
    list?: SortOrder
    state?: SortOrder
  }

  export type OccupationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OccupationMaxOrderByAggregateInput = {
    id?: SortOrder
    occupation?: SortOrder
    anzscoCode?: SortOrder
    anzscoLink?: SortOrder
    list?: SortOrder
    state?: SortOrder
  }

  export type OccupationMinOrderByAggregateInput = {
    id?: SortOrder
    occupation?: SortOrder
    anzscoCode?: SortOrder
    anzscoLink?: SortOrder
    list?: SortOrder
    state?: SortOrder
  }

  export type OccupationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OccupationScalarRelationFilter = {
    is?: OccupationWhereInput
    isNot?: OccupationWhereInput
  }

  export type VisaOrderByRelevanceInput = {
    fields: VisaOrderByRelevanceFieldEnum | VisaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisaCountOrderByAggregateInput = {
    id?: SortOrder
    visaName?: SortOrder
    occupationId?: SortOrder
  }

  export type VisaAvgOrderByAggregateInput = {
    id?: SortOrder
    occupationId?: SortOrder
  }

  export type VisaMaxOrderByAggregateInput = {
    id?: SortOrder
    visaName?: SortOrder
    occupationId?: SortOrder
  }

  export type VisaMinOrderByAggregateInput = {
    id?: SortOrder
    visaName?: SortOrder
    occupationId?: SortOrder
  }

  export type VisaSumOrderByAggregateInput = {
    id?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthorityLinkListRelationFilter = {
    every?: AssessingAuthorityLinkWhereInput
    some?: AssessingAuthorityLinkWhereInput
    none?: AssessingAuthorityLinkWhereInput
  }

  export type AssessingAuthorityLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessingAuthorityOrderByRelevanceInput = {
    fields: AssessingAuthorityOrderByRelevanceFieldEnum | AssessingAuthorityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssessingAuthorityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthorityAvgOrderByAggregateInput = {
    id?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthorityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthorityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthoritySumOrderByAggregateInput = {
    id?: SortOrder
    occupationId?: SortOrder
  }

  export type AssessingAuthorityScalarRelationFilter = {
    is?: AssessingAuthorityWhereInput
    isNot?: AssessingAuthorityWhereInput
  }

  export type AssessingAuthorityLinkOrderByRelevanceInput = {
    fields: AssessingAuthorityLinkOrderByRelevanceFieldEnum | AssessingAuthorityLinkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssessingAuthorityLinkCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    assessingAuthorityId?: SortOrder
  }

  export type AssessingAuthorityLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    assessingAuthorityId?: SortOrder
  }

  export type AssessingAuthorityLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    assessingAuthorityId?: SortOrder
  }

  export type AssessingAuthorityLinkMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    assessingAuthorityId?: SortOrder
  }

  export type AssessingAuthorityLinkSumOrderByAggregateInput = {
    id?: SortOrder
    assessingAuthorityId?: SortOrder
  }

  export type VisaCreateNestedManyWithoutOccupationInput = {
    create?: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput> | VisaCreateWithoutOccupationInput[] | VisaUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutOccupationInput | VisaCreateOrConnectWithoutOccupationInput[]
    createMany?: VisaCreateManyOccupationInputEnvelope
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
  }

  export type AssessingAuthorityCreateNestedManyWithoutOccupationInput = {
    create?: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput> | AssessingAuthorityCreateWithoutOccupationInput[] | AssessingAuthorityUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutOccupationInput | AssessingAuthorityCreateOrConnectWithoutOccupationInput[]
    createMany?: AssessingAuthorityCreateManyOccupationInputEnvelope
    connect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
  }

  export type VisaUncheckedCreateNestedManyWithoutOccupationInput = {
    create?: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput> | VisaCreateWithoutOccupationInput[] | VisaUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutOccupationInput | VisaCreateOrConnectWithoutOccupationInput[]
    createMany?: VisaCreateManyOccupationInputEnvelope
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
  }

  export type AssessingAuthorityUncheckedCreateNestedManyWithoutOccupationInput = {
    create?: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput> | AssessingAuthorityCreateWithoutOccupationInput[] | AssessingAuthorityUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutOccupationInput | AssessingAuthorityCreateOrConnectWithoutOccupationInput[]
    createMany?: AssessingAuthorityCreateManyOccupationInputEnvelope
    connect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VisaUpdateManyWithoutOccupationNestedInput = {
    create?: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput> | VisaCreateWithoutOccupationInput[] | VisaUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutOccupationInput | VisaCreateOrConnectWithoutOccupationInput[]
    upsert?: VisaUpsertWithWhereUniqueWithoutOccupationInput | VisaUpsertWithWhereUniqueWithoutOccupationInput[]
    createMany?: VisaCreateManyOccupationInputEnvelope
    set?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    disconnect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    delete?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    update?: VisaUpdateWithWhereUniqueWithoutOccupationInput | VisaUpdateWithWhereUniqueWithoutOccupationInput[]
    updateMany?: VisaUpdateManyWithWhereWithoutOccupationInput | VisaUpdateManyWithWhereWithoutOccupationInput[]
    deleteMany?: VisaScalarWhereInput | VisaScalarWhereInput[]
  }

  export type AssessingAuthorityUpdateManyWithoutOccupationNestedInput = {
    create?: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput> | AssessingAuthorityCreateWithoutOccupationInput[] | AssessingAuthorityUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutOccupationInput | AssessingAuthorityCreateOrConnectWithoutOccupationInput[]
    upsert?: AssessingAuthorityUpsertWithWhereUniqueWithoutOccupationInput | AssessingAuthorityUpsertWithWhereUniqueWithoutOccupationInput[]
    createMany?: AssessingAuthorityCreateManyOccupationInputEnvelope
    set?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    disconnect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    delete?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    connect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    update?: AssessingAuthorityUpdateWithWhereUniqueWithoutOccupationInput | AssessingAuthorityUpdateWithWhereUniqueWithoutOccupationInput[]
    updateMany?: AssessingAuthorityUpdateManyWithWhereWithoutOccupationInput | AssessingAuthorityUpdateManyWithWhereWithoutOccupationInput[]
    deleteMany?: AssessingAuthorityScalarWhereInput | AssessingAuthorityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VisaUncheckedUpdateManyWithoutOccupationNestedInput = {
    create?: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput> | VisaCreateWithoutOccupationInput[] | VisaUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: VisaCreateOrConnectWithoutOccupationInput | VisaCreateOrConnectWithoutOccupationInput[]
    upsert?: VisaUpsertWithWhereUniqueWithoutOccupationInput | VisaUpsertWithWhereUniqueWithoutOccupationInput[]
    createMany?: VisaCreateManyOccupationInputEnvelope
    set?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    disconnect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    delete?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    connect?: VisaWhereUniqueInput | VisaWhereUniqueInput[]
    update?: VisaUpdateWithWhereUniqueWithoutOccupationInput | VisaUpdateWithWhereUniqueWithoutOccupationInput[]
    updateMany?: VisaUpdateManyWithWhereWithoutOccupationInput | VisaUpdateManyWithWhereWithoutOccupationInput[]
    deleteMany?: VisaScalarWhereInput | VisaScalarWhereInput[]
  }

  export type AssessingAuthorityUncheckedUpdateManyWithoutOccupationNestedInput = {
    create?: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput> | AssessingAuthorityCreateWithoutOccupationInput[] | AssessingAuthorityUncheckedCreateWithoutOccupationInput[]
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutOccupationInput | AssessingAuthorityCreateOrConnectWithoutOccupationInput[]
    upsert?: AssessingAuthorityUpsertWithWhereUniqueWithoutOccupationInput | AssessingAuthorityUpsertWithWhereUniqueWithoutOccupationInput[]
    createMany?: AssessingAuthorityCreateManyOccupationInputEnvelope
    set?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    disconnect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    delete?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    connect?: AssessingAuthorityWhereUniqueInput | AssessingAuthorityWhereUniqueInput[]
    update?: AssessingAuthorityUpdateWithWhereUniqueWithoutOccupationInput | AssessingAuthorityUpdateWithWhereUniqueWithoutOccupationInput[]
    updateMany?: AssessingAuthorityUpdateManyWithWhereWithoutOccupationInput | AssessingAuthorityUpdateManyWithWhereWithoutOccupationInput[]
    deleteMany?: AssessingAuthorityScalarWhereInput | AssessingAuthorityScalarWhereInput[]
  }

  export type OccupationCreateNestedOneWithoutVisasInput = {
    create?: XOR<OccupationCreateWithoutVisasInput, OccupationUncheckedCreateWithoutVisasInput>
    connectOrCreate?: OccupationCreateOrConnectWithoutVisasInput
    connect?: OccupationWhereUniqueInput
  }

  export type OccupationUpdateOneRequiredWithoutVisasNestedInput = {
    create?: XOR<OccupationCreateWithoutVisasInput, OccupationUncheckedCreateWithoutVisasInput>
    connectOrCreate?: OccupationCreateOrConnectWithoutVisasInput
    upsert?: OccupationUpsertWithoutVisasInput
    connect?: OccupationWhereUniqueInput
    update?: XOR<XOR<OccupationUpdateToOneWithWhereWithoutVisasInput, OccupationUpdateWithoutVisasInput>, OccupationUncheckedUpdateWithoutVisasInput>
  }

  export type OccupationCreateNestedOneWithoutAssessingAuthoritiesInput = {
    create?: XOR<OccupationCreateWithoutAssessingAuthoritiesInput, OccupationUncheckedCreateWithoutAssessingAuthoritiesInput>
    connectOrCreate?: OccupationCreateOrConnectWithoutAssessingAuthoritiesInput
    connect?: OccupationWhereUniqueInput
  }

  export type AssessingAuthorityLinkCreateNestedManyWithoutAssessingAuthorityInput = {
    create?: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput> | AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput[] | AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput[]
    connectOrCreate?: AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput | AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput[]
    createMany?: AssessingAuthorityLinkCreateManyAssessingAuthorityInputEnvelope
    connect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
  }

  export type AssessingAuthorityLinkUncheckedCreateNestedManyWithoutAssessingAuthorityInput = {
    create?: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput> | AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput[] | AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput[]
    connectOrCreate?: AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput | AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput[]
    createMany?: AssessingAuthorityLinkCreateManyAssessingAuthorityInputEnvelope
    connect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
  }

  export type OccupationUpdateOneRequiredWithoutAssessingAuthoritiesNestedInput = {
    create?: XOR<OccupationCreateWithoutAssessingAuthoritiesInput, OccupationUncheckedCreateWithoutAssessingAuthoritiesInput>
    connectOrCreate?: OccupationCreateOrConnectWithoutAssessingAuthoritiesInput
    upsert?: OccupationUpsertWithoutAssessingAuthoritiesInput
    connect?: OccupationWhereUniqueInput
    update?: XOR<XOR<OccupationUpdateToOneWithWhereWithoutAssessingAuthoritiesInput, OccupationUpdateWithoutAssessingAuthoritiesInput>, OccupationUncheckedUpdateWithoutAssessingAuthoritiesInput>
  }

  export type AssessingAuthorityLinkUpdateManyWithoutAssessingAuthorityNestedInput = {
    create?: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput> | AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput[] | AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput[]
    connectOrCreate?: AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput | AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput[]
    upsert?: AssessingAuthorityLinkUpsertWithWhereUniqueWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpsertWithWhereUniqueWithoutAssessingAuthorityInput[]
    createMany?: AssessingAuthorityLinkCreateManyAssessingAuthorityInputEnvelope
    set?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    disconnect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    delete?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    connect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    update?: AssessingAuthorityLinkUpdateWithWhereUniqueWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpdateWithWhereUniqueWithoutAssessingAuthorityInput[]
    updateMany?: AssessingAuthorityLinkUpdateManyWithWhereWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpdateManyWithWhereWithoutAssessingAuthorityInput[]
    deleteMany?: AssessingAuthorityLinkScalarWhereInput | AssessingAuthorityLinkScalarWhereInput[]
  }

  export type AssessingAuthorityLinkUncheckedUpdateManyWithoutAssessingAuthorityNestedInput = {
    create?: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput> | AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput[] | AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput[]
    connectOrCreate?: AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput | AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput[]
    upsert?: AssessingAuthorityLinkUpsertWithWhereUniqueWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpsertWithWhereUniqueWithoutAssessingAuthorityInput[]
    createMany?: AssessingAuthorityLinkCreateManyAssessingAuthorityInputEnvelope
    set?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    disconnect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    delete?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    connect?: AssessingAuthorityLinkWhereUniqueInput | AssessingAuthorityLinkWhereUniqueInput[]
    update?: AssessingAuthorityLinkUpdateWithWhereUniqueWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpdateWithWhereUniqueWithoutAssessingAuthorityInput[]
    updateMany?: AssessingAuthorityLinkUpdateManyWithWhereWithoutAssessingAuthorityInput | AssessingAuthorityLinkUpdateManyWithWhereWithoutAssessingAuthorityInput[]
    deleteMany?: AssessingAuthorityLinkScalarWhereInput | AssessingAuthorityLinkScalarWhereInput[]
  }

  export type AssessingAuthorityCreateNestedOneWithoutAssessingAuthorityLinkInput = {
    create?: XOR<AssessingAuthorityCreateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedCreateWithoutAssessingAuthorityLinkInput>
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutAssessingAuthorityLinkInput
    connect?: AssessingAuthorityWhereUniqueInput
  }

  export type AssessingAuthorityUpdateOneRequiredWithoutAssessingAuthorityLinkNestedInput = {
    create?: XOR<AssessingAuthorityCreateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedCreateWithoutAssessingAuthorityLinkInput>
    connectOrCreate?: AssessingAuthorityCreateOrConnectWithoutAssessingAuthorityLinkInput
    upsert?: AssessingAuthorityUpsertWithoutAssessingAuthorityLinkInput
    connect?: AssessingAuthorityWhereUniqueInput
    update?: XOR<XOR<AssessingAuthorityUpdateToOneWithWhereWithoutAssessingAuthorityLinkInput, AssessingAuthorityUpdateWithoutAssessingAuthorityLinkInput>, AssessingAuthorityUncheckedUpdateWithoutAssessingAuthorityLinkInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VisaCreateWithoutOccupationInput = {
    visaName: string
  }

  export type VisaUncheckedCreateWithoutOccupationInput = {
    id?: number
    visaName: string
  }

  export type VisaCreateOrConnectWithoutOccupationInput = {
    where: VisaWhereUniqueInput
    create: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput>
  }

  export type VisaCreateManyOccupationInputEnvelope = {
    data: VisaCreateManyOccupationInput | VisaCreateManyOccupationInput[]
    skipDuplicates?: boolean
  }

  export type AssessingAuthorityCreateWithoutOccupationInput = {
    name: string
    assessingAuthorityLink?: AssessingAuthorityLinkCreateNestedManyWithoutAssessingAuthorityInput
  }

  export type AssessingAuthorityUncheckedCreateWithoutOccupationInput = {
    id?: number
    name: string
    assessingAuthorityLink?: AssessingAuthorityLinkUncheckedCreateNestedManyWithoutAssessingAuthorityInput
  }

  export type AssessingAuthorityCreateOrConnectWithoutOccupationInput = {
    where: AssessingAuthorityWhereUniqueInput
    create: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput>
  }

  export type AssessingAuthorityCreateManyOccupationInputEnvelope = {
    data: AssessingAuthorityCreateManyOccupationInput | AssessingAuthorityCreateManyOccupationInput[]
    skipDuplicates?: boolean
  }

  export type VisaUpsertWithWhereUniqueWithoutOccupationInput = {
    where: VisaWhereUniqueInput
    update: XOR<VisaUpdateWithoutOccupationInput, VisaUncheckedUpdateWithoutOccupationInput>
    create: XOR<VisaCreateWithoutOccupationInput, VisaUncheckedCreateWithoutOccupationInput>
  }

  export type VisaUpdateWithWhereUniqueWithoutOccupationInput = {
    where: VisaWhereUniqueInput
    data: XOR<VisaUpdateWithoutOccupationInput, VisaUncheckedUpdateWithoutOccupationInput>
  }

  export type VisaUpdateManyWithWhereWithoutOccupationInput = {
    where: VisaScalarWhereInput
    data: XOR<VisaUpdateManyMutationInput, VisaUncheckedUpdateManyWithoutOccupationInput>
  }

  export type VisaScalarWhereInput = {
    AND?: VisaScalarWhereInput | VisaScalarWhereInput[]
    OR?: VisaScalarWhereInput[]
    NOT?: VisaScalarWhereInput | VisaScalarWhereInput[]
    id?: IntFilter<"Visa"> | number
    visaName?: StringFilter<"Visa"> | string
    occupationId?: IntFilter<"Visa"> | number
  }

  export type AssessingAuthorityUpsertWithWhereUniqueWithoutOccupationInput = {
    where: AssessingAuthorityWhereUniqueInput
    update: XOR<AssessingAuthorityUpdateWithoutOccupationInput, AssessingAuthorityUncheckedUpdateWithoutOccupationInput>
    create: XOR<AssessingAuthorityCreateWithoutOccupationInput, AssessingAuthorityUncheckedCreateWithoutOccupationInput>
  }

  export type AssessingAuthorityUpdateWithWhereUniqueWithoutOccupationInput = {
    where: AssessingAuthorityWhereUniqueInput
    data: XOR<AssessingAuthorityUpdateWithoutOccupationInput, AssessingAuthorityUncheckedUpdateWithoutOccupationInput>
  }

  export type AssessingAuthorityUpdateManyWithWhereWithoutOccupationInput = {
    where: AssessingAuthorityScalarWhereInput
    data: XOR<AssessingAuthorityUpdateManyMutationInput, AssessingAuthorityUncheckedUpdateManyWithoutOccupationInput>
  }

  export type AssessingAuthorityScalarWhereInput = {
    AND?: AssessingAuthorityScalarWhereInput | AssessingAuthorityScalarWhereInput[]
    OR?: AssessingAuthorityScalarWhereInput[]
    NOT?: AssessingAuthorityScalarWhereInput | AssessingAuthorityScalarWhereInput[]
    id?: IntFilter<"AssessingAuthority"> | number
    name?: StringFilter<"AssessingAuthority"> | string
    occupationId?: IntFilter<"AssessingAuthority"> | number
  }

  export type OccupationCreateWithoutVisasInput = {
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    assessingAuthorities?: AssessingAuthorityCreateNestedManyWithoutOccupationInput
  }

  export type OccupationUncheckedCreateWithoutVisasInput = {
    id?: number
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    assessingAuthorities?: AssessingAuthorityUncheckedCreateNestedManyWithoutOccupationInput
  }

  export type OccupationCreateOrConnectWithoutVisasInput = {
    where: OccupationWhereUniqueInput
    create: XOR<OccupationCreateWithoutVisasInput, OccupationUncheckedCreateWithoutVisasInput>
  }

  export type OccupationUpsertWithoutVisasInput = {
    update: XOR<OccupationUpdateWithoutVisasInput, OccupationUncheckedUpdateWithoutVisasInput>
    create: XOR<OccupationCreateWithoutVisasInput, OccupationUncheckedCreateWithoutVisasInput>
    where?: OccupationWhereInput
  }

  export type OccupationUpdateToOneWithWhereWithoutVisasInput = {
    where?: OccupationWhereInput
    data: XOR<OccupationUpdateWithoutVisasInput, OccupationUncheckedUpdateWithoutVisasInput>
  }

  export type OccupationUpdateWithoutVisasInput = {
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    assessingAuthorities?: AssessingAuthorityUpdateManyWithoutOccupationNestedInput
  }

  export type OccupationUncheckedUpdateWithoutVisasInput = {
    id?: IntFieldUpdateOperationsInput | number
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    assessingAuthorities?: AssessingAuthorityUncheckedUpdateManyWithoutOccupationNestedInput
  }

  export type OccupationCreateWithoutAssessingAuthoritiesInput = {
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    visas?: VisaCreateNestedManyWithoutOccupationInput
  }

  export type OccupationUncheckedCreateWithoutAssessingAuthoritiesInput = {
    id?: number
    occupation: string
    anzscoCode: string
    anzscoLink: string
    list: string
    state?: string | null
    visas?: VisaUncheckedCreateNestedManyWithoutOccupationInput
  }

  export type OccupationCreateOrConnectWithoutAssessingAuthoritiesInput = {
    where: OccupationWhereUniqueInput
    create: XOR<OccupationCreateWithoutAssessingAuthoritiesInput, OccupationUncheckedCreateWithoutAssessingAuthoritiesInput>
  }

  export type AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput = {
    link: string
  }

  export type AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput = {
    id?: number
    link: string
  }

  export type AssessingAuthorityLinkCreateOrConnectWithoutAssessingAuthorityInput = {
    where: AssessingAuthorityLinkWhereUniqueInput
    create: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput>
  }

  export type AssessingAuthorityLinkCreateManyAssessingAuthorityInputEnvelope = {
    data: AssessingAuthorityLinkCreateManyAssessingAuthorityInput | AssessingAuthorityLinkCreateManyAssessingAuthorityInput[]
    skipDuplicates?: boolean
  }

  export type OccupationUpsertWithoutAssessingAuthoritiesInput = {
    update: XOR<OccupationUpdateWithoutAssessingAuthoritiesInput, OccupationUncheckedUpdateWithoutAssessingAuthoritiesInput>
    create: XOR<OccupationCreateWithoutAssessingAuthoritiesInput, OccupationUncheckedCreateWithoutAssessingAuthoritiesInput>
    where?: OccupationWhereInput
  }

  export type OccupationUpdateToOneWithWhereWithoutAssessingAuthoritiesInput = {
    where?: OccupationWhereInput
    data: XOR<OccupationUpdateWithoutAssessingAuthoritiesInput, OccupationUncheckedUpdateWithoutAssessingAuthoritiesInput>
  }

  export type OccupationUpdateWithoutAssessingAuthoritiesInput = {
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    visas?: VisaUpdateManyWithoutOccupationNestedInput
  }

  export type OccupationUncheckedUpdateWithoutAssessingAuthoritiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    occupation?: StringFieldUpdateOperationsInput | string
    anzscoCode?: StringFieldUpdateOperationsInput | string
    anzscoLink?: StringFieldUpdateOperationsInput | string
    list?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    visas?: VisaUncheckedUpdateManyWithoutOccupationNestedInput
  }

  export type AssessingAuthorityLinkUpsertWithWhereUniqueWithoutAssessingAuthorityInput = {
    where: AssessingAuthorityLinkWhereUniqueInput
    update: XOR<AssessingAuthorityLinkUpdateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedUpdateWithoutAssessingAuthorityInput>
    create: XOR<AssessingAuthorityLinkCreateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedCreateWithoutAssessingAuthorityInput>
  }

  export type AssessingAuthorityLinkUpdateWithWhereUniqueWithoutAssessingAuthorityInput = {
    where: AssessingAuthorityLinkWhereUniqueInput
    data: XOR<AssessingAuthorityLinkUpdateWithoutAssessingAuthorityInput, AssessingAuthorityLinkUncheckedUpdateWithoutAssessingAuthorityInput>
  }

  export type AssessingAuthorityLinkUpdateManyWithWhereWithoutAssessingAuthorityInput = {
    where: AssessingAuthorityLinkScalarWhereInput
    data: XOR<AssessingAuthorityLinkUpdateManyMutationInput, AssessingAuthorityLinkUncheckedUpdateManyWithoutAssessingAuthorityInput>
  }

  export type AssessingAuthorityLinkScalarWhereInput = {
    AND?: AssessingAuthorityLinkScalarWhereInput | AssessingAuthorityLinkScalarWhereInput[]
    OR?: AssessingAuthorityLinkScalarWhereInput[]
    NOT?: AssessingAuthorityLinkScalarWhereInput | AssessingAuthorityLinkScalarWhereInput[]
    id?: IntFilter<"AssessingAuthorityLink"> | number
    link?: StringFilter<"AssessingAuthorityLink"> | string
    assessingAuthorityId?: IntFilter<"AssessingAuthorityLink"> | number
  }

  export type AssessingAuthorityCreateWithoutAssessingAuthorityLinkInput = {
    name: string
    occupation: OccupationCreateNestedOneWithoutAssessingAuthoritiesInput
  }

  export type AssessingAuthorityUncheckedCreateWithoutAssessingAuthorityLinkInput = {
    id?: number
    name: string
    occupationId: number
  }

  export type AssessingAuthorityCreateOrConnectWithoutAssessingAuthorityLinkInput = {
    where: AssessingAuthorityWhereUniqueInput
    create: XOR<AssessingAuthorityCreateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedCreateWithoutAssessingAuthorityLinkInput>
  }

  export type AssessingAuthorityUpsertWithoutAssessingAuthorityLinkInput = {
    update: XOR<AssessingAuthorityUpdateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedUpdateWithoutAssessingAuthorityLinkInput>
    create: XOR<AssessingAuthorityCreateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedCreateWithoutAssessingAuthorityLinkInput>
    where?: AssessingAuthorityWhereInput
  }

  export type AssessingAuthorityUpdateToOneWithWhereWithoutAssessingAuthorityLinkInput = {
    where?: AssessingAuthorityWhereInput
    data: XOR<AssessingAuthorityUpdateWithoutAssessingAuthorityLinkInput, AssessingAuthorityUncheckedUpdateWithoutAssessingAuthorityLinkInput>
  }

  export type AssessingAuthorityUpdateWithoutAssessingAuthorityLinkInput = {
    name?: StringFieldUpdateOperationsInput | string
    occupation?: OccupationUpdateOneRequiredWithoutAssessingAuthoritiesNestedInput
  }

  export type AssessingAuthorityUncheckedUpdateWithoutAssessingAuthorityLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    occupationId?: IntFieldUpdateOperationsInput | number
  }

  export type VisaCreateManyOccupationInput = {
    id?: number
    visaName: string
  }

  export type AssessingAuthorityCreateManyOccupationInput = {
    id?: number
    name: string
  }

  export type VisaUpdateWithoutOccupationInput = {
    visaName?: StringFieldUpdateOperationsInput | string
  }

  export type VisaUncheckedUpdateWithoutOccupationInput = {
    id?: IntFieldUpdateOperationsInput | number
    visaName?: StringFieldUpdateOperationsInput | string
  }

  export type VisaUncheckedUpdateManyWithoutOccupationInput = {
    id?: IntFieldUpdateOperationsInput | number
    visaName?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityUpdateWithoutOccupationInput = {
    name?: StringFieldUpdateOperationsInput | string
    assessingAuthorityLink?: AssessingAuthorityLinkUpdateManyWithoutAssessingAuthorityNestedInput
  }

  export type AssessingAuthorityUncheckedUpdateWithoutOccupationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    assessingAuthorityLink?: AssessingAuthorityLinkUncheckedUpdateManyWithoutAssessingAuthorityNestedInput
  }

  export type AssessingAuthorityUncheckedUpdateManyWithoutOccupationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityLinkCreateManyAssessingAuthorityInput = {
    id?: number
    link: string
  }

  export type AssessingAuthorityLinkUpdateWithoutAssessingAuthorityInput = {
    link?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityLinkUncheckedUpdateWithoutAssessingAuthorityInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }

  export type AssessingAuthorityLinkUncheckedUpdateManyWithoutAssessingAuthorityInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}