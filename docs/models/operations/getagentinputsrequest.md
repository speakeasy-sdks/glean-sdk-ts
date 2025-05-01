# GetagentinputsRequest

## Example Usage

```typescript
import { GetagentinputsRequest } from "@gleanwork/api-client/models/operations";

let value: GetagentinputsRequest = {
  getAgentInputsRequest: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `getAgentInputsRequest`                                                                                    | [components.GetAgentInputsRequest](../../models/components/getagentinputsrequest.md)                       | :heavy_check_mark:                                                                                         | N/A                                                                                                        |