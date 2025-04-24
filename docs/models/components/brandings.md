# Brandings

Branding customizations applicable to the current user, such as custom company logos and background images for light and dark mode or company-specific product terminology.

## Example Usage

```typescript
import { Brandings } from "@gleanwork/api-client/models/components";

let value: Brandings = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `light`                                                                                                                         | [components.Branding](../../models/components/branding.md)                                                                      | :heavy_minus_sign:                                                                                                              | A map of visual aspects of the app such as the company background image, logos, logo background colors, and wide company logos. |
| `dark`                                                                                                                          | [components.Branding](../../models/components/branding.md)                                                                      | :heavy_minus_sign:                                                                                                              | A map of visual aspects of the app such as the company background image, logos, logo background colors, and wide company logos. |
| `productTerms`                                                                                                                  | [components.ProductTerms](../../models/components/productterms.md)                                                              | :heavy_minus_sign:                                                                                                              | Mapping of product terms to the term's description. These product terms should match their counterpart in productTerms.json     |