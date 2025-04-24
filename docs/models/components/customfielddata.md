# CustomFieldData

## Example Usage

```typescript
import { CustomFieldData } from "@gleanwork/api-client/models/components";

let value: CustomFieldData = {
  label: "<value>",
  values: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `label`                                                        | *string*                                                       | :heavy_check_mark:                                             | A user-facing label for this field.                            |
| `values`                                                       | *components.CustomFieldValue*[]                                | :heavy_check_mark:                                             | N/A                                                            |
| `displayable`                                                  | *boolean*                                                      | :heavy_minus_sign:                                             | Determines whether the client should display this custom field |