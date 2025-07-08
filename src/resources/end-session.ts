// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class EndSession extends APIResource {
  /**
   * Ends a working memory session, optionally flushing working memory to long-term
   * storage. When flush is enabled, important memories are processed and stored for
   * future retrieval.
   *
   * @example
   * ```ts
   * const endSession = await client.endSession.create({
   *   agentMemoryLocation: {
   *     agentMemory: { name: 'memory-name' },
   *   },
   *   sessionId: '01jxanr45haeswhay4n0q8340y',
   * });
   * ```
   */
  create(body: EndSessionCreateParams, options?: RequestOptions): APIPromise<EndSessionCreateResponse> {
    return this._client.post('/v1/end_session', { body, ...options });
  }
}

export interface EndSessionCreateResponse {
  /**
   * Indicates whether the session was ended successfully
   */
  success?: boolean;
}

export interface EndSessionCreateParams {
  /**
   * Agent memory locator for targeting the correct agent memory instance
   */
  agentMemoryLocation: EndSessionCreateParams.AgentMemory | EndSessionCreateParams.ModuleID;

  /**
   * Unique session identifier to end
   */
  sessionId: string;

  /**
   * Whether to flush working memory to long-term storage
   */
  flush?: boolean | null;

  /**
   * Optional custom system prompt for memory summarization during flush
   */
  systemPrompt?: string | null;
}

export namespace EndSessionCreateParams {
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

export declare namespace EndSession {
  export {
    type EndSessionCreateResponse as EndSessionCreateResponse,
    type EndSessionCreateParams as EndSessionCreateParams,
  };
}
