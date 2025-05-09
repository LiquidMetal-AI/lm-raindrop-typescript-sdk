// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StorageObject extends APIResource {
  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to list objects from.
   */
  list(bucket: string, options?: RequestOptions): APIPromise<StorageObjectListResponse> {
    return this._client.get(path`/v1/object/${bucket}`, options);
  }

  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
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
   * Download a file from a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to download from. The key is the path to the
   * object in the bucket.
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
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
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
  bucket: string;

  key: string;

  success: boolean;
}

export interface StorageObjectDeleteParams {
  /**
   * The bucket identifier
   */
  bucket: string;
}

export interface StorageObjectDownloadParams {
  /**
   * The bucket identifier
   */
  bucket: string;
}

export interface StorageObjectUploadParams {
  /**
   * Path param: The bucket identifier
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
