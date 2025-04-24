# PeopleFilters

## Example Usage

```typescript
import { PeopleFilters } from "@gleanwork/api-client/models/components";

let value: PeopleFilters = {
  filter: [
    {
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
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                         | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                               | :heavy_minus_sign:                                                                                                               | Facets used for filtering people search                                                                                          |
| `query`                                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A query string to search for people that each person in the response must conform to. An empty query does not filter any people. |