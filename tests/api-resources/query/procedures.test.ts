// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource procedures', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.query.procedures.search({
      smartMemoryLocation: { moduleId: 'moduleId' },
      terms: 'system prompt',
      n_most_recent: 10,
      nMostRecent: 10,
      procedural_memory_id: 'demo-smartmemory',
      proceduralMemoryId: 'demo-smartmemory',
      search_keys: true,
      search_values: true,
      searchKeys: true,
      searchValues: true,
      smart_memory_location: { moduleId: 'moduleId' },
    });
  });
});
