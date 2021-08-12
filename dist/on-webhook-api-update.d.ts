import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies, PrismicWebhookBodyApiUpdate } from './types';
/**
 * To be executed in the `sourceNodes` API when a Prismic `api-update` webhook
 * is received.
 *
 * This handler is implemented specifically for Gatsby Preview support.
 *
 * This handler performs delta changes to documents that have been updated or
 * deleted.
 *
 * - UPDATED documents: Nodes are updated in the Gatsby data layer.
 * - DELETED documents: Nodes are deleted from the Gatsby data layer.
 *
 * After the handler is complete, the Gatsby data layer should be identical to
 * one that just performed a fresh bootstrap.
 */
export declare const onWebhookApiUpdate: (webhookBody: PrismicWebhookBodyApiUpdate) => RTE.ReaderTaskEither<Dependencies, Error, void>;
