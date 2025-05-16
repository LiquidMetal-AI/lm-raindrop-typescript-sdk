// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SearchAPI from './search';
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
   *   bucket_locations: [{ bucket: {} }],
   *   input: 'Find documents about revenue in Q4 2023',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  find(body: ChunkSearchFindParams, options?: RequestOptions): APIPromise<ChunkSearchFindResponse> {
    return this._client.post('/v1/chunk_search', { body, ...options });
  }
}

export interface ChunkSearchFindResponse {
  /**
   * Ordered list of relevant text segments. Each result includes full context and
   * metadata
   */
  results?: Array<SearchAPI.TextResult>;
}

export interface ChunkSearchFindParams {
  /**
   * The buckets to search. If provided, the search will only return results from
   * these buckets
   */
  bucket_locations: Array<ChunkSearchFindParams.BucketLocation>;

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

export namespace ChunkSearchFindParams {
  export interface BucketLocation {
    /**
     * BucketName represents a bucket name with an optional version
     */
    bucket: BucketLocation.Bucket;
  }

  export namespace BucketLocation {
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
}

export declare namespace ChunkSearch {
  export {
    type ChunkSearchFindResponse as ChunkSearchFindResponse,
    type ChunkSearchFindParams as ChunkSearchFindParams,
  };
}
