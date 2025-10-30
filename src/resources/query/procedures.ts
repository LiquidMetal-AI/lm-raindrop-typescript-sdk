// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Procedures extends APIResource {
  /**
   * Searches procedures using text matching across keys and values. Supports
   * filtering by procedure keys, values, or both with fuzzy matching and relevance
   * scoring.
   *
   * TODO: Future enhancement will include vector search for semantic similarity.
   *
   * @example
   * ```ts
   * const response = await client.query.procedures.search({
   *   smartMemoryLocation: { moduleId: 'moduleId' },
   *   terms: 'system prompt',
   * });
   * ```
   */
  search(body: ProcedureSearchParams, options?: RequestOptions): APIPromise<ProcedureSearchResponse> {
    return this._client.post('/v1/search_procedures', { body, ...options });
  }
}

export interface ProcedureSearchResponse {
  /**
   * List of matching procedures ordered by relevance
   */
  procedures?: Array<ProcedureSearchResponse.Procedure>;
}

export namespace ProcedureSearchResponse {
  export interface Procedure {
    /**
     * When this procedure was first created
     */
    createdAt?: string;

    /**
     * Unique key for this procedure
     */
    key?: string;

    /**
     * When this procedure was last updated
     */
    updatedAt?: string;

    /**
     * The procedure content
     */
    value?: string;
  }
}

export interface ProcedureSearchParams {
  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: ProcedureSearchParams.ModuleID | ProcedureSearchParams.SmartMemory;

  /**
   * Search terms to match against procedure keys and values
   */
  terms: string;

  /**
   * Maximum number of results to return (Alias: accepts both 'nMostRecent' and
   * 'n_most_recent')
   */
  n_most_recent?: number | null;

  /**
   * Maximum number of results to return
   */
  nMostRecent?: number | null;

  /**
   * Optional procedural memory ID to use for actor isolation (Alias: accepts both
   * 'proceduralMemoryId' and 'procedural_memory_id')
   */
  procedural_memory_id?: string | null;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  proceduralMemoryId?: string | null;

  /**
   * Whether to search in procedure keys (Alias: accepts both 'searchKeys' and
   * 'search_keys')
   */
  search_keys?: boolean | null;

  /**
   * Whether to search in procedure values (Alias: accepts both 'searchValues' and
   * 'search_values')
   */
  search_values?: boolean | null;

  /**
   * Whether to search in procedure keys
   */
  searchKeys?: boolean | null;

  /**
   * Whether to search in procedure values
   */
  searchValues?: boolean | null;

  /**
   * Smart memory locator for targeting the correct smart memory instance (Alias:
   * accepts both 'smartMemoryLocation' and 'smart_memory_location')
   */
  smart_memory_location?: ProcedureSearchParams.ModuleID | ProcedureSearchParams.SmartMemory;
}

export namespace ProcedureSearchParams {
  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    moduleId: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }

  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    moduleId: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }
}

export declare namespace Procedures {
  export {
    type ProcedureSearchResponse as ProcedureSearchResponse,
    type ProcedureSearchParams as ProcedureSearchParams,
  };
}
