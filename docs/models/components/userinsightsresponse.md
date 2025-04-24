# UserInsightsResponse

## Example Usage

```typescript
import { UserInsightsResponse } from "@gleanwork/api-client/models/components";

let value: UserInsightsResponse = {
  activityInsights: [
    {
      user: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      activity: "ALL",
    },
  ],
  inactiveInsights: [
    {
      user: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      activity: "ALL",
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `lastLogTimestamp`                                                                                                  | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC).                    |
| `activityInsights`                                                                                                  | [components.UserActivityInsight](../../models/components/useractivityinsight.md)[]                                  | :heavy_minus_sign:                                                                                                  | Insights for all active users with respect to set of actions.                                                       |
| `inactiveInsights`                                                                                                  | [components.UserActivityInsight](../../models/components/useractivityinsight.md)[]                                  | :heavy_minus_sign:                                                                                                  | Insights for all in inactive users with respect to set of actions and time period. Activity count will be set to 0. |
| `totalTeammates`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Total number of teammates that have logged in to the product, that are still valid teammates.                       |
| `totalActiveUsers`                                                                                                  | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Total number of active users in the requested period.                                                               |
| `departments`                                                                                                       | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | list of departments applicable for users tab.                                                                       |