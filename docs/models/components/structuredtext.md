# StructuredText

## Example Usage

```typescript
import { StructuredText } from "@gleanwork/api-client/models/components";

let value: StructuredText = {
  text:
    "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
  structuredList: [],
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                                | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   | From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light. |
| `structuredList`                                                                                                                                      | [components.StructuredTextItem](../../models/components/structuredtextitem.md)[]                                                                      | :heavy_minus_sign:                                                                                                                                    | An array of objects each of which contains either a string or a link which optionally corresponds to a document.                                      |                                                                                                                                                       |