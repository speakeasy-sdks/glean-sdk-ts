# StructuredTextItem

## Example Usage

```typescript
import { StructuredTextItem } from "@gleanwork/api-client/models/components";

let value: StructuredTextItem = {
  link: "https://en.wikipedia.org/wiki/Diffuse_sky_radiation",
  document: {
    containerDocument: {
      parentDocument: {
        metadata: {
          datasource: "datasource",
          objectType: "Feature Request",
          container: "container",
          parentId: "JIRA_EN-1337",
          mimeType: "mimeType",
          documentId: "documentId",
          createTime: new Date("2000-01-23T04:56:07.000Z"),
          updateTime: new Date("2000-01-23T04:56:07.000Z"),
          author: {
            name: "name",
            obfuscatedId: "<id>",
          },
          components: [
            "Backend",
            "Networking",
          ],
          status: "[\"Done\"]",
          customData: {
            "someCustomField": {},
          },
        },
      },
    },
  },
  text:
    "Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue.",
};
```

## Fields

| Field                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `link`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           | https://en.wikipedia.org/wiki/Diffuse_sky_radiation                                                                                                                                                                                                           |
| `document`                                                                                                                                                                                                                                                    | [components.Document](../../models/components/document.md)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                               |
| `text`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                           | Because its wavelengths are shorter, blue light is more strongly scattered than the longer-wavelength lights, red or green. Hence the result that when looking at the sky away from the direct incident sunlight, the human eye perceives the sky to be blue. |