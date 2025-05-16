// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DocumentQuery extends APIResource {
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
   * const documentQuery = await client.documentQuery.create({
   *   bucket_location: { bucket: {} },
   *   input: 'What are the key points in this document?',
   *   object_id: 'document.pdf',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: DocumentQueryCreateParams, options?: RequestOptions): APIPromise<DocumentQueryCreateResponse> {
    return this._client.post('/v1/document_query', { body, ...options });
  }
}

export type BucketLocator = BucketLocator.Bucket | BucketLocator.ModuleID;

export namespace BucketLocator {
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

export interface DocumentQueryCreateResponse {
  /**
   * AI-generated response that may include direct document quotes, content
   * summaries, contextual explanations, references to specific sections, and related
   * content suggestions
   */
  answer?: string;
}

export interface DocumentQueryCreateParams {
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

export declare namespace DocumentQuery {
  export {
    type BucketLocator as BucketLocator,
    type DocumentQueryCreateResponse as DocumentQueryCreateResponse,
    type DocumentQueryCreateParams as DocumentQueryCreateParams,
  };
}
