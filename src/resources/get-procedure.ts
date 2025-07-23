// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetProcedure extends APIResource {
  /**
   * Retrieves a specific procedure by key from procedural memory. Procedures are
   * persistent knowledge artifacts that remain available across all sessions and can
   * be shared between different agent instances.
   *
   * @example
   * ```ts
   * const getProcedure = await client.getProcedure.create({
   *   key: 'TechnicalReportSystemPrompt',
   *   smartMemoryLocation: { moduleId: 'moduleId' },
   * });
   * ```
   */
  create(body: GetProcedureCreateParams, options?: RequestOptions): APIPromise<GetProcedureCreateResponse> {
    return this._client.post('/v1/get_procedure', { body, ...options });
  }
}

export interface GetProcedureCreateResponse {
  /**
   * Indicates whether the procedure was found
   */
  found?: boolean;

  /**
   * The procedure content, or empty if not found
   */
  value?: string | null;
}

export interface GetProcedureCreateParams {
  /**
   * Unique key of the procedure to retrieve
   */
  key: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: GetProcedureCreateParams.ModuleID | GetProcedureCreateParams.SmartMemory;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  proceduralMemoryId?: string | null;
}

export namespace GetProcedureCreateParams {
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

export declare namespace GetProcedure {
  export {
    type GetProcedureCreateResponse as GetProcedureCreateResponse,
    type GetProcedureCreateParams as GetProcedureCreateParams,
  };
}
