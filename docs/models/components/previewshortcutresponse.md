# PreviewShortcutResponse

## Example Usage

```typescript
import { PreviewShortcutResponse } from "@gleanwork/api-client/models/components";

let value: PreviewShortcutResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `shortcut`                                                           | [components.Shortcut](../../models/components/shortcut.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `existingUrlShortcuts`                                               | [components.Shortcut](../../models/components/shortcut.md)[]         | :heavy_minus_sign:                                                   | Exising shortcuts that have a similar destination URL.               |
| `error`                                                              | [components.ShortcutError](../../models/components/shortcuterror.md) | :heavy_minus_sign:                                                   | N/A                                                                  |