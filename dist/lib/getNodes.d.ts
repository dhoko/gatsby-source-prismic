import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Returns one or more nodes.
 *
 * @see gatsby-source-prismic/lib/getNode.ts
 */
export declare const getNodes: (fa: string[]) => RTE.ReaderTaskEither<import("..").Dependencies, never, readonly import("gatsby").Node[]>;
