// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *   sessionId: '01jxanr45haeswhay4n0q8340y',
   *   smartMemoryLocation: {
   *     smart_memory: {
   *       name: 'memory-name',
   *       application_name: 'demo',
   *       version: '1234',
   *     },
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
  sessionId: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | EndSessionCreateParams.SmartMemory;

  /**
   * Whether to flush working memory to long-term storage
   */
  flush?: boolean | null;

  /**
   * Optional custom system prompt for memory summarization during flush
   */
  systemPrompt?: string | null;
}

export namespace EndSessionCreateParams {
  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** TRUE
     */
    smartMemory: SmartMemory.SmartMemory;
  }

  export namespace SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** TRUE
     */
    export interface SmartMemory {
      /**
       * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      applicationName?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace EndSession {
  export {
    type EndSessionCreateResponse as EndSessionCreateResponse,
    type EndSessionCreateParams as EndSessionCreateParams,
  };
}
