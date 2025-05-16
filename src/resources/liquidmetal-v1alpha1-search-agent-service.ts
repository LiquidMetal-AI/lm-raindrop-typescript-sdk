// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ChunkSearchAPI from './chunk-search';
import * as SearchAPI from './search';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class LiquidmetalV1alpha1SearchAgentService extends APIResource {
  /**
   * Retrieve additional pages from a previous search. This endpoint enables
   * navigation through large result sets while maintaining search context and result
   * relevance. Retrieving paginated results requires a valid request_id from a
   * previously completed search.
   */
  getPaginatedResults(
    params: LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsParams,
    options?: RequestOptions,
  ): APIPromise<LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsResponse> {
    const {
      'Connect-Protocol-Version': connectProtocolVersion,
      'Connect-Timeout-Ms': connectTimeoutMs,
      ...body
    } = params;
    return this._client.post('/liquidmetal.v1alpha1.SearchAgentService/GetPaginatedResults', {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Connect-Protocol-Version': connectProtocolVersion.toString(),
          ...(connectTimeoutMs?.toString() != null ?
            { 'Connect-Timeout-Ms': connectTimeoutMs?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsResponse {
  /**
   * **DESCRIPTION** Updated pagination information **EXAMPLE** {"total": 100,
   * "page": 2, "page_size": 10, "total_pages": 10, "has_more": true}
   */
  pagination?: SearchAPI.PaginationInfo;

  /**
   * **DESCRIPTION** Page results with full metadata **EXAMPLE** [{"chunk_signature":
   * "chunk_123abc", "text": "Sample text", "score": 0.95}]
   */
  results?: Array<ChunkSearchAPI.TextResult>;
}

export interface LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsParams {
  /**
   * Header param: Define the version of the Connect protocol
   */
  'Connect-Protocol-Version': 1;

  /**
   * Body param:
   */
  organization_id?: string;

  /**
   * Body param: **DESCRIPTION** Requested page number **EXAMPLE** 2 **REQUIRED**
   * TRUE
   */
  page?: number | null;

  /**
   * Body param: **DESCRIPTION** Results per page **EXAMPLE** 10 **REQUIRED** TRUE
   */
  page_size?: number | null;

  /**
   * Body param: **DESCRIPTION** Original search session identifier from the initial
   * search **EXAMPLE** "123e4567-e89b-12d3-a456-426614174000" **REQUIRED** TRUE
   */
  request_id?: string;

  /**
   * Body param:
   */
  user_id?: string;

  /**
   * Header param: Define the timeout, in ms
   */
  'Connect-Timeout-Ms'?: number;
}

export declare namespace LiquidmetalV1alpha1SearchAgentService {
  export {
    type LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsResponse as LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsResponse,
    type LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsParams as LiquidmetalV1alpha1SearchAgentServiceGetPaginatedResultsParams,
  };
}
