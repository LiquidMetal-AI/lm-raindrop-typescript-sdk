// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documentQuery', () => {
  // skipped: tests are disabled for the time being
  test.skip('ask: only required params', async () => {
    const responsePromise = client.documentQuery.ask({
      bucket: '01jtgtrd37acrqf7k24dggg31s',
      input: 'What is the key points in this document?',
      object_id: 'object_id',
      request_id: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('ask: required and optional params', async () => {
    const response = await client.documentQuery.ask({
      bucket: '01jtgtrd37acrqf7k24dggg31s',
      input: 'What is the key points in this document?',
      object_id: 'object_id',
      request_id: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
