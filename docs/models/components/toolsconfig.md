# ~~ToolsConfig~~

Configuration settings related to Tools.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ToolsConfig } from "@gleanwork/api-client/models/components";

let value: ToolsConfig = {
  availableTools: [
    {
      type: "ACTION",
      name: "<value>",
      displayName: "Stan_Jakubowski",
      displayDescription: "<value>",
      objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `availableTools`                                                     | [components.ToolMetadata](../../models/components/toolmetadata.md)[] | :heavy_minus_sign:                                                   | List of tools available to the user.                                 |