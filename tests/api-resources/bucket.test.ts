// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bucket', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.bucket.list({ organizationId: 'organizationId', userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.bucket.list({
      organizationId: 'organizationId',
      userId: 'userId',
      moduleId: '01jtgtrd37acrqf7k24dggg31s',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.bucket.delete({ organizationId: 'organizationId', userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.bucket.delete({
      organizationId: 'organizationId',
      userId: 'userId',
      key: 'my-key',
      moduleId: '01jtgtrd37acrqf7k24dggg31s',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = client.bucket.get({ organizationId: 'organizationId', userId: 'userId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await client.bucket.get({
      organizationId: 'organizationId',
      userId: 'userId',
      key: 'my-key',
      moduleId: '01jtgtrd37acrqf7k24dggg31s',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('put: only required params', async () => {
    const responsePromise = client.bucket.put({
      content: 'U3RhaW5sZXNzIHJvY2tz',
      organizationId: 'organizationId',
      userId: 'userId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('put: required and optional params', async () => {
    const response = await client.bucket.put({
      content: 'U3RhaW5sZXNzIHJvY2tz',
      organizationId: 'organizationId',
      userId: 'userId',
      contentType: 'application/pdf',
      key: 'my-key',
      moduleId: '01jtgtrd37acrqf7k24dggg31s',
    });
  });
});
