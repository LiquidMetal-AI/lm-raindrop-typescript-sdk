// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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
   *     smart_memory_location: {
   *       smart_memory: { name: 'memory-name' },
   *     },
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
  smart_memory_location: DeleteProcedureCreateParams.ModuleID | DeleteProcedureCreateParams.SmartMemory;

  organization_id?: string;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  procedural_memory_id?: string | null;

  user_id?: string;
}

export namespace DeleteProcedureCreateParams {
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

export declare namespace DeleteProcedure {
  export {
    type DeleteProcedureCreateResponse as DeleteProcedureCreateResponse,
    type DeleteProcedureCreateParams as DeleteProcedureCreateParams,
  };
}
