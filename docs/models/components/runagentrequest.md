# RunAgentRequest

## Example Usage

```typescript
import { RunAgentRequest } from "@gleanwork/api-client/models/components";

let value: RunAgentRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `agentId`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The ID of the agent to be run.                                                                                |
| `fields`                                                                                                      | Record<string, *string*>                                                                                      | :heavy_minus_sign:                                                                                            | Key-value mapping of string -> string where the key is the name of the field in the prompt.                   |
| `stream`                                                                                                      | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | Whether to stream responses as they become available. If false, the entire response will be returned at once. |