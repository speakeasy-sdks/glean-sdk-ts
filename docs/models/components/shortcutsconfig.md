# ShortcutsConfig

Configuration settings related to Shortcuts

## Example Usage

```typescript
import { ShortcutsConfig } from "@gleanwork/api-client/models/components";

let value: ShortcutsConfig = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `shortcutsPrefix`                               | *string*                                        | :heavy_minus_sign:                              | Deployment's prefix for shortcuts.              |
| `useExternalShortcuts`                          | *boolean*                                       | :heavy_minus_sign:                              | Whether the deployment uses external shortcuts. |