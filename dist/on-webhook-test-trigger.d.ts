import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from './types';
/**
 * To be executed in the `sourceNodes` API when a Prismic `test-trigger` webhook
 * is received.
 *
 * This handler simply prints a success string to the console to signify
 * receipt.
 */
export declare const onWebhookTestTrigger: RTE.ReaderTaskEither<Dependencies, never, void>;
