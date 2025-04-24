# RelatedQuestion

## Example Usage

```typescript
import { RelatedQuestion } from "@gleanwork/api-client/models/components";

let value: RelatedQuestion = {
  ranges: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `question`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | The text of the related question                                                               |
| `answer`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The answer for the related question                                                            |
| `ranges`                                                                                       | [components.TextRange](../../models/components/textrange.md)[]                                 | :heavy_minus_sign:                                                                             | Subsections of the answer string to which some special formatting should be applied (eg. bold) |