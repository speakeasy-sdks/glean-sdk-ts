# EditAnswerBoardResponse

## Example Usage

```typescript
import { EditAnswerBoardResponse } from "@gleanwork/api-client/models/components";

let value: EditAnswerBoardResponse = {
  boardResult: {
    board: {
      name: "<value>",
      description: "meanwhile except modulo cleverly across amnesty brr which",
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
      id: 986602,
      creator: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      updatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      roles: [],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `boardResult`                                                                | [components.AnswerBoardResult](../../models/components/answerboardresult.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `error`                                                                      | [components.AnswerBoardError](../../models/components/answerboarderror.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |