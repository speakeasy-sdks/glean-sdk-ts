# AnswerMutableProperties

## Example Usage

```typescript
import { AnswerMutableProperties } from "@gleanwork/api-client/models/components";

let value: AnswerMutableProperties = {
  question: "Why is the sky blue?",
  bodyText:
    "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
  addedRoles: [
    {
      person: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      role: "OWNER",
    },
  ],
  removedRoles: [
    {
      role: "VERIFIER",
    },
  ],
  roles: [
    {
      role: "VIEWER",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `question`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   | Why is the sky blue?                                                                                                                                  |
| `questionVariations`                                                                                                                                  | *string*[]                                                                                                                                            | :heavy_minus_sign:                                                                                                                                    | Additional ways of phrasing this question.                                                                                                            |                                                                                                                                                       |
| `bodyText`                                                                                                                                            | *string*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The plain text answer to the question.                                                                                                                | From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light. |
| `boardId`                                                                                                                                             | *number*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                    | The parent board ID of this Answer, or 0 if it's a floating Answer.                                                                                   |                                                                                                                                                       |
| `audienceFilters`                                                                                                                                     | [components.FacetFilter](../../models/components/facetfilter.md)[]                                                                                    | :heavy_minus_sign:                                                                                                                                    | Filters which restrict who should see the answer. Values are taken from the corresponding filters in people search.                                   |                                                                                                                                                       |
| `addedRoles`                                                                                                                                          | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                | :heavy_minus_sign:                                                                                                                                    | A list of user roles for the answer added by the owner.                                                                                               |                                                                                                                                                       |
| `removedRoles`                                                                                                                                        | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                | :heavy_minus_sign:                                                                                                                                    | A list of user roles for the answer removed by the owner.                                                                                             |                                                                                                                                                       |
| `roles`                                                                                                                                               | [components.UserRoleSpecification](../../models/components/userrolespecification.md)[]                                                                | :heavy_minus_sign:                                                                                                                                    | A list of roles for this answer explicitly granted by an owner, editor, or admin.                                                                     |                                                                                                                                                       |
| `sourceDocumentSpec`                                                                                                                                  | *components.DocumentSpecUnion*                                                                                                                        | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |                                                                                                                                                       |
| `sourceType`                                                                                                                                          | [components.AnswerMutablePropertiesSourceType](../../models/components/answermutablepropertiessourcetype.md)                                          | :heavy_minus_sign:                                                                                                                                    | N/A                                                                                                                                                   |                                                                                                                                                       |