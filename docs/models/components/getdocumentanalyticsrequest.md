# GetDocumentAnalyticsRequest

## Example Usage

```typescript
import { GetDocumentAnalyticsRequest } from "@gleanwork/api-client/models/components";

let value: GetDocumentAnalyticsRequest = {
  documentSpecs: [
    {},
  ],
  dayRange: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `documentSpecs`                                                                                                  | *components.DocumentSpecUnion*[]                                                                                 | :heavy_check_mark:                                                                                               | The specification for the documents for which analytics will be retrieved.                                       |
| `dayRange`                                                                                                       | [components.Period](../../models/components/period.md)                                                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `withClickerCounts`                                                                                              | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether response should include click information or not. Default is to not include click information.           |
| `withImpressionCounts`                                                                                           | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether response should include impression information or not. Default is to not include impression information. |
| `withFacetAggregations`                                                                                          | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether the results will include aggregate counts/info for facets like location, department, etc.                |
| `withVisitCounts`                                                                                                | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether response should include visit counts or not. Default is to return only visitor counts.                   |