// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SummarizePage extends APIResource {
  /**
   * Generates intelligent summaries of search result pages, helping users quickly
   * understand large result sets without reading through every document. The system
   * analyzes the content of all results on a given page and generates a detailed
   * overview.
   *
   * The summary system:
   *
   * - Identifies key themes and topics
   * - Extracts important findings
   * - Highlights document relationships
   * - Provides content type distribution
   * - Summarizes metadata patterns
   *
   * This is particularly valuable when dealing with:
   *
   * - Large document collections
   * - Mixed content types
   * - Technical documentation
   * - Research materials
   *
   * @example
   * ```ts
   * const response = await client.summarizePage.sumarizePage({
   *   page: 1,
   *   page_size: 10,
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  sumarizePage(
    body: SummarizePageSumarizePageParams,
    options?: RequestOptions,
  ): APIPromise<SummarizePageSumarizePageResponse> {
    return this._client.post('/v1/summarize_page', { body, ...options });
  }
}

export interface SummarizePageSumarizePageResponse {
  /**
   * AI-generated summary including key themes and topics, content type distribution,
   * important findings, and document relationships
   */
  summary?: string;
}

export interface SummarizePageSumarizePageParams {
  /**
   * Target page number (1-based)
   */
  page: number;

  /**
   * Results per page. Affects summary granularity
   */
  page_size: number;

  /**
   * Original search session identifier from the initial search
   */
  request_id: string;
}

export declare namespace SummarizePage {
  export {
    type SummarizePageSumarizePageResponse as SummarizePageSumarizePageResponse,
    type SummarizePageSumarizePageParams as SummarizePageSumarizePageParams,
  };
}
