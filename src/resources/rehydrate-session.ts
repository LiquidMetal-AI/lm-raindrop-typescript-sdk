// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RehydrateSession extends APIResource {
  /**
   * Rehydrates a previous session from episodic memory storage. Allows resuming work
   * from where a previous session left off by restoring either all memories or just
   * a summary of the previous session.
   *
   * @example
   * ```ts
   * const response = await client.rehydrateSession.rehydrate({
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
  rehydrate(
    body: RehydrateSessionRehydrateParams,
    options?: RequestOptions,
  ): APIPromise<RehydrateSessionRehydrateResponse> {
    return this._client.post('/v1/rehydrate_session', { body, ...options });
  }
}

export interface RehydrateSessionRehydrateResponse {
  /**
   * Operation status: 'initiated' for async processing, 'failed' for immediate
   * failure
   */
  operation?: string;

  /**
   * Storage key for checking async operation status (optional)
   */
  statusKey?: string | null;

  /**
   * Indicates whether the rehydration was successful
   */
  success?: boolean;
}

export interface RehydrateSessionRehydrateParams {
  /**
   * Session identifier to restore from episodic memory
   */
  sessionId: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | RehydrateSessionRehydrateParams.SmartMemory;

  /**
   * If true, only restore a summary. If false, restore all memories
   */
  summaryOnly?: boolean | null;
}

export namespace RehydrateSessionRehydrateParams {
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

export declare namespace RehydrateSession {
  export {
    type RehydrateSessionRehydrateResponse as RehydrateSessionRehydrateResponse,
    type RehydrateSessionRehydrateParams as RehydrateSessionRehydrateParams,
  };
}
