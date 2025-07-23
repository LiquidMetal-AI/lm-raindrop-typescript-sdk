// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteProcedure extends APIResource {
  /**
   * Removes a specific procedure from procedural memory. This operation is permanent
   * and affects all future sessions.
   *
   * @example
   * ```ts
   * const deleteProcedure = await client.deleteProcedure.create(
   *   {
   *     key: 'TechnicalReportSystemPrompt',
   *     smartMemoryLocation: { moduleId: 'moduleId' },
   *   },
   * );
   * ```
   */
  create(
    body: DeleteProcedureCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeleteProcedureCreateResponse> {
    return this._client.post('/v1/delete_procedure', { body, ...options });
  }
}

export interface DeleteProcedureCreateResponse {
  /**
   * Indicates whether the procedure was deleted successfully
   */
  success?: boolean;
}

export interface DeleteProcedureCreateParams {
  /**
   * Unique key of the procedure to delete
   */
  key: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: DeleteProcedureCreateParams.ModuleID | DeleteProcedureCreateParams.SmartMemory;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  proceduralMemoryId?: string | null;
}

export namespace DeleteProcedureCreateParams {
  export interface ModuleID {
    moduleId: string;
  }

  export interface SmartMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    smartMemory: SmartMemory.SmartMemory;
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
      applicationName?: string | null;

      /**
       * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }
}

export declare namespace DeleteProcedure {
  export {
    type DeleteProcedureCreateResponse as DeleteProcedureCreateResponse,
    type DeleteProcedureCreateParams as DeleteProcedureCreateParams,
  };
}
