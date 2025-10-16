// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteMemory extends APIResource {
  /**
   * Removes a specific memory entry from storage. This operation is permanent and
   * cannot be undone.
   *
   * @example
   * ```ts
   * const deleteMemory = await client.deleteMemory.create({
   *   memory_id: '01jxanr45haeswhay4n0q8340y',
   *   session_id: '01jxanr45haeswhay4n0q8340y',
   *   smart_memory_location: {
   *     smart_memory: {
   *       application_name: 'demo',
   *       name: 'memory-name',
   *       version: '1234',
   *     },
   *   },
   * });
   * ```
   */
  create(body: DeleteMemoryCreateParams, options?: RequestOptions): APIPromise<DeleteMemoryCreateResponse> {
    return this._client.post('/v1/delete_memory', { body, ...options });
  }
}

export interface DeleteMemoryCreateResponse {
  /**
   * Indicates whether the deletion was successful
   */
  success?: boolean;
}

export interface DeleteMemoryCreateParams {
  /**
   * Unique identifier of the memory entry to delete
   */
  memory_id: string;

  /**
   * Unique session identifier for the working memory instance
   */
  session_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: DeleteMemoryCreateParams.ModuleID | DeleteMemoryCreateParams.SmartMemory;

  organization_id?: string;

  user_id?: string;
}

export namespace DeleteMemoryCreateParams {
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

export declare namespace DeleteMemory {
  export {
    type DeleteMemoryCreateResponse as DeleteMemoryCreateResponse,
    type DeleteMemoryCreateParams as DeleteMemoryCreateParams,
  };
}
