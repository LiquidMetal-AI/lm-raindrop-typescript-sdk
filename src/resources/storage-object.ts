// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StorageObject extends APIResource {
  /**
   * List all objects in a SmartBucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to list objects from.
   *
   * @example
   * ```ts
   * const response = await client.storageObject.listObjects(
   *   'bucket_name',
   * );
   * ```
   */
  listObjects(
    bucketName: string,
    query: StorageObjectListObjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StorageObjectListObjectsResponse> {
    return this._client.get(path`/v1/object/${bucketName}`, { query, ...options });
  }

  /**
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const response = await client.storageObject.putObject(
   *   'object_key',
   *   {
   *     bucket_name: 'bucket_name',
   *     content: 'U3RhaW5sZXNzIHJvY2tz',
   *   },
   * );
   * ```
   */
  putObject(
    objectKey: string,
    params: StorageObjectPutObjectParams,
    options?: RequestOptions,
  ): APIPromise<StorageObjectPutObjectResponse> {
    const { bucket_name, ...body } = params;
    return this._client.post(path`/v1/object/${bucket_name}/${objectKey}`, { body, ...options });
  }

  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const response = await client.storageObject.retrieveObject(
   *   'object_key',
   *   { bucket_name: 'bucket_name' },
   * );
   * ```
   */
  retrieveObject(
    objectKey: string,
    params: StorageObjectRetrieveObjectParams,
    options?: RequestOptions,
  ): APIPromise<StorageObjectRetrieveObjectResponse> {
    const { bucket_name, ...query } = params;
    return this._client.get(path`/v1/object/${bucket_name}/${objectKey}`, { query, ...options });
  }
}

export interface StorageObjectListObjectsResponse {
  /**
   * List of objects in the bucket with their metadata
   */
  objects?: Array<StorageObjectListObjectsResponse.Object>;
}

export namespace StorageObjectListObjectsResponse {
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

export interface StorageObjectPutObjectResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  bucket?: StorageObjectPutObjectResponse.Bucket;

  /**
   * Key/path of the uploaded object
   */
  key?: string;
}

export namespace StorageObjectPutObjectResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  export interface Bucket {
    application_name?: string;

    application_version_id?: string;

    bucket_name?: string;

    module_id?: string;
  }
}

export interface StorageObjectRetrieveObjectResponse {
  /**
   * Information about the bucket where the object is stored
   */
  bucket?: StorageObjectRetrieveObjectResponse.Bucket;

  /**
   * MIME type of the object
   */
  content_type?: string;

  /**
   * The object data as a base64 encoded string
   */
  data?: string;

  /**
   * Key/path of the object
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

export namespace StorageObjectRetrieveObjectResponse {
  /**
   * Information about the bucket where the object is stored
   */
  export interface Bucket {
    application_name?: string;

    application_version_id?: string;

    bucket_name?: string;

    module_id?: string;
  }
}

export interface StorageObjectListObjectsParams {
  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export interface StorageObjectPutObjectParams {
  /**
   * Path param:
   */
  bucket_name: string;

  /**
   * Body param: Binary content of the object
   */
  content: string;

  /**
   * Body param: MIME type of the object
   */
  content_type?: string;

  /**
   * Body param: Object key/path in the bucket
   */
  key?: string;

  /**
   * Body param: Module ID identifying the bucket
   */
  module_id?: string;
}

export interface StorageObjectRetrieveObjectParams {
  /**
   * Path param:
   */
  bucket_name: string;

  /**
   * Query param: Object key/path to delete
   */
  key?: string;

  /**
   * Query param: Module ID identifying the bucket
   */
  module_id?: string;
}

export declare namespace StorageObject {
  export {
    type StorageObjectListObjectsResponse as StorageObjectListObjectsResponse,
    type StorageObjectPutObjectResponse as StorageObjectPutObjectResponse,
    type StorageObjectRetrieveObjectResponse as StorageObjectRetrieveObjectResponse,
    type StorageObjectListObjectsParams as StorageObjectListObjectsParams,
    type StorageObjectPutObjectParams as StorageObjectPutObjectParams,
    type StorageObjectRetrieveObjectParams as StorageObjectRetrieveObjectParams,
  };
}
