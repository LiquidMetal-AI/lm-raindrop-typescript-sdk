// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documentStatus', () => {
  // Prism tests are disabled
  test.skip('getStatus: only required params', async () => {
    const responsePromise = client.documentStatus.getStatus({
      bucketLocation:
        '{{"bucket": {{"name": "my-smartbucket", "version": "01jxanr45haeswhay4n0q8340y", "application_name": "my-app"}}}}',
      objectId: 'document.pdf',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStatus: required and optional params', async () => {
    const response = await client.documentStatus.getStatus({
      bucketLocation:
        '{{"bucket": {{"name": "my-smartbucket", "version": "01jxanr45haeswhay4n0q8340y", "application_name": "my-app"}}}}',
      objectId: 'document.pdf',
      partition: 'tenant-123',
    });
  });
});
