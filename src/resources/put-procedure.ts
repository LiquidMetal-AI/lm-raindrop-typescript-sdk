// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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
   *   smart_memory_location: {
   *     smart_memory: {
   *       application_name: 'demo',
   *       name: 'memory-name',
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
  smart_memory_location: PutProcedureCreateParams.ModuleID | PutProcedureCreateParams.SmartMemory;

  /**
   * The procedure content (prompt, template, instructions, etc.)
   */
  value: string;

  organization_id?: string;

  /**
   * Optional procedural memory ID to use for actor isolation
   */
  procedural_memory_id?: string | null;

  user_id?: string;
}

export namespace PutProcedureCreateParams {
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

export declare namespace PutProcedure {
  export {
    type PutProcedureCreateResponse as PutProcedureCreateResponse,
    type PutProcedureCreateParams as PutProcedureCreateParams,
  };
}
