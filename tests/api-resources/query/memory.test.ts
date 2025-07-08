// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource memory', () => {
  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.query.memory.search({
      agentMemoryLocation: { agentMemory: { name: 'memory-name' } },
      sessionId: '01jxanr45haeswhay4n0q8340y',
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

  // skipped: tests are disabled for the time being
  test.skip('search: required and optional params', async () => {
    const response = await client.query.memory.search({
      agentMemoryLocation: {
        agentMemory: { name: 'memory-name', applicationName: 'my-app', version: '1234' },
      },
      sessionId: '01jxanr45haeswhay4n0q8340y',
      terms: 'user interface preferences',
      endTime: '2019-12-27T18:11:19.117Z',
      nMostRecent: 10,
      startTime: '2019-12-27T18:11:19.117Z',
      timeline: 'user-conversation-2024',
    });
  });
});
