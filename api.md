# DocumentQuery

Types:

- <code><a href="./src/resources/document-query.ts">BucketLocator</a></code>
- <code><a href="./src/resources/document-query.ts">DocumentQueryAskResponse</a></code>

Methods:

- <code title="post /v1/document_query">client.documentQuery.<a href="./src/resources/document-query.ts">ask</a>({ ...params }) -> DocumentQueryAskResponse</code>

# ChunkSearch

Types:

- <code><a href="./src/resources/chunk-search.ts">TextResult</a></code>
- <code><a href="./src/resources/chunk-search.ts">ChunkSearchFindResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.chunkSearch.<a href="./src/resources/chunk-search.ts">find</a>({ ...params }) -> ChunkSearchFindResponse</code>

# SummarizePage

Types:

- <code><a href="./src/resources/summarize-page.ts">SummarizePageSumarizePageResponse</a></code>

Methods:

- <code title="post /v1/summarize_page">client.summarizePage.<a href="./src/resources/summarize-page.ts">sumarizePage</a>({ ...params }) -> SummarizePageSumarizePageResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchFindResponse</a></code>

Methods:

- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">find</a>({ ...params }) -> SearchFindResponse</code>

# Object

Types:

- <code><a href="./src/resources/object.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectUploadResponse</a></code>

Methods:

- <code title="get /v1/object/{module_id}/{key}">client.object.<a href="./src/resources/object.ts">retrieve</a>(key, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="get /v1/object/{module_id}">client.object.<a href="./src/resources/object.ts">list</a>(moduleID) -> ObjectListResponse</code>
- <code title="delete /v1/object/{module_id}/{key}">client.object.<a href="./src/resources/object.ts">delete</a>(key, { ...params }) -> unknown</code>
- <code title="post /v1/object/{module_id}/{key}">client.object.<a href="./src/resources/object.ts">upload</a>(key, { ...params }) -> ObjectUploadResponse</code>
