# GetCollectionResponse

## Example Usage

```typescript
import { GetCollectionResponse } from "@gleanwork/api-client/models/components";

let value: GetCollectionResponse = {
  collection: {
    name: "<value>",
    description: "fully weakly our",
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
    id: 145440,
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
  rootCollection: {
    name: "<value>",
    description:
      "from pro than from what eventually unwilling viciously ack dimly",
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
    id: 219784,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `collection`                                                                                      | [components.Collection](../../models/components/collection.md)                                    | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `rootCollection`                                                                                  | [components.Collection](../../models/components/collection.md)                                    | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `trackingToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | An opaque token that represents this particular Collection. To be used for `/feedback` reporting. |
| `error`                                                                                           | [components.CollectionError3](../../models/components/collectionerror3.md)                        | :heavy_minus_sign:                                                                                | N/A                                                                                               |