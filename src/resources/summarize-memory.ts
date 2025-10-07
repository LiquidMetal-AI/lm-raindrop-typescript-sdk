// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *     memoryIds: [
   *       '01jxanr45haeswhay4n0q8340y',
   *       '01jxanr45haeswhay4n0q8341z',
   *     ],
   *     sessionId: '01jxanr45haeswhay4n0q8340y',
   *     smartMemoryLocation: {
   *       smart_memory: {
   *         name: 'memory-name',
   *         application_name: 'demo',
   *         version: '1234',
   *       },
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
  summarizedMemoryIds?: Array<string>;

  /**
   * AI-generated summary of the memories
   */
  summary?: string;
}

export interface SummarizeMemoryCreateParams {
  /**
   * List of memory IDs to summarize
   */
  memoryIds: Array<string>;

  /**
   * Unique session identifier for the working memory instance
   */
  sessionId: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | SummarizeMemoryCreateParams.SmartMemory;

  /**
   * Optional custom system prompt for summarization
   */
  systemPrompt?: string | null;
}

export namespace SummarizeMemoryCreateParams {
  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: SmartMemory.SmartMemory;
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
      applicationName?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace SummarizeMemory {
  export {
    type SummarizeMemoryCreateResponse as SummarizeMemoryCreateResponse,
    type SummarizeMemoryCreateParams as SummarizeMemoryCreateParams,
  };
}
