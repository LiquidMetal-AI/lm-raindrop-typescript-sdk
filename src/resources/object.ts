// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Object extends APIResource {
  /**
   * **DESCRIPTION** Delete a file from a SmartBucket or regular bucket. The bucket
   * parameter (ID) is used to identify the bucket to delete from. The key is the
   * path to the object in the bucket.
   */
  retrieve(
    objectKey: string,
    params: ObjectRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ObjectRetrieveResponse> {
    const { bucket_name, ...query } = params;
    return this._client.get(path`/v1/object/${bucket_name}/${objectKey}`, { query, ...options });
  }

  /**
   * **DESCRIPTION** List all objects in a SmartBucket or regular bucket. The bucket
   * parameter (ID) is used to identify the bucket to list objects from.
   */
  list(
    bucketName: string,
    query: ObjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectListResponse> {
    return this._client.get(path`/v1/object/${bucketName}`, { query, ...options });
  }

  /**
   * PutObject uploads an object to a bucket **DESCRIPTION** Upload a file to a
   * SmartBucket or regular bucket. The bucket parameter (ID) is used to identify the
   * bucket to upload to. The key is the path to the object in the bucket.
   */
  upload(
    objectKey: string,
    params: ObjectUploadParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUploadResponse> {
    const { bucket_name, ...body } = params;
    return this._client.post(path`/v1/object/${bucket_name}/${objectKey}`, { body, ...options });
  }
}

export interface BucketResponse {
  application_name?: string;

  application_version_id?: string;

  bucket_name?: string;

  module_id?: string;
}

export interface ObjectRetrieveResponse {
  /**
   * **DESCRIPTION** Information about the bucket where the object is stored
   * **REQUIRED** true **EXAMPLE** {"module_id": "01jt3vs2nyt2xwk2f54x2bkn84",
   * "bucket_name": "mr-bucket", "application_version_id":
   * "01jt3vs1qggsy39eeyq4k295q1", "application_name": "demo-smartbucket"}
   */
  bucket?: BucketResponse;

  /**
   * **DESCRIPTION** MIME type of the object **REQUIRED** true **EXAMPLE**
   * "application/pdf"
   */
  content_type?: string;

  /**
   * **DESCRIPTION** The object data as a base64 encoded string **REQUIRED** true
   * **EXAMPLE** "SGVsbG8gV29ybGQh"
   */
  data?: string;

  /**
   * **DESCRIPTION** Key/path of the object **REQUIRED** true **EXAMPLE**
   * "08036c5a50a93da84c5c45ba468c58159d75281e.pdf"
   */
  key?: string;

  /**
   * **DESCRIPTION** Last modification timestamp **REQUIRED** true **EXAMPLE**
   * "2025-05-05T18:36:43.029Z"
   */
  last_modified?: string;

  /**
   * **DESCRIPTION** Size of the object in bytes **REQUIRED** true **EXAMPLE** 401107
   */
  size?: number | string;
}

export interface ObjectListResponse {
  /**
   * **DESCRIPTION** List of objects in the bucket with their metadata **REQUIRED**
   * true **EXAMPLE** [{"key": "08036c5a50a93da84c5c45ba468c58159d75281e.pdf",
   * "size": "401107", "content_type": "application/pdf", "last_modified":
   * "2025-05-05T18:36:43.029Z"}, {"key":
   * "0a29925ccc5e6299e132a73325956a3abef6dd26.pdf", "size": "57173", "content_type":
   * "application/pdf", "last_modified": "2025-05-05T18:36:43.985Z"}, {"key":
   * "0e21835a42a6df2405496f62647058ff855743c1.pdf", "size": "1223197",
   * "content_type": "application/pdf", "last_modified": "2025-05-05T18:36:45.362Z"}]
   */
  objects?: Array<ObjectListResponse.Object>;
}

export namespace ObjectListResponse {
  /**
   * ObjectInfo represents metadata about a single object
   */
  export interface Object {
    /**
     * **DESCRIPTION** MIME type of the object **REQUIRED** true **EXAMPLE**
     * "application/pdf"
     */
    content_type?: string;

    /**
     * **DESCRIPTION** Object key/path in the bucket **REQUIRED** true **EXAMPLE**
     * "08036c5a50a93da84c5c45ba468c58159d75281e.pdf"
     */
    key?: string;

    /**
     * **DESCRIPTION** Last modification timestamp **REQUIRED** true **EXAMPLE**
     * "2025-05-05T18:36:43.029Z"
     */
    last_modified?: string;

    /**
     * **DESCRIPTION** Size of the object in bytes **REQUIRED** true **EXAMPLE** 401107
     */
    size?: number | string;
  }
}

export interface ObjectUploadResponse {
  /**
   * **DESCRIPTION** Information about the bucket where the object was uploaded
   * **REQUIRED** true **EXAMPLE** {"module_id": "01jt3vs2nyt2xwk2f54x2bkn84",
   * "bucket_name": "mr-bucket", "application_version_id":
   * "01jt3vs1qggsy39eeyq4k295q1", "application_name": "demo-smartbucket"}
   */
  bucket?: BucketResponse;

  /**
   * **DESCRIPTION** Key/path of the uploaded object **REQUIRED** true **EXAMPLE**
   * "test-object.txt"
   */
  key?: string;
}

export interface ObjectRetrieveParams {
  /**
   * Path param:
   */
  bucket_name: string;

  /**
   * Query param: **DESCRIPTION** Object key/path to delete **REQUIRED** true
   * **EXAMPLE** "my-key"
   */
  key?: string;

  /**
   * Query param: **DESCRIPTION** Module ID identifying the bucket **REQUIRED** true
   * **EXAMPLE** "01jtgtrd37acrqf7k24dggg31s"
   */
  module_id?: string;

  /**
   * Query param: **DESCRIPTION** Organization ID for access control **REQUIRED**
   * true
   */
  organization_id?: string;

  /**
   * Query param: **DESCRIPTION** User ID for access control **REQUIRED** true
   */
  user_id?: string;
}

export interface ObjectListParams {
  /**
   * **DESCRIPTION** Module ID identifying the bucket **REQUIRED** true **EXAMPLE**
   * "01jtgtrd37acrqf7k24dggg31s"
   */
  module_id?: string;

  /**
   * **DESCRIPTION** Organization ID for access control **REQUIRED** true
   */
  organization_id?: string;

  /**
   * **DESCRIPTION** User ID for access control **REQUIRED** true
   */
  user_id?: string;
}

export interface ObjectUploadParams {
  /**
   * Path param:
   */
  bucket_name: string;

  /**
   * Body param: **DESCRIPTION** Binary content of the object **REQUIRED** true
   */
  content?: string;

  /**
   * Body param: **DESCRIPTION** MIME type of the object **REQUIRED** true
   * **EXAMPLE** "application/pdf"
   */
  content_type?: string;

  /**
   * Body param: **DESCRIPTION** Object key/path in the bucket **REQUIRED** true
   * **EXAMPLE** "my-key"
   */
  key?: string;

  /**
   * Body param: **DESCRIPTION** Module ID identifying the bucket **REQUIRED** true
   * **EXAMPLE** "01jtgtrd37acrqf7k24dggg31s"
   */
  module_id?: string;

  /**
   * Body param: **DESCRIPTION** Organization ID for access control **REQUIRED** true
   */
  organization_id?: string;

  /**
   * Body param: **DESCRIPTION** User ID for access control **REQUIRED** true
   */
  user_id?: string;
}

export declare namespace Object {
  export {
    type BucketResponse as BucketResponse,
    type ObjectRetrieveResponse as ObjectRetrieveResponse,
    type ObjectListResponse as ObjectListResponse,
    type ObjectUploadResponse as ObjectUploadResponse,
    type ObjectRetrieveParams as ObjectRetrieveParams,
    type ObjectListParams as ObjectListParams,
    type ObjectUploadParams as ObjectUploadParams,
  };
}
