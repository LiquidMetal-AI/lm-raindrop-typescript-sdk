// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PutProcedure extends APIResource {
  /**
   * Stores a new procedure in the agent's procedural memory. Procedures are reusable
   * knowledge artifacts like system prompts, templates, workflows, or instructions
   * that can be retrieved and applied across different sessions and contexts.
   *
   * @example
   * ```ts
   * const putProcedure = await client.putProcedure.create({
   *   key: 'TechnicalReportSystemPrompt',
   *   smartMemoryLocation: {
   *     smart_memory: {
   *       name: 'memory-name',
   *       application_name: 'demo',
   *       version: '1234',
   *     },
   *   },
   *   value: 'You are a technical documentation assistant...',
   * });
   * ```
   */
  create(body: PutProcedureCreateParams, options?: RequestOptions): APIPromise<PutProcedureCreateResponse> {
    return this._client.post('/v1/put_procedure', { body, ...options });
  }
}

export interface PutProcedureCreateResponse {
  /**
   * Indicates whether the procedure was stored successfully
   */
  success?: boolean;
}

export interface PutProcedureCreateParams {
  /**
   * Unique key to identify this procedure
   */
  key: string;

  /**
   * Smart memory locator for targeting the correct smart memory instance
   */
  smartMemoryLocation: unknown | PutProcedureCreateParams.SmartMemory;

  /**
   * The procedure content (prompt, template, instructions, etc.)
   */
  value: string;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  proceduralMemoryId?: string | null;
}

export namespace PutProcedureCreateParams {
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

export declare namespace PutProcedure {
  export {
    type PutProcedureCreateResponse as PutProcedureCreateResponse,
    type PutProcedureCreateParams as PutProcedureCreateParams,
  };
}
