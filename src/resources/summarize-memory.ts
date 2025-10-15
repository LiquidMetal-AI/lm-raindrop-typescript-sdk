// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SummarizeMemory extends APIResource {
  /**
   * Generates intelligent summaries of a collection of memories using AI. Can
   * optionally accept custom system prompts to guide the summarization style.
   *
   * The summarization system:
   *
   * - Identifies key themes and patterns
   * - Extracts important events and decisions
   * - Maintains temporal context
   * - Supports custom summarization instructions
   *
   * @example
   * ```ts
   * const summarizeMemory = await client.summarizeMemory.create(
   *   {
   *     memory_ids: [
   *       '01jxanr45haeswhay4n0q8340y',
   *       '01jxanr45haeswhay4n0q8341z',
   *     ],
   *     session_id: '01jxanr45haeswhay4n0q8340y',
   *     smart_memory_location: {
   *       smart_memory: { name: 'memory-name' },
   *     },
   *   },
   * );
   * ```
   */
  create(
    body: SummarizeMemoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<SummarizeMemoryCreateResponse> {
    return this._client.post('/v1/summarize_memory', { body, ...options });
  }
}

export interface SummarizeMemoryCreateResponse {
  /**
   * List of memory IDs that were summarized
   */
  summarized_memory_ids?: Array<string>;

  /**
   * AI-generated summary of the memories
   */
  summary?: string;
}

export interface SummarizeMemoryCreateParams {
  /**
   * List of memory IDs to summarize
   */
  memory_ids: Array<string>;

  /**
   * Unique session identifier for the working memory instance
   */
  session_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: SummarizeMemoryCreateParams.ModuleID | SummarizeMemoryCreateParams.SmartMemory;

  organization_id?: string;

  /**
   * Optional custom system prompt for summarization
   */
  system_prompt?: string | null;

  user_id?: string;
}

export namespace SummarizeMemoryCreateParams {
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
    smart_memory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }
}

export declare namespace SummarizeMemory {
  export {
    type SummarizeMemoryCreateResponse as SummarizeMemoryCreateResponse,
    type SummarizeMemoryCreateParams as SummarizeMemoryCreateParams,
  };
}
