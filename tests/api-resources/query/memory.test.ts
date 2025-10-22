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
      sessionId: '01jxanr45haeswhay4n0q8340y',
      smartMemoryLocation: {
        smartMemory: { name: 'memory-name', application_name: 'demo', version: '1234' },
      },
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
      sessionId: '01jxanr45haeswhay4n0q8340y',
      smartMemoryLocation: {
        smartMemory: { name: 'memory-name', application_name: 'demo', version: '1234' },
      },
      terms: 'user interface preferences',
      endTime: '2023-01-15T01:30:15.01Z',
      nMostRecent: 10,
      startTime: '2023-01-15T01:30:15.01Z',
      timeline: 'user-conversation-2024',
    });
  });
});
