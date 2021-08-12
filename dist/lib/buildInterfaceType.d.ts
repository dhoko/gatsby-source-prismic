import * as gatsby from 'gatsby';
import * as gqlc from 'graphql-compose';
import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Builds a GraphQL interface type using the environment's `buildInterfaceType`
 * function.
 *
 * @param config Configuration for the interface type.
 *
 * @return Return value of the environment's `buildInterfaceType` function.
 */
export declare const buildInterfaceType: <TSource, TContext>(config: gqlc.InterfaceTypeComposerAsObjectDefinition<TSource, TContext>) => RTE.ReaderTaskEither<Dependencies, never, gatsby.GatsbyGraphQLInterfaceType>;
