# AgentResult

## Example Usage

```typescript
import { AgentResult } from "@gleanwork/api-client/models/components";

let value: AgentResult = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `agent`                                              | [components.Agent](../../models/components/agent.md) | :heavy_check_mark:                                   | N/A                                                  |