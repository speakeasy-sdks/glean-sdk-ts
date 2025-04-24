# AddCredentialRequest

## Example Usage

```typescript
import { AddCredentialRequest } from "@gleanwork/api-client/models/components";

let value: AddCredentialRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `datasource`                                                     | *string*                                                         | :heavy_minus_sign:                                               | the datasource the credential applies to                         |
| `datasourceInstance`                                             | *string*                                                         | :heavy_minus_sign:                                               | the datasource instance the credential applies to                |
| `user`                                                           | *string*                                                         | :heavy_minus_sign:                                               | the user info (email or username for example) for the credential |
| `token`                                                          | *string*                                                         | :heavy_minus_sign:                                               | the token part of the credential (password, apiToken etc)        |
| `metadata`                                                       | *string*                                                         | :heavy_minus_sign:                                               | any metadata associated with the user credential                 |