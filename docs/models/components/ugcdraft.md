# UgcDraft

## Example Usage

```typescript
import { UgcDraft } from "@gleanwork/api-client/models/components";

let value: UgcDraft = {
  announcement: {
    body: {
      text:
        "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [],
    },
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
  },
  answer: {
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
        role: "VIEWER",
      },
    ],
    removedRoles: [
      {
        role: "EDITOR",
      },
    ],
    roles: [
      {
        role: "ANSWER_MODERATOR",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `announcement`                                                                                       | [components.AnnouncementMutableProperties](../../models/components/announcementmutableproperties.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `answer`                                                                                             | [components.AnswerMutableProperties](../../models/components/answermutableproperties.md)             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |