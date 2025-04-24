# PublicConfigRequest

Will only send back publicly available config and will ignore other keys

## Example Usage

```typescript
import { PublicConfigRequest } from "@gleanwork/api-client/models/components";

let value: PublicConfigRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `themeKeys`                                             | *string*[]                                              | :heavy_minus_sign:                                      | A list of theme keys to include in the response.        |
| `boolKeys`                                              | *string*[]                                              | :heavy_minus_sign:                                      | A list of boolean flag keys to include in the response. |
| `integerKeys`                                           | *string*[]                                              | :heavy_minus_sign:                                      | A list of integer flag keys to include in the response. |