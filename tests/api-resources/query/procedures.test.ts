// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource procedures', () => {
  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.query.procedures.search({
      smartMemoryLocation: { moduleId: 'moduleId' },
      terms: 'system prompt',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.query.procedures.search({
      smartMemoryLocation: { moduleId: 'moduleId' },
      terms: 'system prompt',
      nMostRecent: 10,
      proceduralMemoryId: 'demo-smartmemory',
      searchKeys: true,
      searchValues: true,
    });
  });
});
