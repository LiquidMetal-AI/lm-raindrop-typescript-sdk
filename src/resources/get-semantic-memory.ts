// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetSemanticMemory extends APIResource {
  /**
   * Retrieves a specific semantic memory document by its object ID. Returns the
   * complete document with all its stored properties and metadata.
   *
   * @example
   * ```ts
   * const getSemanticMemory =
   *   await client.getSemanticMemory.create({
   *     object_id: '01jxanr45haeswhay4n0q8340y',
   *     smart_memory_location: {
   *       smart_memory: {
   *         application_name: 'demo',
   *         name: 'memory-name',
   *         version: '1234',
   *       },
   *     },
   *   });
   * ```
   */
  create(
    body: GetSemanticMemoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<GetSemanticMemoryCreateResponse> {
    return this._client.post('/v1/get_semantic_memory', { body, ...options });
  }
}

export interface GetSemanticMemoryCreateResponse {
  /**
   * JSON-encoded document content if found
   */
  document?: string | null;

  /**
   * Error message if the operation failed
   */
  error?: string | null;

  /**
   * Indicates whether the document was retrieved successfully
   */
  success?: boolean;
}

export interface GetSemanticMemoryCreateParams {
  /**
   * Unique object identifier of the document to retrieve
   */
  object_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: GetSemanticMemoryCreateParams.ModuleID | GetSemanticMemoryCreateParams.SmartMemory;

  organization_id?: string;

  user_id?: string;
}

export namespace GetSemanticMemoryCreateParams {
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

export declare namespace GetSemanticMemory {
  export {
    type GetSemanticMemoryCreateResponse as GetSemanticMemoryCreateResponse,
    type GetSemanticMemoryCreateParams as GetSemanticMemoryCreateParams,
  };
}
