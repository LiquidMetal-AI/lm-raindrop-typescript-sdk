// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Object extends APIResource {
  /**
   * Download a file from a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to download from. The key is the path to the
   * object in the bucket.
   *
   * @example
   * ```ts
   * const object = await client.object.retrieve('my-key', {
   *   module_id: '01jtgtrd37acrqf7k24dggg31s',
   * });
   * ```
   */
  retrieve(
    key: string,
    params: ObjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ObjectRetrieveResponse> {
    const { module_id } = params;
    return this._client.get(path`/v1/object/${module_id}/${key}`, options);
  }

  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to list objects from.
   *
   * @example
   * ```ts
   * const objects = await client.object.list(
   *   '01jtgtrd37acrqf7k24dggg31s',
   * );
   * ```
   */
  list(moduleID: string, options?: RequestOptions): APIPromise<ObjectListResponse> {
    return this._client.get(path`/v1/object/${moduleID}`, options);
  }

  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const object = await client.object.delete('my-key', {
   *   module_id: '01jtgtrd37acrqf7k24dggg31s',
   * });
   * ```
   */
  delete(key: string, params: ObjectDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { module_id } = params;
    return this._client.delete(path`/v1/object/${module_id}/${key}`, options);
  }

  /**
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const response = await client.object.upload('my-key', {
   *   path_module_id: '01jtgtrd37acrqf7k24dggg31s',
   *   content: 'U3RhaW5sZXNzIHJvY2tz',
   * });
   * ```
   */
  upload(
    key: string,
    params: ObjectUploadParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUploadResponse> {
    const { path_module_id, ...body } = params;
    return this._client.post(path`/v1/object/${path_module_id}/${key}`, { body, ...options });
  }
}

export interface ObjectRetrieveResponse {
  /**
   * No specific comments in original for these fields directly, but they were part
   * of the original GetObjectResponse.
   */
  content?: string;

  content_type?: string;
}

export interface ObjectListResponse {
  /**
   * List of objects in the bucket with their metadata
   */
  objects?: Array<ObjectListResponse.Object>;
}

export namespace ObjectListResponse {
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

export type ObjectDeleteResponse = unknown;

export interface ObjectUploadResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  bucket?: ObjectUploadResponse.Bucket;

  /**
   * Key/path of the uploaded object
   */
  key?: string;
}

export namespace ObjectUploadResponse {
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

export interface ObjectRetrieveParams {
  /**
   * Module ID identifying the bucket
   */
  module_id: string;
}

export interface ObjectDeleteParams {
  /**
   * Module ID identifying the bucket
   */
  module_id: string;
}

export interface ObjectUploadParams {
  /**
   * Path param: Module ID identifying the bucket
   */
  path_module_id: string;

  /**
   * Body param: Binary content of the object
   */
  content: string;

  /**
   * Body param: MIME type of the object
   */
  content_type?: string;

  /**
   * Body param: Module ID identifying the bucket
   */
  body_module_id?: string;
}

export declare namespace Object {
  export {
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectUploadResponse as ObjectUploadResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectUploadParams as ObjectUploadParams,
  };
}
