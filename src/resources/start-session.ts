// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class StartSession extends APIResource {
  /**
   * Starts a new working memory session for an agent. Each session provides isolated
   * memory operations and automatic cleanup capabilities.
   *
   * @example
   * ```ts
   * const startSession = await client.startSession.create({
   *   agentMemoryLocation: {
   *     agentMemory: { name: 'memory-name' },
   *   },
   * });
   * ```
   */
  create(body: StartSessionCreateParams, options?: RequestOptions): APIPromise<StartSessionCreateResponse> {
    return this._client.post('/v1/start_session', { body, ...options });
  }
}

export interface StartSessionCreateResponse {
  /**
   * Unique identifier for the new session
   */
  sessionId?: string;
}

export interface StartSessionCreateParams {
  /**
   * Agent memory locator for targeting the correct agent memory instance
   */
  agentMemoryLocation: StartSessionCreateParams.AgentMemory | StartSessionCreateParams.ModuleID;
}

export namespace StartSessionCreateParams {
  export interface AgentMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
     */
    agentMemory: AgentMemory.AgentMemory;
  }

  export namespace AgentMemory {
    /**
     * **EXAMPLE** {"name":"memory-name","application_name":"demo","version":"1234"}
     * **REQUIRED** FALSE
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

export declare namespace StartSession {
  export {
    type StartSessionCreateResponse as StartSessionCreateResponse,
    type StartSessionCreateParams as StartSessionCreateParams,
  };
}
