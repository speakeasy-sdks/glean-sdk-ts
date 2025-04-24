# GetSimilarShortcutsResponse

## Example Usage

```typescript
import { GetSimilarShortcutsResponse } from "@gleanwork/api-client/models/components";

let value: GetSimilarShortcutsResponse = {
  shortcuts: [
    {
      inputAlias: "<value>",
      destinationUrl: "https://pure-bookend.net",
      createdBy: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `shortcuts`                                                                                       | [components.Shortcut](../../models/components/shortcut.md)[]                                      | :heavy_check_mark:                                                                                | Shortcuts with similar aliases to the given. Includes shortcut with the exact alias if it exists. |