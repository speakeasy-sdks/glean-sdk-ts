# ListAnswerBoardsResponse

## Example Usage

```typescript
import { ListAnswerBoardsResponse } from "@gleanwork/api-client/models/components";

let value: ListAnswerBoardsResponse = {
  boardResults: [
    {
      board: {
        name: "<value>",
        description:
          "yowza outsource boohoo excitedly reckon aha woot yummy biodegradable",
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
        id: 397265,
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
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `boardResults`                                                                 | [components.AnswerBoardResult](../../models/components/answerboardresult.md)[] | :heavy_check_mark:                                                             | List of all Answer Boards, no Answers are included.                            |