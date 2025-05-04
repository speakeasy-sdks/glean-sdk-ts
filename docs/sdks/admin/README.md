# Admin
(*client.search.admin*)

## Overview

### Available Operations

* [query](#query) - Search the index (admin)

## query

Retrieves results for search query without respect for permissions. This is available only to privileged users.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.search.admin.query({
    trackingToken: "trackingToken",
    pageSize: 10,
    query: "vacation policy",
    requestOptions: {
      facetFilters: [
        {
          fieldName: "type",
          values: [
            {
              value: "article",
              relationType: "EQUALS",
            },
            {
              value: "document",
              relationType: "EQUALS",
            },
          ],
        },
        {
          fieldName: "department",
          values: [
            {
              value: "engineering",
              relationType: "EQUALS",
            },
          ],
        },
      ],
      facetBucketSize: 254944,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientSearchAdminQuery } from "@gleanwork/api-client/funcs/clientSearchAdminQuery.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientSearchAdminQuery(glean, {
    trackingToken: "trackingToken",
    pageSize: 10,
    query: "vacation policy",
    requestOptions: {
      facetFilters: [
        {
          fieldName: "type",
          values: [
            {
              value: "article",
              relationType: "EQUALS",
            },
            {
              value: "document",
              relationType: "EQUALS",
            },
          ],
        },
        {
          fieldName: "department",
          values: [
            {
              value: "engineering",
              relationType: "EQUALS",
            },
          ],
        },
      ],
      facetBucketSize: 254944,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useClientSearchAdminQueryMutation
} from "@gleanwork/api-client/react-query/clientSearchAdminQuery.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SearchRequest](../../models/components/searchrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type            | Status Code           | Content Type          |
| --------------------- | --------------------- | --------------------- |
| errors.GleanDataError | 403, 422              | application/json      |
| errors.GleanError     | 4XX, 5XX              | \*/\*                 |