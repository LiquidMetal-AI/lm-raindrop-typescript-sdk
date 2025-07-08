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
   *     agentMemoryLocation: {
   *       agentMemory: { name: 'my-agent-memory' },
   *     },
   *     memoryIds: [
   *       '01jxanr45haeswhay4n0q8340y',
   *       '01jxanr45haeswhay4n0q8341z',
   *     ],
   *     sessionId: '01jxanr45haeswhay4n0q8340y',
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
   * Agent memory locator for targeting the correct agent memory instance
   */
  agentMemoryLocation: SummarizeMemoryCreateParams.AgentMemory | SummarizeMemoryCreateParams.ModuleID;

  /**
   * List of memory IDs to summarize
   */
  memoryIds: Array<string>;

  /**
   * Unique session identifier for the working memory instance
   */
  sessionId: string;

  /**
   * Optional custom system prompt for summarization
   */
  systemPrompt?: string | null;
}

export namespace SummarizeMemoryCreateParams {
  export interface AgentMemory {
    /**
     * **EXAMPLE** { name: 'my-agent-memory' } **REQUIRED** FALSE
     */
    agentMemory: AgentMemory.AgentMemory;
  }

  export namespace AgentMemory {
    /**
     * **EXAMPLE** { name: 'my-agent-memory' } **REQUIRED** FALSE
     */
    export interface AgentMemory {
      /**
       * The name of the agent memory **EXAMPLE** "my-agent-memory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      applicationName?: string | null;

      /**
       * Optional version of the agent memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }

  export interface ModuleID {
    /**
     * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p" **REQUIRED** FALSE
     */
    moduleId: string;
  }
}

export declare namespace SummarizeMemory {
  export {
    type SummarizeMemoryCreateResponse as SummarizeMemoryCreateResponse,
    type SummarizeMemoryCreateParams as SummarizeMemoryCreateParams,
  };
}
