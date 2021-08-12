import * as gatsby from 'gatsby';
import * as prismicT from '@prismicio/types';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Creates a GraphQL type for a Custom Type. This function also registers a
 * root-level typepath for the Custom Type.
 *
 * @param name API ID of the Custom Type
 * @param schema Schema definition for the Custom Type.
 *
 * @returns GraphQL type for the Custom Type.
 */
export declare const createCustomType: (name: string, schema: prismicT.CustomTypeModel) => RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLObjectType>;
