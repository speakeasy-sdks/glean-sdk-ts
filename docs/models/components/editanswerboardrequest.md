# EditAnswerBoardRequest

## Example Usage

```typescript
import { EditAnswerBoardRequest } from "@gleanwork/api-client/models/components";

let value: EditAnswerBoardRequest = {
  name: "<value>",
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "VERIFIER",
    },
  ],
  removedRoles: [
    {
      role: "ANSWER_MODERATOR",
    },
  ],
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
  id: 966341,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique name of the Collection.                                                                                       |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | A brief summary of the Collection's contents.                                                                            |
| `addedRoles`                                                                                                             | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of added user roles for the Collection.                                                                           |
| `removedRoles`                                                                                                           | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                   | :heavy_minus_sign:                                                                                                       | A list of removed user roles for the Collection.                                                                         |
| `audienceFilters`                                                                                                        | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                       | :heavy_minus_sign:                                                                                                       | Filters which restrict who should see this Collection. Values are taken from the corresponding filters in people search. |
| `id`                                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the Answer Board to modify.                                                                                    |