// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from 'raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource object', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.object.retrieve('object_key', {
      bucket_name: 'bucket_name',
      key: 'key',
      module_id: 'module_id',
      organization_id: 'organization_id',
      user_id: 'user_id',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.object.retrieve('object_key', {
      bucket_name: 'bucket_name',
      key: 'key',
      module_id: 'module_id',
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.object.list('bucket_name', {
      module_id: 'module_id',
      organization_id: 'organization_id',
      user_id: 'user_id',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.object.list('bucket_name', {
      module_id: 'module_id',
      organization_id: 'organization_id',
      user_id: 'user_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: only required params', async () => {
    const responsePromise = client.object.upload('object_key', {
      bucket_name: 'bucket_name',
      query_key: 'key',
      query_module_id: 'module_id',
      query_organization_id: 'organization_id',
      query_user_id: 'user_id',
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.object.upload('object_key', {
      bucket_name: 'bucket_name',
      query_key: 'key',
      query_module_id: 'module_id',
      query_organization_id: 'organization_id',
      query_user_id: 'user_id',
      content: 'U3RhaW5sZXNzIHJvY2tz',
      content_type: 'content_type',
      body_key: 'key',
      body_module_id: 'module_id',
      body_organization_id: 'organization_id',
      body_user_id: 'user_id',
    });
  });
});
