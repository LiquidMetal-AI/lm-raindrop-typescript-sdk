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
   *   bucket_location: '01jtgtrd37acrqf7k24dggg31s',
   *   input: 'What is the key points in this document?',
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
   * The storage bucket containing the target document. Must be an accessible Smart
   * Bucket
   */
  bucket_location: unknown;

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

export declare namespace DocumentQuery {
  export {
    type DocumentQueryAskResponse as DocumentQueryAskResponse,
    type DocumentQueryAskParams as DocumentQueryAskParams,
  };
}
