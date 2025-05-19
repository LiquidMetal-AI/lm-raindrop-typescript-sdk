// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ListObjects extends APIResource {
  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to list objects from.
   */
  create(
    params: ListObjectCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListObjectCreateResponse> {
    const { module_id } = params ?? {};
    return this._client.post('/v1/list_objects', { query: { module_id }, ...options });
  }
}

export interface ListObjectCreateResponse {
  /**
   * List of objects in the bucket with their metadata
   */
  objects?: Array<ListObjectCreateResponse.Object>;
}

export namespace ListObjectCreateResponse {
  /**
   * ObjectInfo represents metadata about a single object
   */
  export interface Object {
    /**
     * MIME type of the object
     */
    content_type?: string;

    /**
     * Object key/path in the bucket
     */
    key?: string;

    /**
     * Last modification timestamp
     */
    last_modified?: string;

    /**
     * Size of the object in bytes
     */
    size?: number | string;
  }
}

export interface ListObjectCreateParams {
  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export declare namespace ListObjects {
  export {
    type ListObjectCreateResponse as ListObjectCreateResponse,
    type ListObjectCreateParams as ListObjectCreateParams,
  };
}
