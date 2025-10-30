// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource getProcedure', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.getProcedure.create({
      key: 'TechnicalReportSystemPrompt',
      smartMemoryLocation: { moduleId: 'moduleId' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.getProcedure.create({
      key: 'TechnicalReportSystemPrompt',
      smartMemoryLocation: { moduleId: 'moduleId' },
      procedural_memory_id: 'demo-smartmemory',
      proceduralMemoryId: 'demo-smartmemory',
      smart_memory_location: { moduleId: 'moduleId' },
    });
  });
});
