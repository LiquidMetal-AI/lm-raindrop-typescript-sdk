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
      smartSqlLocation: { smartSql: { name: 'analytics-sql' } },
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
      smartSqlLocation: {
        smartSql: {
          name: 'analytics-sql',
          application_name: 'data-analytics-app',
          applicationName: 'data-analytics-app',
          version: 'v1.2.0',
        },
      },
      format: 'OUTPUT_FORMAT_UNSPECIFIED',
      smart_sql_location: {
        smartSql: {
          name: 'analytics-sql',
          application_name: 'data-analytics-app',
          applicationName: 'data-analytics-app',
          version: 'v1.2.0',
        },
      },
      sql_query: 'SELECT * FROM users WHERE active = true',
      sqlQuery: 'SELECT * FROM users WHERE active = true',
      text_query: 'Show me all active users from the last month',
      textQuery: 'Show me all active users from the last month',
    });
  });
});
