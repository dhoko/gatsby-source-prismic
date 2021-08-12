import * as gatsby from 'gatsby'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as R from 'fp-ts/Record'
import * as A from 'fp-ts/Array'
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { pipe, constVoid } from 'fp-ts/function'

import { createAllDocumentTypesType } from './lib/createAllDocumentTypesType'
import { createCustomType } from './lib/createCustomType'
import { createTypes } from './lib/createTypes'
import { throwError } from './lib/throwError'

import { buildEmbedType } from './builders/buildEmbedType'
import { buildGeoPointType } from './builders/buildGeoPointType'
import { buildImageDimensionsType } from './builders/buildImageDimensionsType'
import { buildImageThumbnailType } from './builders/buildImageThumbnailType'
import { buildImgixImageTypes } from './builders/buildImgixImageTypes'
import { buildLinkType } from './builders/buildLinkType'
import { buildLinkTypeEnumType } from './builders/buildLinkTypeEnumType'
import { buildSliceInterface } from './builders/buildSliceInterface'
import { buildStructuredTextType } from './builders/buildStructuredTextType'
import { buildTypePathType } from './builders/buildTypePathType'

import { Dependencies, Mutable, PluginOptions } from './types'
import { buildDependencies } from './buildDependencies'
import { buildAlternateLanguageType } from './builders/buildAlternateLanguageType'

const GatsbyGraphQLTypeM = A.getMonoid<gatsby.GatsbyGraphQLType>()

/**
 * Create general types used by other types. Some types are global (i.e. not
 * repository-specific), while others are repository-specific, depending on
 * the type's use of custom plugin options.
 */
export const createBaseTypes: RTE.ReaderTaskEither<Dependencies, never, void> =
  pipe(
    RTE.ask<Dependencies>(),
    RTE.bind('baseTypes', () =>
      pipe(
        [
          buildAlternateLanguageType,
          buildEmbedType,
          buildGeoPointType,
          buildImageDimensionsType,
          buildImageThumbnailType,
          buildLinkType,
          buildLinkTypeEnumType,
          buildSliceInterface,
          buildStructuredTextType,
          buildTypePathType,
        ],
        RTE.sequenceArray,
      ),
    ),
    RTE.bind('imgixTypes', () => buildImgixImageTypes),
    RTE.map((scope) =>
      GatsbyGraphQLTypeM.concat(
        scope.baseTypes as Mutable<typeof scope.baseTypes>,
        scope.imgixTypes,
      ),
    ),
    RTE.chain(createTypes),
    RTE.map(constVoid),
  )

/**
 * Create types for all repository custom types using the JSON schemas provided
 * at `pluginOptions.schemas`.
 */
const createCustomTypes: RTE.ReaderTaskEither<
  Dependencies,
  never,
  gatsby.GatsbyGraphQLObjectType[]
> = pipe(
  RTE.asks((deps: Dependencies) => deps.pluginOptions.schemas),
  RTE.map(R.mapWithIndex(createCustomType)),
  RTE.chain(R.sequence(RTE.ApplicativeSeq)),
  RTE.map(R.collect((_, value) => value)),
)

/**
 * To be executed in the `createSchemaCustomization` API.
 */
const createSchemaCustomizationProgram: RTE.ReaderTaskEither<
  Dependencies,
  never,
  void
> = pipe(
  RTE.ask<Dependencies>(),
  RTE.chainFirst(() => createBaseTypes),
  RTE.bind('types', () => createCustomTypes),
  RTE.chainFirst((scope) => createAllDocumentTypesType(scope.types)),
  RTE.map(constVoid),
)

/**
 * Create all GraphQL types for the plugin's configured Prismic repository.
 *
 * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createSchemaCustomization
 */
export const createSchemaCustomization: NonNullable<
  gatsby.GatsbyNode['createSchemaCustomization']
> = async (
  gatsbyContext: gatsby.CreateSchemaCustomizationArgs,
  pluginOptions: PluginOptions,
) =>
  await pipe(
    createSchemaCustomizationProgram(
      buildDependencies(gatsbyContext, pluginOptions),
    ),
    TE.fold(throwError, () => T.of(void 0)),
  )()
