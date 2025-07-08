// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  // skipped: tests are disabled for the time being
  test.skip('chunkSearch: only required params', async () => {
    const responsePromise = client.query.chunkSearch({
      bucketLocations: [{ bucket: { name: 'my-smartbucket' } }],
      input: 'Find documents about revenue in Q4 2023',
      requestId: '<YOUR-REQUEST-ID>',
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
  test.skip('chunkSearch: required and optional params', async () => {
    const response = await client.query.chunkSearch({
      bucketLocations: [
        {
          bucket: {
            name: 'my-smartbucket',
            applicationName: 'my-app',
            version: '01jxanr45haeswhay4n0q8340y',
          },
        },
      ],
      input: 'Find documents about revenue in Q4 2023',
      requestId: '<YOUR-REQUEST-ID>',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('documentQuery: only required params', async () => {
    const responsePromise = client.query.documentQuery({
      bucketLocation: { bucket: { name: 'my-smartbucket' } },
      input: 'What are the key points in this document?',
      objectId: 'document.pdf',
      requestId: '<YOUR-REQUEST-ID>',
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
  test.skip('documentQuery: required and optional params', async () => {
    const response = await client.query.documentQuery({
      bucketLocation: {
        bucket: { name: 'my-smartbucket', applicationName: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      input: 'What are the key points in this document?',
      objectId: 'document.pdf',
      requestId: '<YOUR-REQUEST-ID>',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getPaginatedSearch: only required params', async () => {
    const responsePromise = client.query.getPaginatedSearch({
      page: 1,
      pageSize: 10,
      requestId: '<YOUR-REQUEST-ID>',
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
  test.skip('getPaginatedSearch: required and optional params', async () => {
    const response = await client.query.getPaginatedSearch({
      page: 1,
      pageSize: 10,
      requestId: '<YOUR-REQUEST-ID>',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.query.search({
      bucketLocations: [{ bucket: { name: 'my-smartbucket' } }],
      input: 'All my files',
      requestId: '<YOUR-REQUEST-ID>',
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
    const response = await client.query.search({
      bucketLocations: [
        {
          bucket: {
            name: 'my-smartbucket',
            applicationName: 'my-app',
            version: '01jxanr45haeswhay4n0q8340y',
          },
        },
      ],
      input: 'All my files',
      requestId: '<YOUR-REQUEST-ID>',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('sumarizePage: only required params', async () => {
    const responsePromise = client.query.sumarizePage({
      page: 1,
      pageSize: 10,
      requestId: '<YOUR-REQUEST-ID>',
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
  test.skip('sumarizePage: required and optional params', async () => {
    const response = await client.query.sumarizePage({
      page: 1,
      pageSize: 10,
      requestId: '<YOUR-REQUEST-ID>',
    });
  });
});
