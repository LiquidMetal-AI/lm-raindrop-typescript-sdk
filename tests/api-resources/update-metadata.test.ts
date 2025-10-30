// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource updateMetadata', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.updateMetadata.update({
      smartSqlLocation: { smartSql: { name: 'analytics-sql' } },
      tables: [{}],
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
  test.skip('update: required and optional params', async () => {
    const response = await client.updateMetadata.update({
      smartSqlLocation: {
        smartSql: {
          name: 'analytics-sql',
          application_name: 'data-analytics-app',
          applicationName: 'data-analytics-app',
          version: 'v1.2.0',
        },
      },
      tables: [
        {
          columns: [
            {
              columnName: 'user_id',
              dataType: 'INTEGER',
              isPrimaryKey: true,
              nullable: true,
              sampleData: '123',
            },
          ],
          createdAt: '2023-01-15T01:30:15.01Z',
          tableName: 'users',
          updatedAt: '2023-01-15T01:30:15.01Z',
        },
      ],
      mode: 'UPDATE_MODE_MERGE',
      smart_sql_location: {
        smartSql: {
          name: 'analytics-sql',
          application_name: 'data-analytics-app',
          applicationName: 'data-analytics-app',
          version: 'v1.2.0',
        },
      },
    });
  });
});
