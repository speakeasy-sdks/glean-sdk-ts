# AdminSearch
(*client.admin.search*)

## Overview

### Available Operations

* [query](#query) - Search the index (admin)

## query

Retrieves results for search query without respect for permissions. This is available only to privileged users.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";
import { RFCDate } from "@gleanwork/api-client/types";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.admin.search.query({
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [],
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [],
            },
            inviteInfo: {
              invites: [],
            },
            customFields: [],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        owner: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        mentionedPeople: [],
        components: [
          "Backend",
          "Networking",
        ],
        status: "[\"Done\"]",
        pins: [],
        assignedTo: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        collections: [],
        interactions: {
          reacts: [],
          shares: [],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            reminders: [],
            lastReminder: {
              assignee: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              requestor: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              remindAt: 554738,
            },
            candidateVerifiers: [],
          },
        },
        shortcuts: [],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
    requestOptions: {
      datasourceFilter: "JIRA",
      datasourcesFilter: [
        "JIRA",
      ],
      queryOverridesFacetFilters: true,
      facetFilters: [
        {
          fieldName: "type",
          values: [
            {
              value: "Spreadsheet",
              relationType: "EQUALS",
            },
            {
              value: "Presentation",
              relationType: "EQUALS",
            },
          ],
        },
      ],
      facetFilterSets: [
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
      ],
      facetBucketSize: 171751,
      authTokens: [
        {
          accessToken: "123abc",
          datasource: "gmail",
          scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
          tokenType: "Bearer",
          authUser: "1",
        },
      ],
    },
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
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
import { clientAdminSearchQuery } from "@gleanwork/api-client/funcs/clientAdminSearchQuery.js";
import { RFCDate } from "@gleanwork/api-client/types";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientAdminSearchQuery(glean, {
    trackingToken: "trackingToken",
    sourceDocument: {
      metadata: {
        datasource: "datasource",
        objectType: "Feature Request",
        container: "container",
        parentId: "JIRA_EN-1337",
        mimeType: "mimeType",
        documentId: "documentId",
        createTime: new Date("2000-01-23T04:56:07.000Z"),
        updateTime: new Date("2000-01-23T04:56:07.000Z"),
        author: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [],
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [],
            },
            inviteInfo: {
              invites: [],
            },
            customFields: [],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        owner: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        mentionedPeople: [],
        components: [
          "Backend",
          "Networking",
        ],
        status: "[\"Done\"]",
        pins: [],
        assignedTo: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        updatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        collections: [],
        interactions: {
          reacts: [],
          shares: [],
        },
        verification: {
          state: "UNVERIFIED",
          metadata: {
            lastVerifier: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            reminders: [],
            lastReminder: {
              assignee: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              requestor: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              remindAt: 554738,
            },
            candidateVerifiers: [],
          },
        },
        shortcuts: [],
        customData: {
          "someCustomField": {},
        },
        contactPerson: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    },
    pageSize: 100,
    maxSnippetSize: 400,
    query: "vacation policy",
    inputDetails: {
      hasCopyPaste: true,
    },
    requestOptions: {
      datasourceFilter: "JIRA",
      datasourcesFilter: [
        "JIRA",
      ],
      queryOverridesFacetFilters: true,
      facetFilters: [
        {
          fieldName: "type",
          values: [
            {
              value: "Spreadsheet",
              relationType: "EQUALS",
            },
            {
              value: "Presentation",
              relationType: "EQUALS",
            },
          ],
        },
      ],
      facetFilterSets: [
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
        {
          filters: [
            {
              fieldName: "type",
              values: [
                {
                  value: "Spreadsheet",
                  relationType: "EQUALS",
                },
                {
                  value: "Presentation",
                  relationType: "EQUALS",
                },
              ],
            },
          ],
        },
      ],
      facetBucketSize: 171751,
      authTokens: [
        {
          accessToken: "123abc",
          datasource: "gmail",
          scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
          tokenType: "Bearer",
          authUser: "1",
        },
      ],
    },
    timeoutMillis: 5000,
    people: [
      {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    ],
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
  useClientAdminSearchQueryMutation
} from "@gleanwork/api-client/react-query/clientAdminSearchQuery.js";
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