# InviteRequest

A request to send an invite to the specified user[s]

## Example Usage

```typescript
import { InviteRequest } from "@gleanwork/api-client/models/components";

let value: InviteRequest = {
  recipients: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
  recipientFilters: {
    filter: [
      {
        fieldName: "type",
        values: [
          {
            value: "Spreadsheet",
            relationType: "EQUALS",
          },
          {
            value: "Presentation",
            relationType: "EQUALS",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `channel`                                                                            | [components.CommunicationChannel](../../models/components/communicationchannel.md)   | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `template`                                                                           | [components.CommunicationTemplate](../../models/components/communicationtemplate.md) | :heavy_minus_sign:                                                                   | The type of email to send                                                            |
| `recipients`                                                                         | [components.Person](../../models/components/person.md)[]                             | :heavy_minus_sign:                                                                   | The people who should receive this invite                                            |
| `recipientFilters`                                                                   | [components.PeopleFilters](../../models/components/peoplefilters.md)                 | :heavy_minus_sign:                                                                   | N/A                                                                                  |