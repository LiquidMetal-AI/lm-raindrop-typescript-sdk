// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from 'raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource liquidmetalV1alpha1SearchAgentService', () => {
  // skipped: tests are disabled for the time being
  test.skip('getPaginatedResults: only required params', async () => {
    const responsePromise = client.liquidmetalV1alpha1SearchAgentService.getPaginatedResults({
      'Connect-Protocol-Version': 1,
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
  test.skip('getPaginatedResults: required and optional params', async () => {
    const response = await client.liquidmetalV1alpha1SearchAgentService.getPaginatedResults({
      'Connect-Protocol-Version': 1,
      organization_id: 'organization_id',
      page: 0,
      page_size: 0,
      request_id: 'request_id',
      user_id: 'user_id',
      'Connect-Timeout-Ms': 0,
    });
  });
});
