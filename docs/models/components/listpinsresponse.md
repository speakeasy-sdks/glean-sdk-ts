# ListPinsResponse

## Example Usage

```typescript
import { ListPinsResponse } from "@gleanwork/api-client/models/components";

let value: ListPinsResponse = {
  pins: [
    {
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
      documentId: "<id>",
      attribution: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      updatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `pins`                                                             | [components.PinDocument](../../models/components/pindocument.md)[] | :heavy_check_mark:                                                 | List of pinned documents.                                          |