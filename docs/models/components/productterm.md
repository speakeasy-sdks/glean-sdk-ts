# ProductTerm

## Example Usage

```typescript
import { ProductTerm } from "@gleanwork/api-client/models/components";

let value: ProductTerm = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `localizations`                                                                      | Record<string, [components.Localizations](../../models/components/localizations.md)> | :heavy_minus_sign:                                                                   | Mapping of locale to the display name of the product term.                           |