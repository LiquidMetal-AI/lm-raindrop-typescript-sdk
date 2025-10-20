// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface LiquidmetalV1alpha1BucketResponse {
  /**
   * **EXAMPLE** "my-app"
   */
  applicationName?: string;

  /**
   * **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
   */
  applicationVersionId?: string;

  /**
   * **EXAMPLE** "my-smartbucket"
   */
  bucketName?: string;
}

/**
 * SmartMemoryName represents a smart memory name with an optional version
 */
export interface LiquidmetalV1alpha1SmartMemoryName {
  /**
   * The name of the smart memory **EXAMPLE** "my-smartmemory" **REQUIRED** TRUE
   */
  name: string;

  /**
   * Optional Application **EXAMPLE** "my-app" **REQUIRED** FALSE
   */
  applicationName?: string | null;

  /**
   * Optional version of the smart memory **EXAMPLE** "01jtryx2f2f61ryk06vd8mr91p"
   * **REQUIRED** FALSE
   */
  version?: string | null;
}
