# PromptTemplateResult

## Example Usage

```typescript
import { PromptTemplateResult } from "@gleanwork/api-client/models/components";

let value: PromptTemplateResult = {
  promptTemplate: {
    template: "<value>",
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        role: "VIEWER",
      },
    ],
    author: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    lastUpdatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    roles: [
      {
        role: "VERIFIER",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promptTemplate`                                                       | [components.PromptTemplate](../../models/components/prompttemplate.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `trackingToken`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | An opaque token that represents this prompt template                   |
| `favoriteInfo`                                                         | [components.FavoriteInfo](../../models/components/favoriteinfo.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `runCount`                                                             | [components.CountInfo](../../models/components/countinfo.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |