# FileUploadConfig

Configuration settings for the chat file upload feature

## Example Usage

```typescript
import { FileUploadConfig } from "@gleanwork/api-client/models/components";

let value: FileUploadConfig = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `enabled`                                                     | *boolean*                                                     | :heavy_minus_sign:                                            | Whether file upload for Chat is enabled for the deployment    |
| `maxFileCount`                                                | *number*                                                      | :heavy_minus_sign:                                            | Maximum number of files that can be uploaded in a single turn |
| `maxFileSize`                                                 | *number*                                                      | :heavy_minus_sign:                                            | Maximum file size, in bytes, that is allowed for upload       |
| `uploadTimeoutSeconds`                                        | *number*                                                      | :heavy_minus_sign:                                            | Timeout in seconds for polling the file upload status         |