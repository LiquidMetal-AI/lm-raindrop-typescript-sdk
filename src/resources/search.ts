// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SearchPage, type SearchPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Retrieve additional pages from a previous search. This endpoint enables
   * navigation through large result sets while maintaining search context and result
   * relevance. Retrieving paginated results requires a valid `request_id` from a
   * previously completed search.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const textResult of client.search.retrieve({
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * })) {
   *   // ...
   * }
   * ```
   */
  retrieve(
    query: SearchRetrieveParams,
    options?: RequestOptions,
  ): PagePromise<TextResultsSearchPage, TextResult> {
    return this._client.getAPIList('/v1/search', SearchPage<TextResult>, { query, ...options });
  }

  /**
   * Primary search endpoint that provides advanced search capabilities across all
   * document types stored in SmartBuckets.
   *
   * Supports recursive object search within objects, enabling nested content search
   * like embedded images, text content, and personally identifiable information
   * (PII).
   *
   * The system supports complex queries like:
   *
   * - 'Show me documents containing credit card numbers or social security numbers'
   * - 'Find images of landscapes taken during sunset'
   * - 'Get documents mentioning revenue forecasts from Q4 2023'
   * - 'Find me all PDF documents that contain pictures of a cat'
   * - 'Find me all audio files that contain infomration about the weather in SF in
   *   2024'
   *
   * Key capabilities:
   *
   * - Natural language query understanding
   * - Content-based search across text, images, and audio
   * - Automatic PII detection
   * - Multi-modal search (text, images, audio)
   *
   * @example
   * ```ts
   * const searchResponse = await client.search.find({
   *   bucket_ids: [
   *     '01jtgtrd37acrqf7k24dggg31s',
   *     '01jtgtrd37acrqf7k24dggg31v',
   *   ],
   *   input:
   *     'Find me all documents with pictures of a cat that do not talk about dogs',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  find(body: SearchFindParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export type TextResultsSearchPage = SearchPage<TextResult>;

export interface SearchResponse {
  pagination: SearchResponse.Pagination;

  /**
   * Matched results with metadata
   */
  results: Array<TextResult>;
}

export namespace SearchResponse {
  export interface Pagination {
    /**
     * Indicates more results available
     */
    has_more: boolean;

    /**
     * Current page number (1-based)
     */
    page: number;

    /**
     * Results per page
     */
    page_size: number;

    /**
     * Total number of available results
     */
    total: number;

    /**
     * Total available pages
     */
    total_pages: number;
  }
}

export interface TextResult {
  /**
   * Unique identifier for this text segment
   */
  chunk_signature: string;

  /**
   * Parent document identifier
   */
  payload_signature?: string;

  /**
   * Relevance score (0.0 to 1.0)
   */
  score?: number;

  /**
   * Source document information in JSON format
   */
  source?: string;

  /**
   * The actual content of the result
   */
  text?: string;

  /**
   * Content MIME type
   */
  type?: 'text/plain' | 'application/pdf' | 'image/jpeg' | 'image/png';
}

export interface SearchRetrieveParams extends SearchPageParams {
  /**
   * Client-provided search session identifier from the initial search
   */
  request_id: string;

  /**
   * Results per page
   */
  page_size?: number;
}

export interface SearchFindParams {
  /**
   * Optional list of specific bucket IDs to search in. If not provided, searches the
   * latest version of all buckets
   */
  bucket_ids: Array<string>;

  /**
   * Natural language search query that can include complex criteria
   */
  input: string;

  /**
   * Client-provided search session identifier. Required for pagination and result
   * tracking. We recommend using a UUID or ULID for this value.
   */
  request_id: string;
}

export declare namespace Search {
  export {
    type SearchResponse as SearchResponse,
    type TextResult as TextResult,
    type TextResultsSearchPage as TextResultsSearchPage,
    type SearchRetrieveParams as SearchRetrieveParams,
    type SearchFindParams as SearchFindParams,
  };
}
