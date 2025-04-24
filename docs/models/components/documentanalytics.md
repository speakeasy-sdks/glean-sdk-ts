# DocumentAnalytics

## Example Usage

```typescript
import { DocumentAnalytics } from "@gleanwork/api-client/models/components";

let value: DocumentAnalytics = {
  facetAnalytics: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `documentSpec`                                                                           | *components.DocumentSpecUnion*                                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `visitorCount`                                                                           | [components.CountInfo](../../models/components/countinfo.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `clickerCount`                                                                           | [components.CountInfo](../../models/components/countinfo.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `userImpressionCount`                                                                    | [components.CountInfo](../../models/components/countinfo.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `visitCount`                                                                             | [components.CountInfo](../../models/components/countinfo.md)                             | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `facetAnalytics`                                                                         | [components.DocumentFacetAnalytics](../../models/components/documentfacetanalytics.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |