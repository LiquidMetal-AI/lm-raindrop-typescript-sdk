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

## EpisodicMemory

Types:

- <code><a href="./src/resources/query/episodic-memory.ts">EpisodicMemorySearchResponse</a></code>

Methods:

- <code title="post /v1/search_episodic_memory">client.query.episodicMemory.<a href="./src/resources/query/episodic-memory.ts">search</a>({ ...params }) -> EpisodicMemorySearchResponse</code>

## Procedures

Types:

- <code><a href="./src/resources/query/procedures.ts">ProcedureSearchResponse</a></code>

Methods:

- <code title="post /v1/search_procedures">client.query.procedures.<a href="./src/resources/query/procedures.ts">search</a>({ ...params }) -> ProcedureSearchResponse</code>

## SemanticMemory

Types:

- <code><a href="./src/resources/query/semantic-memory.ts">SemanticMemorySearchResponse</a></code>

Methods:

- <code title="post /v1/search_semantic_memory">client.query.semanticMemory.<a href="./src/resources/query/semantic-memory.ts">search</a>({ ...params }) -> SemanticMemorySearchResponse</code>

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

# PutProcedure

Types:

- <code><a href="./src/resources/put-procedure.ts">PutProcedureCreateResponse</a></code>

Methods:

- <code title="post /v1/put_procedure">client.putProcedure.<a href="./src/resources/put-procedure.ts">create</a>({ ...params }) -> PutProcedureCreateResponse</code>

# GetProcedure

Types:

- <code><a href="./src/resources/get-procedure.ts">GetProcedureCreateResponse</a></code>

Methods:

- <code title="post /v1/get_procedure">client.getProcedure.<a href="./src/resources/get-procedure.ts">create</a>({ ...params }) -> GetProcedureCreateResponse</code>

# DeleteProcedure

Types:

- <code><a href="./src/resources/delete-procedure.ts">DeleteProcedureCreateResponse</a></code>

Methods:

- <code title="post /v1/delete_procedure">client.deleteProcedure.<a href="./src/resources/delete-procedure.ts">create</a>({ ...params }) -> DeleteProcedureCreateResponse</code>

# ListProcedures

Types:

- <code><a href="./src/resources/list-procedures.ts">ListProcedureCreateResponse</a></code>

Methods:

- <code title="post /v1/list_procedures">client.listProcedures.<a href="./src/resources/list-procedures.ts">create</a>({ ...params }) -> ListProcedureCreateResponse</code>

# PutSemanticMemory

Types:

- <code><a href="./src/resources/put-semantic-memory.ts">PutSemanticMemoryCreateResponse</a></code>

Methods:

- <code title="post /v1/put_semantic_memory">client.putSemanticMemory.<a href="./src/resources/put-semantic-memory.ts">create</a>({ ...params }) -> PutSemanticMemoryCreateResponse</code>

# GetSemanticMemory

Types:

- <code><a href="./src/resources/get-semantic-memory.ts">GetSemanticMemoryCreateResponse</a></code>

Methods:

- <code title="post /v1/get_semantic_memory">client.getSemanticMemory.<a href="./src/resources/get-semantic-memory.ts">create</a>({ ...params }) -> GetSemanticMemoryCreateResponse</code>

# DeleteSemanticMemory

Types:

- <code><a href="./src/resources/delete-semantic-memory.ts">DeleteSemanticMemoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/delete_semantic_memory">client.deleteSemanticMemory.<a href="./src/resources/delete-semantic-memory.ts">delete</a>({ ...params }) -> DeleteSemanticMemoryDeleteResponse</code>

# ExecuteQuery

Types:

- <code><a href="./src/resources/execute-query.ts">ExecuteQueryExecuteResponse</a></code>

Methods:

- <code title="post /v1/execute_query">client.executeQuery.<a href="./src/resources/execute-query.ts">execute</a>({ ...params }) -> ExecuteQueryExecuteResponse</code>

# GetMetadata

Types:

- <code><a href="./src/resources/get-metadata.ts">GetMetadataRetrieveResponse</a></code>

Methods:

- <code title="post /v1/get_metadata">client.getMetadata.<a href="./src/resources/get-metadata.ts">retrieve</a>({ ...params }) -> GetMetadataRetrieveResponse</code>

# UpdateMetadata

Types:

- <code><a href="./src/resources/update-metadata.ts">UpdateMetadataUpdateResponse</a></code>

Methods:

- <code title="post /v1/update_metadata">client.updateMetadata.<a href="./src/resources/update-metadata.ts">update</a>({ ...params }) -> UpdateMetadataUpdateResponse</code>

# GetPiiData

Types:

- <code><a href="./src/resources/get-pii-data.ts">GetPiiDataRetrieveResponse</a></code>

Methods:

- <code title="post /v1/get_pii_data">client.getPiiData.<a href="./src/resources/get-pii-data.ts">retrieve</a>({ ...params }) -> GetPiiDataRetrieveResponse</code>
