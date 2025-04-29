# Activities
(*client.activities*)

## Overview

### Available Operations

* [reportActivity](#reportactivity) - Report client activity

## reportActivity

Report events that happen to results within a Glean client UI, such as search result views and clicks.  This signal improves search quality.

### Example Usage

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activities.reportActivity({
    trackingTokens: [
      "trackingTokens",
    ],
    event: "VIEW",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GleanCore } from "@gleanwork/api-client/core.js";
import { clientActivitiesReportActivity } from "@gleanwork/api-client/funcs/clientActivitiesReportActivity.js";

// Use `GleanCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const glean = new GleanCore({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await clientActivitiesReportActivity(glean, {
    trackingTokens: [
      "trackingTokens",
    ],
    event: "VIEW",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
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
  useClientActivitiesReportActivityMutation
} from "@gleanwork/api-client/react-query/clientActivitiesReportActivity.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xGleanActAs`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Email address of a user on whose behalf the request is intended to be made (should be non-empty only for global tokens).                                                       |                                                                                                                                                                                |
| `xGleanAuthType`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Auth type being used to access the endpoint (should be non-empty only for global tokens).                                                                                      |                                                                                                                                                                                |
| `feedbackQueryParameter`                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A URL encoded versions of Feedback. This is useful for requests.                                                                                                               |                                                                                                                                                                                |
| `feedback1`                                                                                                                                                                    | [components.Feedback](../../models/components/feedback.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<void\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.GleanError | 4XX, 5XX          | \*/\*             |