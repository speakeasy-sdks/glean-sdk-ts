# ListCollectionsResponse

## Example Usage

```typescript
import { ListCollectionsResponse } from "@gleanwork/api-client/models/components";

let value: ListCollectionsResponse = {
  collections: [
    {
      name: "<value>",
      description: "finally accompany gadzooks suspension thorough",
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
      id: 693381,
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
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `collections`                                                    | [components.Collection](../../models/components/collection.md)[] | :heavy_check_mark:                                               | List of all Collections, no Collection items are fetched.        |