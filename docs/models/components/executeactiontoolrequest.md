# ExecuteActionToolRequest

## Example Usage

```typescript
import { ExecuteActionToolRequest } from "@gleanwork/api-client/models/components";

let value: ExecuteActionToolRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `actionRunId`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Unique identifier for this actionRun execution event.                                              |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The name of the tool.                                                                              |
| `actionInstanceId`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Unique identifier of an action instance.                                                           |
| `parameters`                                                                                       | Record<string, [components.WriteActionParameter](../../models/components/writeactionparameter.md)> | :heavy_minus_sign:                                                                                 | The parameters to be passed to the tool for action.                                                |