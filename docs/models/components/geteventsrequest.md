# GetEventsRequest

## Example Usage

```typescript
import { GetEventsRequest } from "@gleanwork/api-client/models/components";

let value: GetEventsRequest = {
  ids: [
    "<value>",
  ],
  authTokens: [
    {
      accessToken: "123abc",
      datasource: "gmail",
      scope: "email profile https://www.googleapis.com/auth/gmail.readonly",
      tokenType: "Bearer",
      authUser: "1",
    },
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `ids`                                                                                               | *string*[]                                                                                          | :heavy_check_mark:                                                                                  | The ids of the calendar events to be retrieved.                                                     |
| `authTokens`                                                                                        | [components.AuthToken](../../models/components/authtoken.md)[]                                      | :heavy_minus_sign:                                                                                  | Auth tokens if client-side authentication.                                                          |
| `datasource`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The app or other repository type from which the event was extracted                                 |
| `annotate`                                                                                          | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Whether relevant content and documents, via GeneratedAttachments, should be attached to the events. |