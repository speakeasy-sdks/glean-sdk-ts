# QueryInsight

## Example Usage

```typescript
import { QueryInsight } from "@gleanwork/api-client/models/components";

let value: QueryInsight = {
  query: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `query`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The query string the information is about.                           |
| `searchCount`                                                        | [components.CountInfo](../../models/components/countinfo.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `searchorCount`                                                      | [components.CountInfo](../../models/components/countinfo.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `searchWithClickCount`                                               | [components.CountInfo](../../models/components/countinfo.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `clickCount`                                                         | [components.CountInfo](../../models/components/countinfo.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `similarQueries`                                                     | [components.QueryInsight](../../models/components/queryinsight.md)[] | :heavy_minus_sign:                                                   | list of similar queries to current one.                              |