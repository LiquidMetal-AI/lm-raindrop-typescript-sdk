// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *   agentMemoryLocation: {
   *     agentMemory: { name: 'my-agent-memory' },
   *   },
   *   memoryId: '01jxanr45haeswhay4n0q8340y',
   *   sessionId: '01jxanr45haeswhay4n0q8340y',
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
   * Agent memory locator for targeting the correct agent memory instance
   */
  agentMemoryLocation: DeleteMemoryCreateParams.AgentMemory | DeleteMemoryCreateParams.ModuleID;

  /**
   * Unique identifier of the memory entry to delete
   */
  memoryId: string;

  /**
   * Unique session identifier for the working memory instance
   */
  sessionId: string;
}

export namespace DeleteMemoryCreateParams {
  export interface AgentMemory {
    /**
     * **EXAMPLE** { name: 'my-agent-memory' } **REQUIRED** FALSE
     */
    agentMemory: AgentMemory.AgentMemory;
  }

  export namespace AgentMemory {
    /**
     * **EXAMPLE** { name: 'my-agent-memory' } **REQUIRED** FALSE
     */
    export interface AgentMemory {
      /**
       * The name of the agent memory **EXAMPLE** "my-agent-memory" **REQUIRED** TRUE
       */
      name: string;

      /**
       * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
       */
      applicationName?: string | null;

      /**
       * Optional version of the agent memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
       * **REQUIRED** FALSE
       */
      version?: string | null;
    }
  }

  export interface ModuleID {
    moduleId: string;
  }
}

export declare namespace DeleteMemory {
  export {
    type DeleteMemoryCreateResponse as DeleteMemoryCreateResponse,
    type DeleteMemoryCreateParams as DeleteMemoryCreateParams,
  };
}
