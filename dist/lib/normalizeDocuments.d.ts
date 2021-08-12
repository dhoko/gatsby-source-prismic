import * as RTE from 'fp-ts/ReaderTaskEither';
/**
 * Normalizes one or more documents.
 *
 * @see gatsby-source-prismic/lib/normalizeDocument.ts
 */
export declare const normalizeDocuments: (fa: import("@prismicio/types").PrismicDocument<Record<string, unknown>, string, string>[]) => RTE.ReaderTaskEither<import("..").Dependencies, Error, readonly import("@prismicio/types").PrismicDocument<Record<string, unknown>, string, string>[]>;
