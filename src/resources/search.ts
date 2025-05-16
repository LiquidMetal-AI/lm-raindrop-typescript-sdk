// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *
   * @example
   * ```ts
   * const response = await client.search.find();
   * ```
   */
  find(body: SearchFindParams, options?: RequestOptions): APIPromise<SearchFindResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export interface SearchFindResponse {
  /**
   * Pagination details for result navigation
   */
  pagination?: SearchFindResponse.Pagination;

  /**
   * Matched results with metadata
   */
  results?: Array<SearchFindResponse.Result>;
}

export namespace SearchFindResponse {
  /**
   * Pagination details for result navigation
   */
  export interface Pagination {
    /**
     * Indicates more results available. Used for infinite scroll implementation
     */
    has_more?: boolean;

    /**
     * Current page number (1-based)
     */
    page?: number;

    /**
     * Results per page. May be adjusted for performance
     */
    page_size?: number;

    /**
     * Total number of available results
     */
    total?: number;

    /**
     * Total available pages. Calculated as ceil(total/page_size)
     */
    total_pages?: number;
  }

  export interface Result {
    /**
     * Unique identifier for this text segment. Used for deduplication and result
     * tracking
     */
    chunk_signature?: string | null;

    /**
     * Vector representation for similarity matching. Used in semantic search
     * operations
     */
    embed?: string | null;

    /**
     * Parent document identifier. Links related content chunks together
     */
    payload_signature?: string | null;

    /**
     * Relevance score (0.0 to 1.0). Higher scores indicate better matches
     */
    score?: number | null;

    /**
     * Source document references. Contains bucket and object information
     */
    source?: Result.Source;

    /**
     * The actual content of the result. May be a document excerpt or full content
     */
    text?: string | null;

    /**
     * Content MIME type. Helps with proper result rendering
     */
    type?: string | null;
  }

  export namespace Result {
    /**
     * Source document references. Contains bucket and object information
     */
    export interface Source {
      /**
       * The bucket information containing this result
       */
      bucket?: Source.Bucket;

      /**
       * The object key within the bucket
       */
      object?: string;
    }

    export namespace Source {
      /**
       * The bucket information containing this result
       */
      export interface Bucket {
        application_name?: string;

        application_version_id?: string;

        bucket_name?: string;

        module_id?: string;
      }
    }
  }
}

export interface SearchFindParams {
  /**
   * The buckets to search. If provided, the search will only return results from
   * these buckets
   */
  bucket_locations?: Array<SearchFindParams.Bucket | SearchFindParams.ModuleID>;

  /**
   * Natural language search query that can include complex criteria. Supports
   * queries like finding documents with specific content types, PII, or semantic
   * meaning
   */
  input?: string;

  /**
   * Client-provided search session identifier. Required for pagination and result
   * tracking. We recommend using a UUID or ULID for this value
   */
  request_id?: string;
}

export namespace SearchFindParams {
  export interface Bucket {
    /**
     * BucketName represents a bucket name with an optional version
     */
    bucket: Bucket.Bucket;
  }

  export namespace Bucket {
    /**
     * BucketName represents a bucket name with an optional version
     */
    export interface Bucket {
      /**
       * Optional Application
       */
      application_name?: string | null;

      /**
       * The name of the bucket
       */
      name?: string;

      /**
       * Optional version of the bucket
       */
      version?: string | null;
    }
  }

  export interface ModuleID {
    module_id: string;
  }
}

export declare namespace Search {
  export { type SearchFindResponse as SearchFindResponse, type SearchFindParams as SearchFindParams };
}
