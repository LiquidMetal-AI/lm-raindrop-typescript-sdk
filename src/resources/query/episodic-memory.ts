// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class EpisodicMemory extends APIResource {
  /**
   * Searches across episodic memory documents stored in the SmartBucket. Allows
   * finding relevant past sessions based on natural language queries. Returns
   * summaries and metadata from stored episodic memory sessions.
   *
   * @example
   * ```ts
   * const response = await client.query.episodicMemory.search({
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
   *   },
   *   terms: 'sessions about user interface preferences',
   * });
   * ```
   */
  search(
    body: EpisodicMemorySearchParams,
    options?: RequestOptions,
  ): APIPromise<EpisodicMemorySearchResponse> {
    return this._client.post('/v1/search_episodic_memory', { body, ...options });
  }
}

export interface EpisodicMemorySearchResponse {
  /**
   * List of matching episodic memory entries ordered by relevance
   */
  entries?: Array<EpisodicMemorySearchResponse.Entry>;

  /**
   * Pagination information for the search results
   */
  pagination?: EpisodicMemorySearchResponse.Pagination | null;
}

export namespace EpisodicMemorySearchResponse {
  export interface Entry {
    /**
     * Agent that created this episodic memory
     */
    agent?: string;

    /**
     * When this episodic memory was created
     */
    created_at?: string;

    /**
     * Duration of the session in milliseconds
     */
    duration?: number | string;

    /**
     * Number of individual memory entries in this session
     */
    entry_count?: number;

    /**
     * Relevance score for this search result
     */
    score?: number | null;

    /**
     * Session identifier for this episodic memory
     */
    session_id?: string;

    /**
     * AI-generated summary of the session
     */
    summary?: string;

    /**
     * Number of different timelines in this session
     */
    timeline_count?: number;
  }

  /**
   * Pagination information for the search results
   */
  export interface Pagination {
    /**
     * Whether there are more results available
     */
    has_more?: boolean;

    /**
     * Current page number
     */
    page?: number;

    /**
     * Number of results per page
     */
    page_size?: number;

    /**
     * Total number of results available
     */
    total?: number;

    /**
     * Total number of pages available
     */
    total_pages?: number;
  }
}

export interface EpisodicMemorySearchParams {
  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: EpisodicMemorySearchParams.ModuleID | EpisodicMemorySearchParams.SmartMemory;

  /**
   * Natural language search query to find relevant episodic memory sessions
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

  user_id?: string;
}

export namespace EpisodicMemorySearchParams {
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

export declare namespace EpisodicMemory {
  export {
    type EpisodicMemorySearchResponse as EpisodicMemorySearchResponse,
    type EpisodicMemorySearchParams as EpisodicMemorySearchParams,
  };
}
