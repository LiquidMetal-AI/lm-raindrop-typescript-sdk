// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documentStatusBulk', () => {
  // Prism tests are disabled
  test.skip('getStatusBulk: only required params', async () => {
    const responsePromise = client.documentStatusBulk.getStatusBulk({
      bucketLocation: {
        bucket: { name: 'my-smartbucket', version: '01jxanr45haeswhay4n0q8340y', application_name: 'my-app' },
      },
      objectIds: ['document1.pdf', 'document2.pdf', 'document3.pdf'],
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
  test.skip('getStatusBulk: required and optional params', async () => {
    const response = await client.documentStatusBulk.getStatusBulk({
      bucketLocation: {
        bucket: { name: 'my-smartbucket', version: '01jxanr45haeswhay4n0q8340y', application_name: 'my-app' },
      },
      objectIds: ['document1.pdf', 'document2.pdf', 'document3.pdf'],
      partition: 'tenant-123',
    });
  });
});
