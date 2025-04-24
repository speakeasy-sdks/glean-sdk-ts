# DisplayableList

All configurations for a list that can be displayed.

## Example Usage

```typescript
import { DisplayableList } from "@gleanwork/api-client/models/components";

let value: DisplayableList = {
  config: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `source`                                                                                                     | [components.DisplayableListSource](../../models/components/displayablelistsource.md)                         | :heavy_minus_sign:                                                                                           | The type of data that backs this displayable list                                                            |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Unique identifier of this list. Unique amongst only DisplayableLists, not unique amongst other types of UGC. |
| `sourceId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Unstructured identifier for the source to render (ID, URL, query).                                           |
| `config`                                                                                                     | [components.DisplayableListConfig](../../models/components/displayablelistconfig.md)                         | :heavy_minus_sign:                                                                                           | UI specific configurations for a displayable list                                                            |