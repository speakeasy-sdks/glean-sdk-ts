# AddCollectionItemsResponse

## Example Usage

```typescript
import { AddCollectionItemsResponse } from "@gleanwork/api-client/models/components";

let value: AddCollectionItemsResponse = {
  collection: {
    name: "<value>",
    description: "jaggedly anti triumphantly frenetically eek with",
    addedRoles: [],
    removedRoles: [],
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
    id: 320120,
    creator: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    items: [],
    children: [],
    roles: [],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `collection`                                                                             | [components.Collection](../../models/components/collection.md)                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `error`                                                                                  | [components.AddCollectionItemsError](../../models/components/addcollectionitemserror.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |