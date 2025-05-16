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
   */
  createSummary(
    body: SummarizePageCreateSummaryParams,
    options?: RequestOptions,
  ): APIPromise<SummarizePageCreateSummaryResponse> {
    return this._client.post('/v1/summarize_page', { body, ...options });
  }
}

export interface SummarizePageCreateSummaryResponse {
  /**
   * **DESCRIPTION** AI-generated summary including key themes and topics, content
   * type distribution, important findings, and document relationships **EXAMPLE**
   * "The search results contain information about..."
   */
  summary?: string;
}

export interface SummarizePageCreateSummaryParams {
  organization_id?: string;

  /**
   * **DESCRIPTION** Target page number (1-based) **EXAMPLE** 1 **REQUIRED** TRUE
   */
  page?: number;

  /**
   * **DESCRIPTION** Results per page. Affects summary granularity **EXAMPLE** 10
   * **REQUIRED** TRUE
   */
  page_size?: number;

  /**
   * **DESCRIPTION** Original search session identifier from the initial search
   * **EXAMPLE** "123e4567-e89b-12d3-a456-426614174000" **REQUIRED** TRUE
   */
  request_id?: string;

  user_id?: string;
}

export declare namespace SummarizePage {
  export {
    type SummarizePageCreateSummaryResponse as SummarizePageCreateSummaryResponse,
    type SummarizePageCreateSummaryParams as SummarizePageCreateSummaryParams,
  };
}
