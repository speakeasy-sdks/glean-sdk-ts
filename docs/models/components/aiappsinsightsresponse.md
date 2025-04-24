# AiAppsInsightsResponse

## Example Usage

```typescript
import { AiAppsInsightsResponse } from "@gleanwork/api-client/models/components";

let value: AiAppsInsightsResponse = {
  aiAppInsights: [
    {
      user: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      activity: "SEARCH",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lastLogTimestamp`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC). |
| `aiAppInsights`                                                                                  | [components.UserActivityInsight](../../models/components/useractivityinsight.md)[]               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `totalActiveUsers`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Total number of active users on the Ai App in the requested period.                              |
| `actionCounts`                                                                                   | [components.AiAppActionCounts](../../models/components/aiappactioncounts.md)                     | :heavy_minus_sign:                                                                               | Map from action to frequency.                                                                    |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | list of departments applicable for users tab.                                                    |