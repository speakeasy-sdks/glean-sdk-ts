# GetDocumentAnalyticsResponse

## Example Usage

```typescript
import { GetDocumentAnalyticsResponse } from "@gleanwork/api-client/models/components";

let value: GetDocumentAnalyticsResponse = {
  results: [
    {
      facetAnalytics: [],
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                  | [components.DocumentAnalytics](../../models/components/documentanalytics.md)[]                             | :heavy_minus_sign:                                                                                         | Analytics for requested documents. There will be one-to-one mapping for documents included in the request. |