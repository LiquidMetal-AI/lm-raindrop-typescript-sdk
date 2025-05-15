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
   *   bucket_locations: [
   *     { module_id: '01jtgtrd37acrqf7k24dggg31s' },
   *   ],
   *   input: 'Information on how to raise a dog',
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
   * Semantically relevant results with metadata and relevance scoring
   */
  results: Array<SearchAPI.TextResult>;
}

export interface ChunkSearchFindParams {
  bucket_locations: Array<ChunkSearchFindParams.ModuleID | ChunkSearchFindParams.Bucket>;

  /**
   * Natural language query or question. Can include complex criteria and
   * relationships
   */
  input: string;

  /**
   * Client-provided search session identifier. We recommend using a UUID or ULID for
   * this value.
   */
  request_id: string;
}

export namespace ChunkSearchFindParams {
  export interface ModuleID {
    /**
     * Version-agnostic identifier for a module
     */
    module_id: string;
  }

  export interface Bucket {
    bucket: Bucket.Bucket;
  }

  export namespace Bucket {
    export interface Bucket {
      /**
       * Name of the application
       */
      application_name: string;

      /**
       * Name of the bucket
       */
      name: string;

      /**
       * Version of the bucket
       */
      version: string;
    }
  }
}

export declare namespace ChunkSearch {
  export {
    type ChunkSearchFindResponse as ChunkSearchFindResponse,
    type ChunkSearchFindParams as ChunkSearchFindParams,
  };
}
