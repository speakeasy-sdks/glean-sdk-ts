# PreviewStructuredTextResponse

## Example Usage

```typescript
import { PreviewStructuredTextResponse } from "@gleanwork/api-client/models/components";

let value: PreviewStructuredTextResponse = {
  structuredText: {
    text:
      "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
    structuredList: [],
  },
  combinedAnswerText: {
    text:
      "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `structuredText`                                                       | [components.StructuredText](../../models/components/structuredtext.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `docsInaccessibleToUser`                                               | *string*[]                                                             | :heavy_minus_sign:                                                     | A list of links the user doesn't have access to.                       |
| `combinedAnswerText`                                                   | [components.StructuredText](../../models/components/structuredtext.md) | :heavy_check_mark:                                                     | N/A                                                                    |