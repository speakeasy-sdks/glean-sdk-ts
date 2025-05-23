# RunagentRequest

## Example Usage

```typescript
import { RunagentRequest } from "@gleanwork/api-client/models/operations";

let value: RunagentRequest = {
  runAgentRequest: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `runAgentRequest`                                                                                          | [components.RunAgentRequest](../../models/components/runagentrequest.md)                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |