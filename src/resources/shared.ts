// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface LiquidmetalV1alpha1BucketResponse {
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

/**
 * SmartMemoryName represents a smart memory name with an optional version
 */
export interface LiquidmetalV1alpha1SmartMemoryName {
  /**
   * Optional Application **EXAMPLE** "my-app" **REQUIRED** TRUE
   */
  application_name: string | null;

  /**
   * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
   */
  name: string;

  /**
   * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
   * **REQUIRED** TRUE
   */
  version: string | null;
}
