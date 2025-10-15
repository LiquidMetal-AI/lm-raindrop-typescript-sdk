// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memory', () => {
  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.query.memory.search({
      session_id: '01jxanr45haeswhay4n0q8340y',
      smart_memory_location: { smart_memory: { name: 'memory-name' } },
      terms: 'user interface preferences',
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
    const response = await client.query.memory.search({
      session_id: '01jxanr45haeswhay4n0q8340y',
      smart_memory_location: {
        smart_memory: { name: 'memory-name', application_name: 'demo', version: '1234' },
      },
      terms: 'user interface preferences',
      end_time: '2019-12-27T18:11:19.117Z',
      n_most_recent: 10,
      organization_id: 'organization_id',
      start_time: '2019-12-27T18:11:19.117Z',
      timeline: 'user-conversation-2024',
      user_id: 'user_id',
    });
  });
});
