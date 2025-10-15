// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bucket', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.bucket.list({ bucket_location: { bucket: { name: 'my-smartbucket' } } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.bucket.list({
      bucket_location: {
        bucket: { name: 'my-smartbucket', application_name: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.bucket.delete({
      bucket_location: { bucket: { name: 'my-smartbucket' } },
      key: 'my-key',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.bucket.delete({
      bucket_location: {
        bucket: { name: 'my-smartbucket', application_name: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      key: 'my-key',
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.bucket.get({
      bucket_location: { bucket: { name: 'my-smartbucket' } },
      key: 'my-key',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.bucket.get({
      bucket_location: {
        bucket: { name: 'my-smartbucket', application_name: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      key: 'my-key',
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('put: only required params', async () => {
    const responsePromise = client.bucket.put({
      bucket_location: { bucket: { name: 'my-smartbucket' } },
      content: 'U3RhaW5sZXNzIHJvY2tz',
      content_type: 'application/pdf',
      key: 'my-key',
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
  test.skip('put: required and optional params', async () => {
    const response = await client.bucket.put({
      bucket_location: {
        bucket: { name: 'my-smartbucket', application_name: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      content: 'U3RhaW5sZXNzIHJvY2tz',
      content_type: 'application/pdf',
      key: 'my-key',
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });
});
