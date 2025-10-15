// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ListProcedures extends APIResource {
  /**
   * Lists all procedures stored in procedural memory. Returns metadata about each
   * procedure including creation and modification times.
   *
   * @example
   * ```ts
   * const listProcedure = await client.listProcedures.create({
   *   smart_memory_location: {
   *     smart_memory: { name: 'memory-name' },
   *   },
   * });
   * ```
   */
  create(body: ListProcedureCreateParams, options?: RequestOptions): APIPromise<ListProcedureCreateResponse> {
    return this._client.post('/v1/list_procedures', { body, ...options });
  }
}

export interface ListProcedureCreateResponse {
  /**
   * List of all stored procedures
   */
  procedures?: Array<ListProcedureCreateResponse.Procedure>;
}

export namespace ListProcedureCreateResponse {
  export interface Procedure {
    /**
     * When this procedure was first created
     */
    created_at?: string;

    /**
     * Unique key for this procedure
     */
    key?: string;

    /**
     * When this procedure was last updated
     */
    updated_at?: string;

    /**
     * The procedure content
     */
    value?: string;
  }
}

export interface ListProcedureCreateParams {
  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smart_memory_location: ListProcedureCreateParams.ModuleID | ListProcedureCreateParams.SmartMemory;

  organization_id?: string;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  procedural_memory_id?: string | null;

  user_id?: string;
}

export namespace ListProcedureCreateParams {
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

export declare namespace ListProcedures {
  export {
    type ListProcedureCreateResponse as ListProcedureCreateResponse,
    type ListProcedureCreateParams as ListProcedureCreateParams,
  };
}
