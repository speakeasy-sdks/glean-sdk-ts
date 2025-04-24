# AiAppActionCounts

Map from action to frequency.

## Example Usage

```typescript
import { AiAppActionCounts } from "@gleanwork/api-client/models/components";

let value: AiAppActionCounts = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `totalSlackbotResponses`                                                | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Slackbot responses, both proactive and reactive.        |
| `totalSlackbotResponsesShared`                                          | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Slackbot responses shared publicly (upvoted).           |
| `totalSlackbotResponsesNotHelpful`                                      | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Slackbot responses rejected as not helpful (downvoted). |
| `totalChatMessages`                                                     | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Chat messages sent in requested period.                 |
| `totalUpvotes`                                                          | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Chat messages which received upvotes by the user.       |
| `totalDownvotes`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | Total number of Chat messages which received downvotes by the user.     |
| `additionalProperties`                                                  | Record<string, *number*>                                                | :heavy_minus_sign:                                                      | N/A                                                                     |