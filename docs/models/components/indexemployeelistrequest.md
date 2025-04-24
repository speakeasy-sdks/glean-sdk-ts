# IndexEmployeeListRequest

Describes the request body of the /indexemployeelist API call

## Example Usage

```typescript
import { IndexEmployeeListRequest } from "@gleanwork/api-client/models/components";

let value: IndexEmployeeListRequest = {
  employees: [
    {
      employee: {
        email: "Katelin.Bailey80@hotmail.com",
        department: "<value>",
        datasourceProfiles: [
          {
            datasource: "github",
            handle: "<value>",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `employees`                                                                          | [components.IndexEmployeeRequest](../../models/components/indexemployeerequest.md)[] | :heavy_minus_sign:                                                                   | List of employee info and version.                                                   |