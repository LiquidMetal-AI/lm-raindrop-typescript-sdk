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
   * The query system maintains conversation context throught the `request_id`,
   * enabling follow-up questions and deep exploration of document content. It works
   * across all supported file types and automatically handles multi-page documents,
   * making complex file interaction as simple as having a conversation.
   *
   * The system will:
   *
   * - Maintain conversation history for context when using the same `request_id`
   * - Process questions against file content
   * - Generate contextual, relevant responses
   *
   * Document query is supported for all file types, including PDFs, images, and
   * audio files.
   *
   * @example
   * ```ts
   * const response = await client.documentQuery.ask({
   *   bucket_location: {
   *     module_id: '01jtgtrd37acrqf7k24dggg31s',
   *   },
   *   input: 'What are the key points in this document?',
   *   object_id: 'object_id',
   *   request_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  ask(body: DocumentQueryAskParams, options?: RequestOptions): APIPromise<DocumentQueryAskResponse> {
    return this._client.post('/v1/document_query', { body, ...options });
  }
}

export interface DocumentQueryAskResponse {
  /**
   * AI-generated response that may include direct document quotes, content
   * summaries, contextual explanations, references to specific sections, and related
   * content suggestions
   */
  answer: string;
}

export interface DocumentQueryAskParams {
  /**
   * The storage bucket location containing the target document. Can specify either
   * module_id (version-agnostic) or specific bucket details
   */
  bucket_location: DocumentQueryAskParams.ModuleID | DocumentQueryAskParams.Bucket;

  /**
   * User's input or question about the document. Can be natural language questions,
   * commands, or requests
   */
  input: string;

  /**
   * Document identifier within the bucket. Typically matches the storage path or key
   */
  object_id: string;

  /**
   * Client-provided conversation session identifier. Required for maintaining
   * context in follow-up questions. We recommend using a UUID or ULID for this
   * value.
   */
  request_id: string;
}

export namespace DocumentQueryAskParams {
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

export declare namespace DocumentQuery {
  export {
    type DocumentQueryAskResponse as DocumentQueryAskResponse,
    type DocumentQueryAskParams as DocumentQueryAskParams,
  };
}
