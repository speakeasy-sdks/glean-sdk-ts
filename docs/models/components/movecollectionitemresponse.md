# MoveCollectionItemResponse

## Example Usage

```typescript
import { MoveCollectionItemResponse } from "@gleanwork/api-client/models/components";

let value: MoveCollectionItemResponse = {
  collection: {
    name: "<value>",
    description: "ah afore stunning hm minus talkative through gah accompany",
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
    id: 429950,
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