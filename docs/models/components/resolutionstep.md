# ResolutionStep

A step to take to resolve an alert

## Example Usage

```typescript
import { ResolutionStep } from "@gleanwork/api-client/models/components";

let value: ResolutionStep = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `stepText`                         | *string*                           | :heavy_minus_sign:                 | text for what step to take         |
| `link`                             | *string*                           | :heavy_minus_sign:                 | optional link url for instructions |
| `metadata`                         | *string*[]                         | :heavy_minus_sign:                 | optional metadata for the step     |