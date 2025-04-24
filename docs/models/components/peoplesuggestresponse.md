# PeopleSuggestResponse

## Example Usage

```typescript
import { PeopleSuggestResponse } from "@gleanwork/api-client/models/components";

let value: PeopleSuggestResponse = {
  suggestions: [
    {
      category: "INVITE_NONUSERS",
      people: [
        {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `suggestions`                                                                        | [components.PersonSuggestionList](../../models/components/personsuggestionlist.md)[] | :heavy_minus_sign:                                                                   | Information about people suggestions for asked categories.                           |