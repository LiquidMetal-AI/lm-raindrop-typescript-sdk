// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Bucket extends APIResource {
  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to list objects from.
   *
   * @example
   * ```ts
   * const buckets = await client.bucket.list();
   * ```
   */
  list(body: BucketListParams, options?: RequestOptions): APIPromise<BucketListResponse> {
    return this._client.post('/v1/list_objects', { body, ...options });
  }

  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const bucket = await client.bucket.delete();
   * ```
   */
  delete(body: BucketDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/delete_object', { body, ...options });
  }

  /**
   * Download a file from a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to download from. The key is the path to the
   * object in the bucket.
   *
   * @example
   * ```ts
   * const bucket = await client.bucket.get();
   * ```
   */
  get(body: BucketGetParams, options?: RequestOptions): APIPromise<BucketGetResponse> {
    return this._client.post('/v1/get_object', { body, ...options });
  }

  /**
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const response = await client.bucket.put({
   *   content: 'U3RhaW5sZXNzIHJvY2tz',
   * });
   * ```
   */
  put(body: BucketPutParams, options?: RequestOptions): APIPromise<BucketPutResponse> {
    return this._client.post('/v1/put_object', { body, ...options });
  }
}

export interface BucketListResponse {
  /**
   * List of objects in the bucket with their metadata
   */
  objects?: Array<BucketListResponse.Object>;
}

export namespace BucketListResponse {
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

export type BucketDeleteResponse = unknown;

export interface BucketGetResponse {
  /**
   * No specific comments in original for these fields directly, but they were part
   * of the original GetObjectResponse.
   */
  content?: string;

  content_type?: string;
}

export interface BucketPutResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  bucket?: BucketPutResponse.Bucket;

  /**
   * Key/path of the uploaded object
   */
  key?: string;
}

export namespace BucketPutResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  export interface Bucket {
    /**
     * **EXAMPLE** "my-app"
     */
    application_name?: string;

    /**
     * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
     */
    application_version_id?: string;

    /**
     * **EXAMPLE** "my-smartbucket"
     */
    bucket_name?: string;

    /**
     * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
     */
    module_id?: string;
  }
}

export interface BucketListParams {
  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export interface BucketDeleteParams {
  /**
   * Object key/path to delete
   */
  key?: string;

  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export interface BucketGetParams {
  /**
   * Object key/path to download
   */
  key?: string;

  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export interface BucketPutParams {
  /**
   * Binary content of the object
   */
  content: string;

  /**
   * MIME type of the object
   */
  content_type?: string;

  /**
   * Object key/path in the bucket
   */
  key?: string;

  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export declare namespace Bucket {
  export {
    type BucketListResponse as BucketListResponse,
    type BucketDeleteResponse as BucketDeleteResponse,
    type BucketGetResponse as BucketGetResponse,
    type BucketPutResponse as BucketPutResponse,
    type BucketListParams as BucketListParams,
    type BucketDeleteParams as BucketDeleteParams,
    type BucketGetParams as BucketGetParams,
    type BucketPutParams as BucketPutParams,
  };
}
