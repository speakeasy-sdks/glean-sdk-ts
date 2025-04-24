# ChatFeedbackPayload

Payload for chat feedback reporting. Required when template is `CHAT_FEEDBACK`.

## Example Usage

```typescript
import { ChatFeedbackPayload } from "@gleanwork/api-client/models/components";

let value: ChatFeedbackPayload = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `rating`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Rating given to the conversation (currently either "upvoted" or "downvoted").        |
| `issues`                                                                             | *string*[]                                                                           | :heavy_minus_sign:                                                                   | The type(s) of issue being reported.                                                 |
| `comments`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Additional freeform comments provided by the reporter.                               |
| `previousMessages`                                                                   | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Previous messages in this conversation.                                              |
| `chatTranscript`                                                                     | [components.FeedbackChatExchange](../../models/components/feedbackchatexchange.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |