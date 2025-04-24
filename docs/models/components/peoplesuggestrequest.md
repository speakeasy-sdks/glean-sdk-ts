# PeopleSuggestRequest

Includes request params for type of suggestions.

## Example Usage

```typescript
import { PeopleSuggestRequest } from "@gleanwork/api-client/models/components";

let value: PeopleSuggestRequest = {
  categories: [
    "INVITE_NONUSERS",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `categories`                                                                                 | [components.PeopleSuggestionCategory](../../models/components/peoplesuggestioncategory.md)[] | :heavy_check_mark:                                                                           | Categories of data requested. Request can include single or multiple categories.             |
| `departments`                                                                                | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Departments that the data is requested for. If empty, corresponds to whole company.          |