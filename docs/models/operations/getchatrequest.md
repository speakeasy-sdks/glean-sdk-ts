# GetchatRequest

## Example Usage

```typescript
import { GetchatRequest } from "@gleanwork/api-client/models/operations";

let value: GetchatRequest = {
  getChatRequest: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `getChatRequest`                                                                                           | [components.GetChatRequest](../../models/components/getchatrequest.md)                                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |