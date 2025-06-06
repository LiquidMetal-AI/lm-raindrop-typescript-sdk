// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as QueryAPI from './query';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Answer extends APIResource {
  /**
   * Answers a question based on the entire content of a bucket. This combines a
   * chunk search and an LLM to answer the question.
   *
   * @example
   * ```ts
   * const answer = await client.answer.create({
   *   bucketLocation: { bucket: { name: 'my-bucket' } },
   *   input: 'What is the capital of France?',
   * });
   * ```
   */
  create(body: AnswerCreateParams, options?: RequestOptions): APIPromise<AnswerCreateResponse> {
    return this._client.post('/v1/answer', { body, ...options });
  }
}

export interface AnswerCreateResponse {
  /**
   * The answer to the question based on all your documents in your bucket.
   */
  answer?: string;
}

export interface AnswerCreateParams {
  /**
   * The bucket to search. Must be a valid, registered Smart Bucket.
   */
  bucketLocation: QueryAPI.BucketLocator;

  /**
   * The question to answer.
   */
  input: string;
}

export declare namespace Answer {
  export { type AnswerCreateResponse as AnswerCreateResponse, type AnswerCreateParams as AnswerCreateParams };
}
