// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChunkSearchAPI from './chunk-search';
import * as DocumentQueryAPI from './document-query';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
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
   * - 'Find me all audio files that contain information about the weather in SF in
   *   2024'
   *
   * Key capabilities:
   *
   * - Natural language query understanding
   * - Content-based search across text, images, and audio
   * - Automatic PII detection
   * - Multi-modal search (text, images, audio)
   */
  run(body: SearchRunParams, options?: RequestOptions): APIPromise<SearchRunResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export interface PaginationInfo {
  /**
   * **DESCRIPTION** Indicates more results available. Used for infinite scroll
   * implementation **EXAMPLE** true
   */
  has_more?: boolean;

  /**
   * **DESCRIPTION** Current page number (1-based) **EXAMPLE** 1
   */
  page?: number;

  /**
   * **DESCRIPTION** Results per page. May be adjusted for performance **EXAMPLE** 15
   */
  page_size?: number;

  /**
   * **DESCRIPTION** Total number of available results **EXAMPLE** 1020
   */
  total?: number;

  /**
   * **DESCRIPTION** Total available pages. Calculated as ceil(total/page_size)
   * **EXAMPLE** 68
   */
  total_pages?: number;
}

export interface SearchRunResponse {
  /**
   * **DESCRIPTION** Pagination details for result navigation **EXAMPLE** {"total":
   * 100, "page": 1, "page_size": 10, "total_pages": 10, "has_more": true}
   */
  pagination?: PaginationInfo;

  /**
   * **DESCRIPTION** Matched results with metadata **EXAMPLE** [{"chunk_signature":
   * "chunk_123abc", "text": "Sample text", "score": 0.95}]
   */
  results?: Array<ChunkSearchAPI.TextResult>;
}

export interface SearchRunParams {
  /**
   * **DESCRIPTION** The buckets to search. If provided, the search will only return
   * results from these buckets **EXAMPLE** [{"bucket": {"name": "my-bucket",
   * "version": "01jtgtraw3b5qbahrhvrj3ygbb", "application_name": "my-app"}}]
   * **REQUIRED** TRUE
   */
  bucket_locations?: Array<DocumentQueryAPI.BucketLocator>;

  /**
   * **DESCRIPTION** Natural language search query that can include complex criteria.
   * Supports queries like finding documents with specific content types, PII, or
   * semantic meaning **EXAMPLE** "Show me documents containing credit card numbers
   * or social security numbers" **REQUIRED** TRUE
   */
  input?: string;

  organization_id?: string;

  /**
   * **DESCRIPTION** Client-provided search session identifier. Required for
   * pagination and result tracking. We recommend using a UUID or ULID for this value
   * **EXAMPLE** "123e4567-e89b-12d3-a456-426614174000" **REQUIRED** TRUE
   */
  request_id?: string;

  user_id?: string;
}

export declare namespace Search {
  export {
    type PaginationInfo as PaginationInfo,
    type SearchRunResponse as SearchRunResponse,
    type SearchRunParams as SearchRunParams,
  };
}
