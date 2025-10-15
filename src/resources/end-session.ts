// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class EndSession extends APIResource {
  /**
   * Ends a working memory session, optionally flushing working memory to long-term
   * storage. When flush is enabled, important memories are processed and stored for
   * future retrieval.
   *
   * @example
   * ```ts
   * const endSession = await client.endSession.create({
   *   session_id: '01jxanr45haeswhay4n0q8340y',
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
   *   },
   * });
   * ```
   */
  create(body: EndSessionCreateParams, options?: RequestOptions): APIPromise<EndSessionCreateResponse> {
    return this._client.post('/v1/end_session', { body, ...options });
  }
}

export interface EndSessionCreateResponse {
  /**
   * Indicates whether the session was ended successfully
   */
  success?: boolean;
}

export interface EndSessionCreateParams {
  /**
   * Unique session identifier to end
   */
  session_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: EndSessionCreateParams.ModuleID | EndSessionCreateParams.SmartMemory;

  /**
   * Whether to flush working memory to long-term storage
   */
  flush?: boolean | null;

  organization_id?: string;

  /**
   * Optional custom system prompt for memory summarization during flush
   */
  system_prompt?: string | null;

  user_id?: string;
}

export namespace EndSessionCreateParams {
  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    module_id: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smart_memory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }
}

export declare namespace EndSession {
  export {
    type EndSessionCreateResponse as EndSessionCreateResponse,
    type EndSessionCreateParams as EndSessionCreateParams,
  };
}
