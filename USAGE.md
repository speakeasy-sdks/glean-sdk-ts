<!-- Start SDK Example Usage [usage] -->
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->