# AgentClientConfig

Describes the configurations that GleanChat has based on an AgentConfig.

## Example Usage

```typescript
import { AgentClientConfig } from "@gleanwork/api-client/models/components";

let value: AgentClientConfig = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `agentConfig`                                                                 | [components.AgentConfig](../../models/components/agentconfig.md)              | :heavy_minus_sign:                                                            | Describes the agent that executes the request.                                |
| `inputCharLimit`                                                              | *number*                                                                      | :heavy_minus_sign:                                                            | The character limit of an input to GleanChat under the specified AgentConfig. |