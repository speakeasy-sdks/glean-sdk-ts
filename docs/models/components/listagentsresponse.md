# ListAgentsResponse

List of all agents and their metadata.

## Example Usage

```typescript
import { ListAgentsResponse } from "@gleanwork/api-client/models/components";

let value: ListAgentsResponse = {
  agents: [
    {
      agent: {
        author: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        lastUpdatedBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `agents`                                                           | [components.AgentResult](../../models/components/agentresult.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |