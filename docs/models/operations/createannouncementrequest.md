# CreateannouncementRequest

## Example Usage

```typescript
import { CreateannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: CreateannouncementRequest = {
  createAnnouncementRequest: {
    startTime: new Date("2025-05-23T19:17:22.992Z"),
    endTime: new Date("2025-11-26T23:16:26.570Z"),
    title: "<value>",
    body: {
      text:
        "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [],
    },
    audienceFilters: [
      {
        fieldName: "type",
        values: [
          {
            value: "Spreadsheet",
            relationType: "EQUALS",
          },
          {
            value: "Presentation",
            relationType: "EQUALS",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `createAnnouncementRequest`                                                                                                                                                                         | [components.CreateAnnouncementRequest](../../models/components/createannouncementrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | Announcement content                                                                                                                                                                                |