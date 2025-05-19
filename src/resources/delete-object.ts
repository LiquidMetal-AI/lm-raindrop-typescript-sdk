// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteObject extends APIResource {
  /**
   * Delete a file from a SmartBucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to delete from. The key is the path to the object in
   * the bucket.
   *
   * @example
   * ```ts
   * const deleteObject = await client.deleteObject.delete();
   * ```
   */
  delete(body: DeleteObjectDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/delete_object', { body, ...options });
  }
}

export type DeleteObjectDeleteResponse = unknown;

export interface DeleteObjectDeleteParams {
  /**
   * Object key/path to delete
   */
  key?: string;

  /**
   * Module ID identifying the bucket
   */
  module_id?: string;
}

export declare namespace DeleteObject {
  export {
    type DeleteObjectDeleteResponse as DeleteObjectDeleteResponse,
    type DeleteObjectDeleteParams as DeleteObjectDeleteParams,
  };
}
