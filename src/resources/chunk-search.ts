// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentQueryAPI from './document-query';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChunkSearch extends APIResource {
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
   * const response = await client.chunkSearch.find({
   *   bucket_locations: [{ bucket: { name: 'my-bucket' } }],
   *   input: 'Find documents about revenue in Q4 2023',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  find(body: ChunkSearchFindParams, options?: RequestOptions): APIPromise<ChunkSearchFindResponse> {
    return this._client.post('/v1/chunk_search', { body, ...options });
  }
}

export interface TextResult {
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
  source?: TextResult.Source;

  /**
   * The actual content of the result. May be a document excerpt or full content
   */
  text?: string | null;

  /**
   * Content MIME type. Helps with proper result rendering
   */
  type?: string | null;
}

export namespace TextResult {
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

export interface ChunkSearchFindResponse {
  /**
   * Ordered list of relevant text segments. Each result includes full context and
   * metadata
   */
  results?: Array<TextResult>;
}

export interface ChunkSearchFindParams {
  /**
   * The buckets to search. If provided, the search will only return results from
   * these buckets
   */
  bucket_locations: Array<DocumentQueryAPI.BucketLocator>;

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

export declare namespace ChunkSearch {
  export {
    type TextResult as TextResult,
    type ChunkSearchFindResponse as ChunkSearchFindResponse,
    type ChunkSearchFindParams as ChunkSearchFindParams,
  };
}
