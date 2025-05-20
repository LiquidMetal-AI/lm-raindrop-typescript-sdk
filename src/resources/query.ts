// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Query extends APIResource {
  /**
   * Chunk Search provides search capabilities that serve as a complete drop-in
   * replacement for traditional RAG pipelines. This system enables AI agents to
   * leverage private data stored in SmartBuckets with zero additional configuration.
   *
   * Each input query is processed by our AI agent to determine the best way to
   * search the data. The system will then return the most relevant results from the
   * data ranked by relevance on the input query.
   *
   * @example
   * ```ts
   * const response = await client.query.chunkSearch({
   *   bucket_locations: [{ bucket: { name: 'my-bucket' } }],
   *   input: 'Find documents about revenue in Q4 2023',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  chunkSearch(body: QueryChunkSearchParams, options?: RequestOptions): APIPromise<QueryChunkSearchResponse> {
    return this._client.post('/v1/chunk_search', { body, ...options });
  }

  /**
   * Enables natural conversational interactions with documents stored in
   * SmartBuckets. This endpoint allows users to ask questions, request summaries,
   * and explore document content through an intuitive conversational interface. The
   * system understands context and can handle complex queries about document
   * contents.
   *
   * The query system maintains conversation context throught the request_id,
   * enabling follow-up questions and deep exploration of document content. It works
   * across all supported file types and automatically handles multi-page documents,
   * making complex file interaction as simple as having a conversation.
   *
   * The system will:
   *
   * - Maintain conversation history for context when using the same request_id
   * - Process questions against file content
   * - Generate contextual, relevant responses
   *
   * Document query is supported for all file types, including PDFs, images, and
   * audio files.
   *
   * @example
   * ```ts
   * const response = await client.query.documentQuery({
   *   bucket_location: { bucket: { name: 'my-bucket' } },
   *   input: 'What are the key points in this document?',
   *   object_id: 'document.pdf',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  documentQuery(
    body: QueryDocumentQueryParams,
    options?: RequestOptions,
  ): APIPromise<QueryDocumentQueryResponse> {
    return this._client.post('/v1/document_query', { body, ...options });
  }

  /**
   * Retrieve additional pages from a previous search. This endpoint enables
   * navigation through large result sets while maintaining search context and result
   * relevance. Retrieving paginated results requires a valid request_id from a
   * previously completed search.
   *
   * @example
   * ```ts
   * const response = await client.query.getPaginatedSearch({
   *   page: 2,
   *   page_size: 10,
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  getPaginatedSearch(
    body: QueryGetPaginatedSearchParams,
    options?: RequestOptions,
  ): APIPromise<QueryGetPaginatedSearchResponse> {
    return this._client.post('/v1/get_paginated_results', { body, ...options });
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
   * const response = await client.query.search({
   *   bucket_locations: [{ bucket: { name: 'my-bucket' } }],
   *   input:
   *     'Show me documents containing credit card numbers or social security numbers',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  search(body: QuerySearchParams, options?: RequestOptions): APIPromise<QuerySearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }

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
   * const response = await client.query.sumarizePage({
   *   page: 1,
   *   page_size: 10,
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  sumarizePage(
    body: QuerySumarizePageParams,
    options?: RequestOptions,
  ): APIPromise<QuerySumarizePageResponse> {
    return this._client.post('/v1/summarize_page', { body, ...options });
  }
}

export type BucketLocator = BucketLocator.Bucket | BucketLocator.ModuleID;

export namespace BucketLocator {
  export interface Bucket {
    /**
     * **EXAMPLE** { name: 'my-smartbucket' } **REQUIRED** FALSE
     */
    bucket: Bucket.Bucket;
  }

  export namespace Bucket {
    /**
     * **EXAMPLE** { name: 'my-smartbucket' } **REQUIRED** FALSE
     */
    export interface Bucket {
      /**
       * The name of the bucket **EXAMPLE** "my-bucket" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      application_name?: string | null;

      /**
       * Optional version of the bucket **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }

  export interface ModuleID {
    /**
     * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p" **REQUIRED** FALSE
     */
    module_id: string;
  }
}

export interface QueryChunkSearchResponse {
  /**
   * Ordered list of relevant text segments. Each result includes full context and
   * metadata
   */
  results?: Array<QueryChunkSearchResponse.Result>;
}

export namespace QueryChunkSearchResponse {
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
        /**
         * **EXAMPLE** "my-app"
         */
        application_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        application_version_id?: string;

