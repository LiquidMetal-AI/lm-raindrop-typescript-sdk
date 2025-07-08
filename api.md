# Query

Types:

- <code><a href="./src/resources/query/query.ts">BucketLocator</a></code>
- <code><a href="./src/resources/query/query.ts">QueryChunkSearchResponse</a></code>
- <code><a href="./src/resources/query/query.ts">QueryDocumentQueryResponse</a></code>
- <code><a href="./src/resources/query/query.ts">QueryGetPaginatedSearchResponse</a></code>
- <code><a href="./src/resources/query/query.ts">QuerySearchResponse</a></code>
- <code><a href="./src/resources/query/query.ts">QuerySumarizePageResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.query.<a href="./src/resources/query/query.ts">chunkSearch</a>({ ...params }) -> QueryChunkSearchResponse</code>
- <code title="post /v1/document_query">client.query.<a href="./src/resources/query/query.ts">documentQuery</a>({ ...params }) -> QueryDocumentQueryResponse</code>
- <code title="post /v1/search_get_page">client.query.<a href="./src/resources/query/query.ts">getPaginatedSearch</a>({ ...params }) -> QueryGetPaginatedSearchResponsesPageNumber</code>
- <code title="post /v1/search">client.query.<a href="./src/resources/query/query.ts">search</a>({ ...params }) -> QuerySearchResponse</code>
- <code title="post /v1/summarize_page">client.query.<a href="./src/resources/query/query.ts">sumarizePage</a>({ ...params }) -> QuerySumarizePageResponse</code>

## Memory

Types:

- <code><a href="./src/resources/query/memory.ts">MemorySearchResponse</a></code>

Methods:

- <code title="post /v1/search_memory">client.query.memory.<a href="./src/resources/query/memory.ts">search</a>({ ...params }) -> MemorySearchResponse</code>

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

# PutMemory

Types:

- <code><a href="./src/resources/put-memory.ts">PutMemoryCreateResponse</a></code>

Methods:

- <code title="post /v1/put_memory">client.putMemory.<a href="./src/resources/put-memory.ts">create</a>({ ...params }) -> PutMemoryCreateResponse</code>

# GetMemory

Types:

- <code><a href="./src/resources/get-memory.ts">GetMemoryRetrieveResponse</a></code>

Methods:

- <code title="post /v1/get_memory">client.getMemory.<a href="./src/resources/get-memory.ts">retrieve</a>({ ...params }) -> GetMemoryRetrieveResponse</code>

# DeleteMemory

Types:

- <code><a href="./src/resources/delete-memory.ts">DeleteMemoryCreateResponse</a></code>

Methods:

- <code title="post /v1/delete_memory">client.deleteMemory.<a href="./src/resources/delete-memory.ts">create</a>({ ...params }) -> DeleteMemoryCreateResponse</code>

# SummarizeMemory

Types:

- <code><a href="./src/resources/summarize-memory.ts">SummarizeMemoryCreateResponse</a></code>

Methods:

- <code title="post /v1/summarize_memory">client.summarizeMemory.<a href="./src/resources/summarize-memory.ts">create</a>({ ...params }) -> SummarizeMemoryCreateResponse</code>

# StartSession

Types:

- <code><a href="./src/resources/start-session.ts">StartSessionCreateResponse</a></code>

Methods:

- <code title="post /v1/start_session">client.startSession.<a href="./src/resources/start-session.ts">create</a>({ ...params }) -> StartSessionCreateResponse</code>

# EndSession

Types:

- <code><a href="./src/resources/end-session.ts">EndSessionCreateResponse</a></code>

Methods:

- <code title="post /v1/end_session">client.endSession.<a href="./src/resources/end-session.ts">create</a>({ ...params }) -> EndSessionCreateResponse</code>

# RehydrateSession

Types:

- <code><a href="./src/resources/rehydrate-session.ts">RehydrateSessionRehydrateResponse</a></code>

Methods:

- <code title="post /v1/rehydrate_session">client.rehydrateSession.<a href="./src/resources/rehydrate-session.ts">rehydrate</a>({ ...params }) -> RehydrateSessionRehydrateResponse</code>
