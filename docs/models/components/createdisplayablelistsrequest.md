# CreateDisplayableListsRequest

## Example Usage

```typescript
import { CreateDisplayableListsRequest } from "@gleanwork/api-client/models/components";

let value: CreateDisplayableListsRequest = {
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