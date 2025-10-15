// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Memory extends APIResource {
  /**
   * Performs semantic search across stored memories using natural language queries.
   * The system uses vector embeddings to find semantically similar content
   * regardless of exact keyword matches.
   *
   * Search features:
   *
   * - Semantic similarity matching
   * - Timeline-specific search
   * - Temporal filtering
   * - Relevance-based ranking
   *
   * @example
   * ```ts
   * const response = await client.query.memory.search({
   *   session_id: '01jxanr45haeswhay4n0q8340y',
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
   *   },
   *   terms: 'user interface preferences',
   * });
   * ```
   */
  search(body: MemorySearchParams, options?: RequestOptions): APIPromise<MemorySearchResponse> {
    return this._client.post('/v1/search_memory', { body, ...options });
  }
}

export interface MemorySearchResponse {
  /**
   * List of matching memory entries ordered by relevance
   */
  memories?: Array<MemorySearchResponse.Memory>;
}

export namespace MemorySearchResponse {
  export interface Memory {
    /**
     * Unique identifier for this memory entry
     */
    id?: string;

    /**
     * Optional agent identifier
     */
    agent?: string | null;

    /**
     * When this memory was created
     */
    at?: string | null;

    /**
     * Agent that created this memory
     */
    by?: string;

    /**
     * The actual memory content
     */
    content?: string;

    /**
     * What triggered this memory creation
     */
    due_to?: string;

    /**
     * Optional key for direct retrieval
     */
    key?: string | null;

    /**
     * Session identifier where this memory was created
     */
    session_id?: string;

    /**
     * Timeline this memory belongs to
     */
    timeline?: string;
  }
}

export interface MemorySearchParams {
  /**
   * Unique session identifier for the working memory instance
   */
  session_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: MemorySearchParams.ModuleID | MemorySearchParams.SmartMemory;

  /**
   * Natural language search query
   */
  terms: string;

  /**
   * End time for temporal filtering
   */
  end_time?: string | null;

  /**
   * Maximum number of most recent results to return
   */
  n_most_recent?: number | null;

  organization_id?: string;

  /**
   * Start time for temporal filtering
   */
  start_time?: string | null;

  /**
   * Timeline to filter search results
   */
  timeline?: string | null;

  user_id?: string;
}

export namespace MemorySearchParams {
  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    module_id: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smart_memory: SmartMemory.SmartMemory;
  }

  export namespace SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    export interface SmartMemory {
      /**
       * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      application_name?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace Memory {
  export { type MemorySearchResponse as MemorySearchResponse, type MemorySearchParams as MemorySearchParams };
}
