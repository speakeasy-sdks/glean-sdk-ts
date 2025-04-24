# AskExperimentalMetadata

## Example Usage

```typescript
import { AskExperimentalMetadata } from "@gleanwork/api-client/models/components";

let value: AskExperimentalMetadata = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `queryHasMentions`                                                       | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether or not the query (i.e. the slack message) has a mention.         |
| `queryIsLengthAppropriate`                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether or not the query (i.e. the slack message) is length appropriate. |
| `queryIsAnswerable`                                                      | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether or not the query (i.e. the slack message) has a question term.   |