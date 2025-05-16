// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentQueryAPI from './document-query';
import * as ObjectAPI from './object';
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
   */
  execute(body: ChunkSearchExecuteParams, options?: RequestOptions): APIPromise<ChunkSearchExecuteResponse> {
    return this._client.post('/v1/chunk_search', { body, ...options });
  }
}

export interface TextResult {
  /**
   * **DESCRIPTION** Unique identifier for this text segment. Used for deduplication
   * and result tracking **EXAMPLE**
   * "51abb575a5e438a2db5fa064611995dfd76aa14d9e4b2a44c29a6374203126a5"
   */
  chunk_signature?: string | null;

  /**
   * **DESCRIPTION** Vector representation for similarity matching. Used in semantic
   * search operations **EXAMPLE** "base64_encoded_vector_data"
   */
  embed?: string | null;

  /**
   * **DESCRIPTION** Parent document identifier. Links related content chunks
   * together **EXAMPLE**
   * "e2ec3b118e205ff5d627e0c866224a25ba52e6d3ab758a3ef3d49e80908d7444"
   */
  payload_signature?: string | null;

  /**
   * **DESCRIPTION** Relevance score (0.0 to 1.0). Higher scores indicate better
   * matches **EXAMPLE** 0.95
   */
  score?: number | null;

  /**
   * **DESCRIPTION** Source document references. Contains bucket and object
   * information **EXAMPLE** {"bucket": {"moduleId": "01jt3vs2nyt2xwk2f54x2bkn84",
   * "bucketName": "mr-bucket"}, "object": "document.pdf"}
   */
  source?: TextResult.Source;

  /**
   * **DESCRIPTION** The actual content of the result. May be a document excerpt or
   * full content **EXAMPLE** "This is a sample text chunk from the document"
   */
  text?: string | null;

  /**
   * **DESCRIPTION** Content MIME type. Helps with proper result rendering
   * **EXAMPLE** "application/pdf"
   */
  type?: string | null;
}

export namespace TextResult {
  /**
   * **DESCRIPTION** Source document references. Contains bucket and object
   * information **EXAMPLE** {"bucket": {"moduleId": "01jt3vs2nyt2xwk2f54x2bkn84",
   * "bucketName": "mr-bucket"}, "object": "document.pdf"}
   */
  export interface Source {
    /**
     * **DESCRIPTION** The bucket information containing this result **EXAMPLE**
     * {"moduleId": "01jt3vs2nyt2xwk2f54x2bkn84", "bucketName": "mr-bucket"}
     */
    bucket?: ObjectAPI.BucketResponse;

    /**
     * **DESCRIPTION** The object key within the bucket **EXAMPLE** "document.pdf"
     */
    object?: string;
  }
}

export interface ChunkSearchExecuteResponse {
  /**
   * **DESCRIPTION** Ordered list of relevant text segments. Each result includes
   * full context and metadata **EXAMPLE** [{"chunk_signature": "chunk_123abc",
   * "text": "Sample text", "score": 0.95}]
   */
  results?: Array<TextResult>;
}

export interface ChunkSearchExecuteParams {
  /**
   * **DESCRIPTION** The buckets to search. If provided, the search will only return
   * results from these buckets **EXAMPLE** [{"bucket": {"name": "my-bucket",
   * "version": "01jtgtraw3b5qbahrhvrj3ygbb", "application_name": "my-app"}}]
   * **REQUIRED** TRUE
   */
  bucket_locations?: Array<DocumentQueryAPI.BucketLocator>;

  /**
   * **DESCRIPTION** Natural language query or question. Can include complex criteria
   * and relationships. The system will optimize the search strategy based on this
   * input **EXAMPLE** "Find documents about revenue in Q4 2023" **REQUIRED** TRUE
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

export declare namespace ChunkSearch {
  export {
    type TextResult as TextResult,
    type ChunkSearchExecuteResponse as ChunkSearchExecuteResponse,
    type ChunkSearchExecuteParams as ChunkSearchExecuteParams,
  };
}
