// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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
   *   session_id: '01jxanr45haeswhay4n0q8340y',
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
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
  status_key?: string | null;

  /**
   * Indicates whether the rehydration was successful
   */
  success?: boolean;
}

export interface RehydrateSessionRehydrateParams {
  /**
   * Session identifier to restore from episodic memory
   */
  session_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location:
    | RehydrateSessionRehydrateParams.ModuleID
    | RehydrateSessionRehydrateParams.SmartMemory;

  organization_id?: string;

  /**
   * If true, only restore a summary. If false, restore all memories
   */
  summary_only?: boolean | null;

  user_id?: string;
}

export namespace RehydrateSessionRehydrateParams {
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

export declare namespace RehydrateSession {
  export {
    type RehydrateSessionRehydrateResponse as RehydrateSessionRehydrateResponse,
    type RehydrateSessionRehydrateParams as RehydrateSessionRehydrateParams,
  };
}
