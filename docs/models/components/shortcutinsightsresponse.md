# ShortcutInsightsResponse

## Example Usage

```typescript
import { ShortcutInsightsResponse } from "@gleanwork/api-client/models/components";

let value: ShortcutInsightsResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `lastLogTimestamp`                                                                               | *number*                                                                                         | :heavy_minus_sign:                                                                               | Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC). |
| `shortcutInsights`                                                                               | [components.ShortcutInsight](../../models/components/shortcutinsight.md)[]                       | :heavy_minus_sign:                                                                               | Insights for shortcuts.                                                                          |
| `departments`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | list of departments applicable for shortcuts tab.                                                |
| `minVisitorThreshold`                                                                            | *number*                                                                                         | :heavy_minus_sign:                                                                               | Min threshold in number of visitors while populating results, otherwise 0.                       |