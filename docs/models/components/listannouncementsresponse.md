# ListAnnouncementsResponse

## Example Usage

```typescript
import { ListAnnouncementsResponse } from "@gleanwork/api-client/models/components";

let value: ListAnnouncementsResponse = {
  announcements: [
    {
      draftId: 342,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `announcements`                                                      | [components.Announcement](../../models/components/announcement.md)[] | :heavy_minus_sign:                                                   | List of announcements.                                               |