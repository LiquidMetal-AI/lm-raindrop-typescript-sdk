// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
   *   },
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
  session_id?: string;
}

export interface StartSessionCreateParams {
  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: StartSessionCreateParams.ModuleID | StartSessionCreateParams.SmartMemory;

  organization_id?: string;

  user_id?: string;
}

export namespace StartSessionCreateParams {
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
    smart_memory: SmartMemory.SmartMemory;
  }

  export namespace SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    export interface SmartMemory {
      /**
       * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      application_name?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace StartSession {
  export {
    type StartSessionCreateResponse as StartSessionCreateResponse,
    type StartSessionCreateParams as StartSessionCreateParams,
  };
}
