# AgentConfig

Describes the agent that executes the request.

## Example Usage

```typescript
import { AgentConfig } from "@gleanwork/api-client/models/components";

let value: AgentConfig = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `agent`                                                      | [components.AgentEnum](../../models/components/agentenum.md) | :heavy_minus_sign:                                           | Name of the agent.                                           |
| `mode`                                                       | [components.Mode](../../models/components/mode.md)           | :heavy_minus_sign:                                           | Top level modes to run GleanChat in.                         |