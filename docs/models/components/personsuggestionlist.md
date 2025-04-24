# PersonSuggestionList

## Example Usage

```typescript
import { PersonSuggestionList } from "@gleanwork/api-client/models/components";

let value: PersonSuggestionList = {
  category: "INVITE_NONUSERS",
  people: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `category`                                                                                 | [components.PeopleSuggestionCategory](../../models/components/peoplesuggestioncategory.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `people`                                                                                   | [components.Person](../../models/components/person.md)[]                                   | :heavy_minus_sign:                                                                         | Information about suggested users.                                                         |