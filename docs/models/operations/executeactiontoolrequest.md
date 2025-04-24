# ExecuteactiontoolRequest

## Example Usage

```typescript
import { ExecuteactiontoolRequest } from "@gleanwork/api-client/models/operations";

let value: ExecuteactiontoolRequest = {
  executeActionToolRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `executeActionToolRequest`                                                                                 | [components.ExecuteActionToolRequest](../../models/components/executeactiontoolrequest.md)                 | :heavy_check_mark:                                                                                         | Execute Action Tool request                                                                                |