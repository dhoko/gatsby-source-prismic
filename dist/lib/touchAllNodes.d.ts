import * as RTE from 'fp-ts/ReaderTaskEither';
import { Dependencies } from '../types';
/**
 * Touches all nodes using the environment's `getAllNodes` and `touchNodes`
 * functions.
 */
export declare const touchAllNodes: () => RTE.ReaderTaskEither<Dependencies, never, void>;
