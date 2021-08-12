import * as gatsby from 'gatsby';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Registers the `AllDocumentTypes` GraphQL union type containing all provided
 * document types.
 *
 * @param types List of document types to include in the created union type.
 *
 * @returns The registered `AllDocumentTypes` type.
 */
export declare const createAllDocumentTypesType: (types: gatsby.GatsbyGraphQLObjectType[]) => RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLUnionType>;
