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

# Chat

# Object

Types:

- <code><a href="./src/resources/object.ts">ObjectListObjectsResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectPutObjectResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectRetrieveObjectResponse</a></code>

Methods:

- <code title="get /v1/object/{bucket_name}">client.object.<a href="./src/resources/object.ts">listObjects</a>(bucketName, { ...params }) -> ObjectListObjectsResponse</code>
- <code title="post /v1/object/{bucket_name}/{object_key}">client.object.<a href="./src/resources/object.ts">putObject</a>(objectKey, { ...params }) -> ObjectPutObjectResponse</code>
- <code title="get /v1/object/{bucket_name}/{object_key}">client.object.<a href="./src/resources/object.ts">retrieveObject</a>(objectKey, { ...params }) -> ObjectRetrieveObjectResponse</code>
