// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executeQuery', () => {
  // Prism tests are disabled
  test.skip('execute: only required params', async () => {
    const responsePromise = client.executeQuery.execute({
      smartSqlLocation: '{ module_id: "01jtryx2f2f61ryk06vd8mr91p" }',
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
  test.skip('execute: required and optional params', async () => {
    const response = await client.executeQuery.execute({
      smartSqlLocation: '{ module_id: "01jtryx2f2f61ryk06vd8mr91p" }',
      format: 'OUTPUT_FORMAT_UNSPECIFIED',
      sqlQuery: 'SELECT * FROM users WHERE active = true',
      textQuery: 'Show me all active users from the last month',
    });
  });
});
