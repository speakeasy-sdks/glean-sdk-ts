# DisplayableListConfig

UI specific configurations for a displayable list

## Example Usage

```typescript
import { DisplayableListConfig } from "@gleanwork/api-client/models/components";

let value: DisplayableListConfig = {
  audienceFilters: [
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `format`                                                                                         | [components.DisplayableListConfigFormat](../../models/components/displayablelistconfigformat.md) | :heavy_minus_sign:                                                                               | defines how to render this particular displayable list card                                      |
| `title`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | Primary title for the list.                                                                      |
| `enabled`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the list should be shown to the user                                                     |
| `audienceFilters`                                                                                | [components.FacetFilter](../../models/components/facetfilter.md)[]                               | :heavy_minus_sign:                                                                               | Filters which restrict who should should see displayable list                                    |
| `itemUIConfig`                                                                                   | [components.DisplayableListItemUIConfig](../../models/components/displayablelistitemuiconfig.md) | :heavy_minus_sign:                                                                               | UI configurations for each item of the list                                                      |