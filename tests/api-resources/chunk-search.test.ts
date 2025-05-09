// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chunkSearch', () => {
  // skipped: tests are disabled for the time being
  test.skip('execute: only required params', async () => {
    const responsePromise = client.chunkSearch.execute({
      bucket_ids: ['string'],
      input: 'input',
      request_id: 'request_id',
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
  test.skip('execute: required and optional params', async () => {
    const response = await client.chunkSearch.execute({
      bucket_ids: ['string'],
      input: 'input',
      request_id: 'request_id',
    });
  });
});
