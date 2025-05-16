// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Object extends APIResource {}

export interface BucketResponse {
  application_name?: string;

  application_version_id?: string;

  bucket_name?: string;

  module_id?: string;
}

export declare namespace Object {
  export { type BucketResponse as BucketResponse };
}
