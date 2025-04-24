# DocumentFacetAnalytics

## Example Usage

```typescript
import { DocumentFacetAnalytics } from "@gleanwork/api-client/models/components";

let value: DocumentFacetAnalytics = {
  facet: {
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
  analytics: {
    facetAnalytics: [],
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `facet`                                                                                                                                            | [components.FacetFilter](../../models/components/facetfilter.md)                                                                                   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                | {<br/>"fieldName": "type",<br/>"values": [<br/>{<br/>"value": "Spreadsheet",<br/>"relationType": "EQUALS"<br/>},<br/>{<br/>"value": "Presentation",<br/>"relationType": "EQUALS"<br/>}<br/>]<br/>} |
| `analytics`                                                                                                                                        | [components.DocumentAnalytics](../../models/components/documentanalytics.md)                                                                       | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |