# UpdateannouncementRequest

## Example Usage

```typescript
import { UpdateannouncementRequest } from "@gleanwork/api-client/models/operations";

let value: UpdateannouncementRequest = {
  updateAnnouncementRequest: {
    startTime: new Date("2025-08-06T01:29:54.751Z"),
    endTime: new Date("2025-06-28T13:45:35.258Z"),
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
    id: 940454,
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `locale`                                                                                                                                                                                            | *string*                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                  | The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the `Accept-Language` will be used. If not present or not supported, defaults to the closest match or `en`. |
| `updateAnnouncementRequest`                                                                                                                                                                         | [components.UpdateAnnouncementRequest](../../models/components/updateannouncementrequest.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                  | Announcement content. Id need to be specified for the announcement.                                                                                                                                 |