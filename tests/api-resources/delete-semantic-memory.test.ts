// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deleteSemanticMemory', () => {
  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.deleteSemanticMemory.delete({
      objectId: '01jxanr45haeswhay4n0q8340y',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.deleteSemanticMemory.delete({
      objectId: '01jxanr45haeswhay4n0q8340y',
      smartMemoryLocation: { moduleId: 'moduleId' },
      object_id: '01jxanr45haeswhay4n0q8340y',
      smart_memory_location: { moduleId: 'moduleId' },
    });
  });
});
