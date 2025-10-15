// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteSemanticMemory extends APIResource {
  /**
   * Removes a specific semantic memory document by its object ID. This operation
   * permanently deletes the document and is irreversible.
   *
   * @example
   * ```ts
   * const deleteSemanticMemory =
   *   await client.deleteSemanticMemory.delete({
   *     object_id: '01jxanr45haeswhay4n0q8340y',
   *     smart_memory_location: {
   *       smart_memory: { name: 'memory-name' },
   *     },
   *   });
   * ```
   */
  delete(
    body: DeleteSemanticMemoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteSemanticMemoryDeleteResponse> {
    return this._client.post('/v1/delete_semantic_memory', { body, ...options });
  }
}

export interface DeleteSemanticMemoryDeleteResponse {
  /**
   * Error message if the operation failed
   */
  error?: string | null;

  /**
   * Indicates whether the document was deleted successfully
   */
  success?: boolean;
}

export interface DeleteSemanticMemoryDeleteParams {
  /**
   * Unique object identifier of the document to delete
   */
  object_id: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location:
    | DeleteSemanticMemoryDeleteParams.ModuleID
    | DeleteSemanticMemoryDeleteParams.SmartMemory;

  organization_id?: string;

  user_id?: string;
}

export namespace DeleteSemanticMemoryDeleteParams {
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

export declare namespace DeleteSemanticMemory {
  export {
    type DeleteSemanticMemoryDeleteResponse as DeleteSemanticMemoryDeleteResponse,
    type DeleteSemanticMemoryDeleteParams as DeleteSemanticMemoryDeleteParams,
  };
}
