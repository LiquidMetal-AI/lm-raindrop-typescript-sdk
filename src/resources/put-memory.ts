// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PutMemory extends APIResource {
  /**
   * Stores a new memory entry in the agent's working memory. Memories are organized
   * by timeline and can include contextual information like the agent responsible
   * and triggering events.
   *
   * The system will:
   *
   * - Store the memory with automatic timestamping
   * - Generate embeddings for semantic search
   * - Associate the memory with the specified timeline
   * - Enable future retrieval and search operations
   *
   * @example
   * ```ts
   * const putMemory = await client.putMemory.create({
   *   content: 'User prefers dark theme for the interface',
   *   sessionId: '01jxanr45haeswhay4n0q8340y',
   *   smartMemoryLocation: {
   *     smart_memory: {
   *       name: 'memory-name',
   *       application_name: 'demo',
   *       version: '1234',
   *     },
   *   },
   * });
   * ```
   */
  create(body: PutMemoryCreateParams, options?: RequestOptions): APIPromise<PutMemoryCreateResponse> {
    return this._client.post('/v1/put_memory', { body, ...options });
  }
}

export interface PutMemoryCreateResponse {
  /**
   * Unique identifier for the stored memory entry
   */
  memoryId?: string;
}

export interface PutMemoryCreateParams {
  /**
   * The actual memory content to store
   */
  content: string;

  /**
   * Unique session identifier for the working memory instance
   */
  sessionId: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | PutMemoryCreateParams.SmartMemory;

  /**
   * Agent identifier responsible for this memory
   */
  agent?: string | null;

  /**
   * Optional key for direct memory retrieval
   */
  key?: string | null;

  /**
   * Timeline identifier for organizing related memories
   */
  timeline?: string | null;
}

export namespace PutMemoryCreateParams {
  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** TRUE
     */
    smartMemory: SmartMemory.SmartMemory;
  }

  export namespace SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** TRUE
     */
    export interface SmartMemory {
      /**
       * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      applicationName?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace PutMemory {
  export {
    type PutMemoryCreateResponse as PutMemoryCreateResponse,
    type PutMemoryCreateParams as PutMemoryCreateParams,
  };
}