        /**
         * **EXAMPLE** "my-smartbucket"
         */
        bucket_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        module_id?: string;
      }
    }
  }
}

export interface QueryDocumentQueryResponse {
  /**
   * AI-generated response that may include direct document quotes, content
   * summaries, contextual explanations, references to specific sections, and related
   * content suggestions
   */
  answer?: string;
}

export interface QueryGetPaginatedSearchResponse {
  /**
   * Updated pagination information
   */
  pagination?: QueryGetPaginatedSearchResponse.Pagination;

  /**
   * Page results with full metadata
   */
  results?: Array<QueryGetPaginatedSearchResponse.Result>;
}

export namespace QueryGetPaginatedSearchResponse {
  /**
   * Updated pagination information
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
        /**
         * **EXAMPLE** "my-app"
         */
        application_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        application_version_id?: string;

        /**
         * **EXAMPLE** "my-smartbucket"
         */
        bucket_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        module_id?: string;
      }
    }
  }
}

export interface QuerySearchResponse {
  /**
   * Pagination details for result navigation
   */
  pagination?: QuerySearchResponse.Pagination;

  /**
   * Matched results with metadata
   */
  results?: Array<QuerySearchResponse.Result>;
}

export namespace QuerySearchResponse {
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
        /**
         * **EXAMPLE** "my-app"
         */
        application_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        application_version_id?: string;

        /**
         * **EXAMPLE** "my-smartbucket"
         */
        bucket_name?: string;

        /**
         * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
         */
        module_id?: string;
      }
    }
  }
}

export interface QuerySumarizePageResponse {
  /**
   * AI-generated summary including key themes and topics, content type distribution,
   * important findings, and document relationships
   */
  summary?: string;
}

export interface QueryChunkSearchParams {
  /**
   * The buckets to search. If provided, the search will only return results from
   * these buckets
   */
  bucket_locations: Array<BucketLocator>;

  /**
   * Natural language query or question. Can include complex criteria and
   * relationships. The system will optimize the search strategy based on this input
   */
  input: string;

  /**
   * Client-provided search session identifier. Required for pagination and result
   * tracking. We recommend using a UUID or ULID for this value
   */
  request_id: string;
}

export interface QueryDocumentQueryParams {
  /**
   * The storage bucket containing the target document. Must be a valid, registered
   * Smart Bucket. Used to identify which bucket to query against
   */
  bucket_location: BucketLocator;

  /**
   * User's input or question about the document. Can be natural language questions,
   * commands, or requests. The system will process this against the document content
   */
  input: string;

  /**
   * Document identifier within the bucket. Typically matches the storage path or
   * key. Used to identify which document to chat with
   */
  object_id: string;

  /**
   * Client-provided conversation session identifier. Required for maintaining
   * context in follow-up questions. We recommend using a UUID or ULID for this value
   */
  request_id: string;
}

export interface QueryGetPaginatedSearchParams {
  /**
   * Requested page number
   */
  page: number | null;

  /**
   * Results per page
   */
  page_size: number | null;

  /**
   * Original search session identifier from the initial search
   */
  request_id: string;
}

export interface QuerySearchParams {
  /**
   * The buckets to search. If provided, the search will only return results from
   * these buckets
   */
  bucket_locations: Array<BucketLocator>;

  /**
   * Natural language search query that can include complex criteria. Supports
   * queries like finding documents with specific content types, PII, or semantic
   * meaning
   */
  input: string;

  /**
   * Client-provided search session identifier. Required for pagination and result
   * tracking. We recommend using a UUID or ULID for this value
   */
  request_id: string;
}

export interface QuerySumarizePageParams {
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

export declare namespace Query {
  export {
    type BucketLocator as BucketLocator,
    type QueryChunkSearchResponse as QueryChunkSearchResponse,
    type QueryDocumentQueryResponse as QueryDocumentQueryResponse,
    type QueryGetPaginatedSearchResponse as QueryGetPaginatedSearchResponse,
    type QuerySearchResponse as QuerySearchResponse,
    type QuerySumarizePageResponse as QuerySumarizePageResponse,
    type QueryChunkSearchParams as QueryChunkSearchParams,
    type QueryDocumentQueryParams as QueryDocumentQueryParams,
    type QueryGetPaginatedSearchParams as QueryGetPaginatedSearchParams,
    type QuerySearchParams as QuerySearchParams,
    type QuerySumarizePageParams as QuerySumarizePageParams,
  };
}
