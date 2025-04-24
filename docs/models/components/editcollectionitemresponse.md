# EditCollectionItemResponse

## Example Usage

```typescript
import { EditCollectionItemResponse } from "@gleanwork/api-client/models/components";

let value: EditCollectionItemResponse = {
  collection: {
    name: "<value>",
    description: "yowza for nautical while quarrel gape onto",
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
    id: 845126,
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `collection`                                                   | [components.Collection](../../models/components/collection.md) | :heavy_minus_sign:                                             | N/A                                                            |