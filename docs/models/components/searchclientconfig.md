# SearchClientConfig

Configuration settings related to Search

## Example Usage

```typescript
import { SearchClientConfig } from "@gleanwork/api-client/models/components";

let value: SearchClientConfig = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `available`                                                     | *boolean*                                                       | :heavy_minus_sign:                                              | Whether search is available or not.                             |
| `placeholder`                                                   | *string*                                                        | :heavy_minus_sign:                                              | Custom autocomplete box placeholder to replace rotating prompts |