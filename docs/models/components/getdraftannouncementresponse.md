# GetDraftAnnouncementResponse

## Example Usage

```typescript
import { GetDraftAnnouncementResponse } from "@gleanwork/api-client/models/components";

let value: GetDraftAnnouncementResponse = {
  announcement: {
    draftId: 342,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `announcement`                                                               | [components.Announcement](../../models/components/announcement.md)           | :heavy_minus_sign:                                                           | N/A                                                                          | {<br/>"draftId": 342<br/>}                                                   |
| `error`                                                                      | [components.AnnouncementError](../../models/components/announcementerror.md) | :heavy_minus_sign:                                                           | N/A                                                                          |                                                                              |