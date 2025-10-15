// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from '@liquidmetal-ai/lm-raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource query', () => {
  // Prism tests are disabled
  test.skip('chunkSearch: only required params', async () => {
    const responsePromise = client.query.chunkSearch({
      bucket_locations: [{ bucket: { name: 'my-smartbucket' } }],
      input: 'Find documents about revenue in Q4 2023',
      request_id: '<YOUR-REQUEST-ID>',
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
  test.skip('chunkSearch: required and optional params', async () => {
    const response = await client.query.chunkSearch({
      bucket_locations: [
        {
          bucket: {
            name: 'my-smartbucket',
            application_name: 'my-app',
            version: '01jxanr45haeswhay4n0q8340y',
          },
        },
      ],
      input: 'Find documents about revenue in Q4 2023',
      request_id: '<YOUR-REQUEST-ID>',
      organization_id: 'organization_id',
      partition: 'tenant-123',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('documentQuery: only required params', async () => {
    const responsePromise = client.query.documentQuery({
      bucket_location: { bucket: { name: 'my-smartbucket' } },
      input: 'What are the key points in this document?',
      object_id: 'document.pdf',
      request_id: '<YOUR-REQUEST-ID>',
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
  test.skip('documentQuery: required and optional params', async () => {
    const response = await client.query.documentQuery({
      bucket_location: {
        bucket: { name: 'my-smartbucket', application_name: 'my-app', version: '01jxanr45haeswhay4n0q8340y' },
      },
      input: 'What are the key points in this document?',
      object_id: 'document.pdf',
      request_id: '<YOUR-REQUEST-ID>',
      organization_id: 'organization_id',
      partition: 'tenant-123',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('getPaginatedSearch: only required params', async () => {
    const responsePromise = client.query.getPaginatedSearch({
      page: 1,
      page_size: 10,
      request_id: '<YOUR-REQUEST-ID>',
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
  test.skip('getPaginatedSearch: required and optional params', async () => {
    const response = await client.query.getPaginatedSearch({
      page: 1,
      page_size: 10,
      request_id: '<YOUR-REQUEST-ID>',
      organization_id: 'organization_id',
      partition: 'tenant-123',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.query.search({
      bucket_locations: [{ bucket: { name: 'my-smartbucket' } }],
      input: 'All my files',
      request_id: '<YOUR-REQUEST-ID>',
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
    const response = await client.query.search({
      bucket_locations: [
        {
          bucket: {
            name: 'my-smartbucket',
            application_name: 'my-app',
            version: '01jxanr45haeswhay4n0q8340y',
          },
        },
      ],
      input: 'All my files',
      request_id: '<YOUR-REQUEST-ID>',
      organization_id: 'organization_id',
      partition: 'tenant-123',
      user_id: 'user_id',
    });
  });

  // Prism tests are disabled
  test.skip('sumarizePage: only required params', async () => {
    const responsePromise = client.query.sumarizePage({
      page: 1,
      page_size: 10,
      request_id: '<YOUR-REQUEST-ID>',
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
  test.skip('sumarizePage: required and optional params', async () => {
    const response = await client.query.sumarizePage({
      page: 1,
      page_size: 10,
      request_id: '<YOUR-REQUEST-ID>',
      organization_id: 'organization_id',
      partition: 'tenant-123',
      user_id: 'user_id',
    });
  });
});
