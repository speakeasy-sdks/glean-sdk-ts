# GetAnnouncementResponse

## Example Usage

```typescript
import { GetAnnouncementResponse } from "@gleanwork/api-client/models/components";

let value: GetAnnouncementResponse = {
  announcement: {
    draftId: 342,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `announcement`                                                                                    | [components.Announcement](../../models/components/announcement.md)                                | :heavy_minus_sign:                                                                                | N/A                                                                                               | {<br/>"draftId": 342<br/>}                                                                        |
| `trackingToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | An opaque token that represents this particular announcement. To be used for /feedback reporting. |                                                                                                   |
| `error`                                                                                           | [components.AnnouncementError](../../models/components/announcementerror.md)                      | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |