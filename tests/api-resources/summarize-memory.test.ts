// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summarizeMemory', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.summarizeMemory.create({
      memory_ids: ['01jxanr45haeswhay4n0q8340y', '01jxanr45haeswhay4n0q8341z'],
      session_id: '01jxanr45haeswhay4n0q8340y',
      smart_memory_location: { smart_memory: { name: 'memory-name' } },
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
    const response = await client.summarizeMemory.create({
      memory_ids: ['01jxanr45haeswhay4n0q8340y', '01jxanr45haeswhay4n0q8341z'],
      session_id: '01jxanr45haeswhay4n0q8340y',
      smart_memory_location: {
        smart_memory: { name: 'memory-name', application_name: 'demo', version: '1234' },
      },
      organization_id: 'organization_id',
      system_prompt: 'Summarize the key decisions and action items',
      user_id: 'user_id',
    });
  });
});
