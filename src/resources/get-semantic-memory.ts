// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *     objectId: '01jxanr45haeswhay4n0q8340y',
   *     smartMemoryLocation: {
   *       smart_memory: {
   *         name: 'memory-name',
   *         application_name: 'demo',
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
  objectId: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | GetSemanticMemoryCreateParams.SmartMemory;
}

export namespace GetSemanticMemoryCreateParams {
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

export declare namespace GetSemanticMemory {
  export {
    type GetSemanticMemoryCreateResponse as GetSemanticMemoryCreateResponse,
    type GetSemanticMemoryCreateParams as GetSemanticMemoryCreateParams,
  };
}
