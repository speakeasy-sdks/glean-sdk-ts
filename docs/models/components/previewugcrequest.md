# PreviewUgcRequest

## Example Usage

```typescript
import { PreviewUgcRequest } from "@gleanwork/api-client/models/components";

let value: PreviewUgcRequest = {
  draft: {
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
          role: "OWNER",
        },
      ],
      removedRoles: [
        {
          role: "EDITOR",
        },
      ],
      roles: [
        {
          role: "VERIFIER",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `draft`                                                    | [components.UgcDraft](../../models/components/ugcdraft.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `draftSpec`                                                | *components.DocumentSpecUnion*                             | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | [components.UgcType](../../models/components/ugctype.md)   | :heavy_minus_sign:                                         | N/A                                                        |