# AnswerBoardResult

## Example Usage

```typescript
import { AnswerBoardResult } from "@gleanwork/api-client/models/components";

let value: AnswerBoardResult = {
  board: {
    name: "<value>",
    description: "quit debit phooey vastly towards highly",
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
    id: 480510,
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `board`                                                                                           | [components.AnswerBoard](../../models/components/answerboard.md)                                  | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `trackingToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | An opaque token that represents this particular Answer Board. To be used for /feedback reporting. |