# Query

Types:

- <code><a href="./src/resources/query.ts">BucketLocator</a></code>
- <code><a href="./src/resources/query.ts">QueryChunkSearchResponse</a></code>
- <code><a href="./src/resources/query.ts">QueryDocumentQueryResponse</a></code>
- <code><a href="./src/resources/query.ts">QueryGetPaginatedSearchResponse</a></code>
- <code><a href="./src/resources/query.ts">QuerySearchResponse</a></code>
- <code><a href="./src/resources/query.ts">QuerySumarizePageResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.query.<a href="./src/resources/query.ts">chunkSearch</a>({ ...params }) -> QueryChunkSearchResponse</code>
- <code title="post /v1/document_query">client.query.<a href="./src/resources/query.ts">documentQuery</a>({ ...params }) -> QueryDocumentQueryResponse</code>
- <code title="post /v1/search_get_page">client.query.<a href="./src/resources/query.ts">getPaginatedSearch</a>({ ...params }) -> QueryGetPaginatedSearchResponse</code>
- <code title="post /v1/search">client.query.<a href="./src/resources/query.ts">search</a>({ ...params }) -> QuerySearchResponse</code>
- <code title="post /v1/summarize_page">client.query.<a href="./src/resources/query.ts">sumarizePage</a>({ ...params }) -> QuerySumarizePageResponse</code>

# Bucket

Types:

- <code><a href="./src/resources/bucket.ts">BucketListResponse</a></code>
- <code><a href="./src/resources/bucket.ts">BucketDeleteResponse</a></code>
- <code><a href="./src/resources/bucket.ts">BucketGetResponse</a></code>
- <code><a href="./src/resources/bucket.ts">BucketPutResponse</a></code>

Methods:

- <code title="post /v1/list_objects">client.bucket.<a href="./src/resources/bucket.ts">list</a>({ ...params }) -> BucketListResponse</code>
- <code title="post /v1/delete_object">client.bucket.<a href="./src/resources/bucket.ts">delete</a>({ ...params }) -> unknown</code>
- <code title="post /v1/get_object">client.bucket.<a href="./src/resources/bucket.ts">get</a>({ ...params }) -> BucketGetResponse</code>
- <code title="post /v1/put_object">client.bucket.<a href="./src/resources/bucket.ts">put</a>({ ...params }) -> BucketPutResponse</code>
