# DlpReportData

Dlp report metadata which is used to construct report email

## Example Usage

```typescript
import { DlpReportData } from "@gleanwork/api-client/models/components";

let value: DlpReportData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `frequency`                                                                                   | [components.Frequency](../../models/components/frequency.md)                                  | :heavy_minus_sign:                                                                            | The frequency of the report                                                                   |
| `requestTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the report was requested, applicable only for one time reports                       |
| `reportName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.DlpSimpleResult](../../models/components/dlpsimpleresult.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |