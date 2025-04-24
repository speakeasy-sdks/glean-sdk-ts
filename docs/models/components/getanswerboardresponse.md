# GetAnswerBoardResponse

## Example Usage

```typescript
import { GetAnswerBoardResponse } from "@gleanwork/api-client/models/components";

let value: GetAnswerBoardResponse = {
  boardResult: {
    board: {
      name: "<value>",
      description: "advanced mid elastic",
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
      id: 260090,
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