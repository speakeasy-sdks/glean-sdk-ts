# UploadchatfilesRequest

## Example Usage

```typescript
import { UploadchatfilesRequest } from "@gleanwork/api-client/models/operations";
import { openAsBlob } from "node:fs";

let value: UploadchatfilesRequest = {
  uploadChatFilesRequest: {
    files: [
      {
        fileName: "example.file",
        content: await openAsBlob("example.file"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `uploadChatFilesRequest`                                                                                   | [components.UploadChatFilesRequest](../../models/components/uploadchatfilesrequest.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |