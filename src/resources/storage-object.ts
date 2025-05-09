// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class StorageObject extends APIResource {
  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
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
}

export interface StorageObjectDeleteResponse {
  success: boolean;
}

export interface StorageObjectDeleteParams {
  /**
   * The bucket identifier
   */
  bucket: string;
}

export declare namespace StorageObject {
  export {
    type StorageObjectDeleteResponse as StorageObjectDeleteResponse,
    type StorageObjectDeleteParams as StorageObjectDeleteParams,
  };
}
