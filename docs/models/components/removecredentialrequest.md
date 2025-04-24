# RemoveCredentialRequest

## Example Usage

```typescript
import { RemoveCredentialRequest } from "@gleanwork/api-client/models/components";

let value: RemoveCredentialRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `datasource`                                                     | *string*                                                         | :heavy_minus_sign:                                               | the datasource the credential applies to                         |
| `datasourceInstance`                                             | *string*                                                         | :heavy_minus_sign:                                               | the datasource instance the credential applies to                |
| `user`                                                           | *string*                                                         | :heavy_minus_sign:                                               | the user info (email or username for example) for the credential |