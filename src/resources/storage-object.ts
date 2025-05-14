// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StorageObject extends APIResource {
  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter
   * (module ID) is used to identify the bucket to list objects from.
   *
   * @example
   * ```ts
   * const storageObjects = await client.storageObject.list(
   *   '01jtgtrd37acrqf7k24dggg31s',
   * );
   * ```
   */
  list(bucket: string, options?: RequestOptions): APIPromise<StorageObjectListResponse> {
    return this._client.get(path`/v1/object/${bucket}`, options);
  }

  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (module
   * ID) is used to identify the bucket to delete from. The key is the path to the
   * object in the bucket.
   *
   * @example
   * ```ts
   * const storageObject = await client.storageObject.delete(
   *   'my-key',
   *   { bucket: '01jtgtrd37acrqf7k24dggg31s' },
   * );
   * ```
   */
  delete(
    key: string,
    params: StorageObjectDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StorageObjectDeleteResponse> {
    const { bucket } = params;
    return this._client.delete(path`/v1/object/${bucket}/${key}`, options);
  }

  /**
   * Download a file from a SmartBucket or regular bucket. The bucket parameter
   * (module ID) is used to identify the bucket to download from. The key is the path
   * to the object in the bucket.
   *
   * @example
   * ```ts
   * const response = await client.storageObject.download(
   *   'my-key',
   *   { bucket: '01jtgtrd37acrqf7k24dggg31s' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(key: string, params: StorageObjectDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { bucket } = params;
    return this._client.get(path`/v1/object/${bucket}/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (module
   * ID) is used to identify the bucket to upload to. The key is the path to the
   * object in the bucket.
   *
   * @example
   * ```ts
   * const response = await client.storageObject.upload(
   *   'my-key',
   *   {
   *     bucket: '01jtgtrd37acrqf7k24dggg31s',
   *     body: fs.createReadStream('path/to/file'),
   *   },
   * );
   * ```
   */
  upload(
    key: string,
    params: StorageObjectUploadParams,
    options?: RequestOptions,
  ): APIPromise<StorageObjectUploadResponse> {
    const { bucket, body } = params;
    return this._client.put(path`/v1/object/${bucket}/${key}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface StorageObjectListResponse {
  objects?: Array<StorageObjectListResponse.Object>;
}

export namespace StorageObjectListResponse {
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
     * Size of the object in bytes (as string due to potential BigInt values)
     */
    size?: string;
  }
}

export interface StorageObjectDeleteResponse {
  success: boolean;
}

export interface StorageObjectUploadResponse {
  /**
   * ID of the bucket where the object was uploaded
   */
  bucket_id?: string;

  /**
   * Key/path of the uploaded object
   */
  key?: string;
}

export interface StorageObjectDeleteParams {
  /**
   * The module ID.
   */
  bucket: string;
}

export interface StorageObjectDownloadParams {
  /**
   * The module ID.
   */
  bucket: string;
}

export interface StorageObjectUploadParams {
  /**
   * Path param: The module ID.
   */
  bucket: string;

  /**
   * Body param:
   */
  body: Uploadable;
}

export declare namespace StorageObject {
  export {
    type StorageObjectListResponse as StorageObjectListResponse,
    type StorageObjectDeleteResponse as StorageObjectDeleteResponse,
    type StorageObjectUploadResponse as StorageObjectUploadResponse,
    type StorageObjectDeleteParams as StorageObjectDeleteParams,
    type StorageObjectDownloadParams as StorageObjectDownloadParams,
    type StorageObjectUploadParams as StorageObjectUploadParams,
  };
}
