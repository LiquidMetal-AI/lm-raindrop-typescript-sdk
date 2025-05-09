# Search

Types:

- <code><a href="./src/resources/search.ts">SearchResponse</a></code>
- <code><a href="./src/resources/search.ts">TextResult</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">create</a>({ ...params }) -> SearchResponse</code>
- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">retrieve</a>({ ...params }) -> SearchResponse</code>

# DocumentQuery

Types:

- <code><a href="./src/resources/document-query.ts">DocumentQueryCreateResponse</a></code>

Methods:

- <code title="post /v1/document_query">client.documentQuery.<a href="./src/resources/document-query.ts">create</a>({ ...params }) -> DocumentQueryCreateResponse</code>

# ChunkSearch

Types:

- <code><a href="./src/resources/chunk-search.ts">ChunkSearchExecuteResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.chunkSearch.<a href="./src/resources/chunk-search.ts">execute</a>({ ...params }) -> ChunkSearchExecuteResponse</code>

# SummarizePage

Types:

- <code><a href="./src/resources/summarize-page.ts">SummarizePageCreateResponse</a></code>

Methods:

- <code title="post /v1/summarize_page">client.summarizePage.<a href="./src/resources/summarize-page.ts">create</a>({ ...params }) -> SummarizePageCreateResponse</code>

# StorageObject

Types:

- <code><a href="./src/resources/storage-object.ts">StorageObjectListResponse</a></code>
- <code><a href="./src/resources/storage-object.ts">StorageObjectDeleteResponse</a></code>
- <code><a href="./src/resources/storage-object.ts">StorageObjectUploadResponse</a></code>

Methods:

- <code title="get /v1/object/{bucket}">client.storageObject.<a href="./src/resources/storage-object.ts">list</a>(bucket) -> StorageObjectListResponse</code>
- <code title="delete /v1/object/{bucket}/{key}">client.storageObject.<a href="./src/resources/storage-object.ts">delete</a>(key, { ...params }) -> StorageObjectDeleteResponse</code>
- <code title="get /v1/object/{bucket}/{key}">client.storageObject.<a href="./src/resources/storage-object.ts">download</a>(key, { ...params }) -> Response</code>
- <code title="put /v1/object/{bucket}/{key}">client.storageObject.<a href="./src/resources/storage-object.ts">upload</a>(key, { ...params }) -> StorageObjectUploadResponse</code>
