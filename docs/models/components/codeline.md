# CodeLine

## Example Usage

```typescript
import { CodeLine } from "@gleanwork/api-client/models/components";

let value: CodeLine = {
  ranges: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lineNumber`                                                   | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `content`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `ranges`                                                       | [components.TextRange](../../models/components/textrange.md)[] | :heavy_minus_sign:                                             | Index ranges depicting matched sections of the line            |