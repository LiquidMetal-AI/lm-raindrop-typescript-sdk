# Object

Types:

- <code><a href="./src/resources/object.ts">BucketResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectUploadResponse</a></code>

Methods:

- <code title="get /v1/object/{bucket_name}/{object_key}">client.object.<a href="./src/resources/object.ts">retrieve</a>(objectKey, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="get /v1/object/{bucket_name}">client.object.<a href="./src/resources/object.ts">list</a>(bucketName, { ...params }) -> ObjectListResponse</code>
- <code title="post /v1/object/{bucket_name}/{object_key}">client.object.<a href="./src/resources/object.ts">upload</a>(objectKey, { ...params }) -> ObjectUploadResponse</code>
