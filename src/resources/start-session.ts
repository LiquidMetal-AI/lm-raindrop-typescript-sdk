// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class StartSession extends APIResource {
  /**
   * Starts a new working memory session for an agent. Each session provides isolated
   * memory operations and automatic cleanup capabilities.
   *
   * @example
   * ```ts
   * const startSession = await client.startSession.create({
   *   smartMemoryLocation: { moduleId: 'moduleId' },
   * });
   * ```
   */
  create(body: StartSessionCreateParams, options?: RequestOptions): APIPromise<StartSessionCreateResponse> {
    return this._client.post('/v1/start_session', { body, ...options });
  }
}

export interface StartSessionCreateResponse {
  /**
   * Unique identifier for the new session
   */
  sessionId?: string;
}

export interface StartSessionCreateParams {
  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: StartSessionCreateParams.ModuleID | StartSessionCreateParams.SmartMemory;

  /**
   * Smart memory locator for targeting the correct smart memory instance (Alias:
   * accepts both 'smartMemoryLocation' and 'smart_memory_location')
   */
  smart_memory_location?: StartSessionCreateParams.ModuleID | StartSessionCreateParams.SmartMemory;
}

export namespace StartSessionCreateParams {
  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    moduleId: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }

  export interface ModuleID {
    /**
     * **REQUIRED** FALSE
     */
    moduleId: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: Shared.LiquidmetalV1alpha1SmartMemoryName;
  }
}

export declare namespace StartSession {
  export {
    type StartSessionCreateResponse as StartSessionCreateResponse,
    type StartSessionCreateParams as StartSessionCreateParams,
  };
}
