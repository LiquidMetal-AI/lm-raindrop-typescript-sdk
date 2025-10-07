// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExecuteQuery extends APIResource {
  /**
   * Executes a SQL query or converts natural language to SQL and executes it.
   * Supports both direct SQL execution and AI-powered natural language to SQL
   * conversion. Automatically handles metadata updates and PII detection for data
   * governance.
   *
   * Features:
   *
   * - Direct SQL query execution
   * - Natural language to SQL conversion using AI
   * - Automatic metadata tracking for schema changes
   * - PII detection for security
   * - Multiple output formats (JSON, CSV)
   *
   * @example
   * ```ts
   * const response = await client.executeQuery.execute({
   *   smartSqlLocation:
   *     '{ module_id: "01jtryx2f2f61ryk06vd8mr91p" }',
   * });
   * ```
   */
  execute(
    body: ExecuteQueryExecuteParams,
    options?: RequestOptions,
  ): APIPromise<ExecuteQueryExecuteResponse> {
    return this._client.post('/v1/execute_query', { body, ...options });
  }
}

export type ExecuteQueryExecuteResponse =
  | ExecuteQueryExecuteResponse.CsvResults
  | ExecuteQueryExecuteResponse.JsonResults;

export namespace ExecuteQueryExecuteResponse {
  export interface CsvResults {
    /**
     * CSV formatted results as a string
     */
    csvResults: string;

    /**
     * AI reasoning for natural language queries (if applicable)
     */
    aiReasoning?: string | null;

    /**
     * The actual SQL query that was executed
     */
    queryExecuted?: string;

    /**
     * HTTP status code for the operation
     */
    status?: number;
  }

  export interface JsonResults {
    /**
     * JSON formatted results as a string
     */
    jsonResults: string;

    /**
     * AI reasoning for natural language queries (if applicable)
     */
    aiReasoning?: string | null;

    /**
     * The actual SQL query that was executed
     */
    queryExecuted?: string;

    /**
     * HTTP status code for the operation
     */
    status?: number;
  }
}

export interface ExecuteQueryExecuteParams {
  /**
   * Smart SQL locator for targeting the correct smart SQL instance
   */
  smartSqlLocation: unknown | ExecuteQueryExecuteParams.SmartSql;

  /**
   * Desired output format for query results
   */
  format?: 'OUTPUT_FORMAT_UNSPECIFIED' | 'OUTPUT_FORMAT_JSON' | 'OUTPUT_FORMAT_CSV' | null;

  /**
   * Direct SQL query to execute (mutually exclusive with text_query)
   */
  sqlQuery?: string | null;

  /**
   * Natural language query to convert to SQL (mutually exclusive with sql_query)
   */
  textQuery?: string | null;
}

export namespace ExecuteQueryExecuteParams {
  export interface SmartSql {
    /**
     * Name-based smart SQL instance identifier
     */
    smartSql: SmartSql.SmartSql;
  }

  export namespace SmartSql {
    /**
     * Name-based smart SQL instance identifier
     */
    export interface SmartSql {
      /**
       * The name of the smart SQL instance
       */
      name: string;

      /**
       * Optional application name that owns this smart SQL instance
       */
      applicationName?: string | null;

      /**
       * Optional version identifier for the smart SQL instance
       */
      version?: string | null;
    }
  }
}

export declare namespace ExecuteQuery {
  export {
    type ExecuteQueryExecuteResponse as ExecuteQueryExecuteResponse,
    type ExecuteQueryExecuteParams as ExecuteQueryExecuteParams,
  };
}
