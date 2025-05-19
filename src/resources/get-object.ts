// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetObject extends APIResource {
  /**
   * Download a file from a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to download from. The key is the path to the
   * object in the bucket.
   *
   * @example
   * ```ts
   * const response = await client.getObject.download();
   * ```
   */
  download(body: GetObjectDownloadParams, options?: RequestOptions): APIPromise<GetObjectDownloadResponse> {
    return this._client.post('/v1/get_object', { body, ...options });
  }
}

export interface GetObjectDownloadResponse {
  /**
   * No specific comments in original for these fields directly, but they were part
   * of the original GetObjectResponse.
   */
  content?: string;

  content_type?: string;
}

export interface GetObjectDownloadParams {
  /**
   * Object key/path to download
   */
  key?: string;

  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export declare namespace GetObject {
  export {
    type GetObjectDownloadResponse as GetObjectDownloadResponse,
    type GetObjectDownloadParams as GetObjectDownloadParams,
  };
}
