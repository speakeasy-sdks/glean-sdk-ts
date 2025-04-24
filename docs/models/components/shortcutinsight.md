# ShortcutInsight

## Example Usage

```typescript
import { ShortcutInsight } from "@gleanwork/api-client/models/components";

let value: ShortcutInsight = {
  shortcut: {
    inputAlias: "<value>",
    destinationUrl: "https://infamous-riser.net",
    createdBy: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `shortcut`                                                   | [components.Shortcut](../../models/components/shortcut.md)   | :heavy_check_mark:                                           | N/A                                                          |
| `visitCount`                                                 | [components.CountInfo](../../models/components/countinfo.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `visitorCount`                                               | [components.CountInfo](../../models/components/countinfo.md) | :heavy_minus_sign:                                           | N/A                                                          |