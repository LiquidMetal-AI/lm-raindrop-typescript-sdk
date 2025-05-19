// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PutObject extends APIResource {
  /**
   * Upload a file to a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const response = await client.putObject.upload({
   *   content: 'U3RhaW5sZXNzIHJvY2tz',
   * });
   * ```
   */
  upload(body: PutObjectUploadParams, options?: RequestOptions): APIPromise<PutObjectUploadResponse> {
    return this._client.post('/v1/put_object', { body, ...options });
  }
}

export interface PutObjectUploadResponse {
  /**
   * Information about the bucket where the object was uploaded
   */
  bucket?: PutObjectUploadResponse.Bucket;

  /**
   * Key/path of the uploaded object
   */
  key?: string;
}

export namespace PutObjectUploadResponse {
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

export interface PutObjectUploadParams {
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

export declare namespace PutObject {
  export {
    type PutObjectUploadResponse as PutObjectUploadResponse,
    type PutObjectUploadParams as PutObjectUploadParams,
  };
}
