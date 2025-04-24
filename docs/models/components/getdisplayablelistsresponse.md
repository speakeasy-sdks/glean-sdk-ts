# GetDisplayableListsResponse

## Example Usage

```typescript
import { GetDisplayableListsResponse } from "@gleanwork/api-client/models/components";

let value: GetDisplayableListsResponse = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `items`                                                                    | [components.DisplayableList](../../models/components/displayablelist.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |