# Search

Types:

- <code><a href="./src/resources/search.ts">SearchFindResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">find</a>({ ...params }) -> SearchFindResponse</code>

# DocumentQuery

Types:

- <code><a href="./src/resources/document-query.ts">DocumentQueryAskResponse</a></code>

Methods:

- <code title="post /v1/document_query">client.documentQuery.<a href="./src/resources/document-query.ts">ask</a>({ ...params }) -> DocumentQueryAskResponse</code>

# ChunkSearch

Types:

- <code><a href="./src/resources/chunk-search.ts">ChunkSearchFindResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.chunkSearch.<a href="./src/resources/chunk-search.ts">find</a>({ ...params }) -> ChunkSearchFindResponse</code>

# SummarizePage

Types:

- <code><a href="./src/resources/summarize-page.ts">SummarizePageCreateResponse</a></code>

Methods:

- <code title="post /v1/summarize_page">client.summarizePage.<a href="./src/resources/summarize-page.ts">create</a>({ ...params }) -> SummarizePageCreateResponse</code>

# StorageObject

Types:

- <code><a href="./src/resources/storage-object.ts">StorageObjectListObjectsResponse</a></code>
- <code><a href="./src/resources/storage-object.ts">StorageObjectPutObjectResponse</a></code>
- <code><a href="./src/resources/storage-object.ts">StorageObjectRetrieveObjectResponse</a></code>

Methods:

- <code title="get /v1/object/{bucket_name}">client.storageObject.<a href="./src/resources/storage-object.ts">listObjects</a>(bucketName, { ...params }) -> StorageObjectListObjectsResponse</code>
- <code title="post /v1/object/{bucket_name}/{object_key}">client.storageObject.<a href="./src/resources/storage-object.ts">putObject</a>(objectKey, { ...params }) -> StorageObjectPutObjectResponse</code>
- <code title="get /v1/object/{bucket_name}/{object_key}">client.storageObject.<a href="./src/resources/storage-object.ts">retrieveObject</a>(objectKey, { ...params }) -> StorageObjectRetrieveObjectResponse</code>
