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
   * const summarizePage = await client.summarizePage.create();
   * ```
   */
  create(body: SummarizePageCreateParams, options?: RequestOptions): APIPromise<SummarizePageCreateResponse> {
    return this._client.post('/v1/summarize_page', { body, ...options });
  }
}

export interface SummarizePageCreateResponse {
  /**
   * AI-generated summary including key themes and topics, content type distribution,
   * important findings, and document relationships
   */
  summary?: string;
}

export interface SummarizePageCreateParams {
  /**
   * Target page number (1-based)
   */
  page?: number;

  /**
   * Results per page. Affects summary granularity
   */
  page_size?: number;

  /**
   * Original search session identifier from the initial search
   */
  request_id?: string;
}

export declare namespace SummarizePage {
  export {
    type SummarizePageCreateResponse as SummarizePageCreateResponse,
    type SummarizePageCreateParams as SummarizePageCreateParams,
  };
}
