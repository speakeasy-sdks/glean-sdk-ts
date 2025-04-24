# UpdateDisplayableListsRequest

## Example Usage

```typescript
import { UpdateDisplayableListsRequest } from "@gleanwork/api-client/models/components";

let value: UpdateDisplayableListsRequest = {
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