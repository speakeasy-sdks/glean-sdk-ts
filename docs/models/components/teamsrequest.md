# TeamsRequest

## Example Usage

```typescript
import { TeamsRequest } from "@gleanwork/api-client/models/components";

let value: TeamsRequest = {
  ids: [
    "abc123",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `ids`                                                                                        | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The IDs of the teams to retrieve.                                                            |
| `includeFields`                                                                              | [components.TeamsRequestIncludeField](../../models/components/teamsrequestincludefield.md)[] | :heavy_minus_sign:                                                                           | List of teams fields to return that aren't returned by default                               |