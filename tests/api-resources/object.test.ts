// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raindrop from 'raindrop';

const client = new Raindrop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource object', () => {
  // skipped: tests are disabled for the time being
  test.skip('listObjects', async () => {
    const responsePromise = client.object.listObjects('bucket_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listObjects: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.object.listObjects(
        'bucket_name',
        { module_id: '01jtgtrd37acrqf7k24dggg31s' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Raindrop.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('putObject: only required params', async () => {
    const responsePromise = client.object.putObject('object_key', {
      bucket_name: 'bucket_name',
      content: 'U3RhaW5sZXNzIHJvY2tz',
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
  test.skip('putObject: required and optional params', async () => {
    const response = await client.object.putObject('object_key', {
      bucket_name: 'bucket_name',
      content: 'U3RhaW5sZXNzIHJvY2tz',
      content_type: 'application/pdf',
      key: 'my-key',
      module_id: '01jtgtrd37acrqf7k24dggg31s',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveObject: only required params', async () => {
    const responsePromise = client.object.retrieveObject('object_key', { bucket_name: 'bucket_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveObject: required and optional params', async () => {
    const response = await client.object.retrieveObject('object_key', {
      bucket_name: 'bucket_name',
      key: 'my-key',
      module_id: '01jtgtrd37acrqf7k24dggg31s',
    });
  });
});
