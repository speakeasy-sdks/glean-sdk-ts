# ListShortcutsPaginatedResponse

## Example Usage

```typescript
import { ListShortcutsPaginatedResponse } from "@gleanwork/api-client/models/components";

let value: ListShortcutsPaginatedResponse = {
  shortcuts: [
    {
      inputAlias: "<value>",
      addedRoles: [],
      removedRoles: [],
      createdBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      updatedBy: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
      destinationDocument: {
        containerDocument: {
          parentDocument: {
            metadata: {
              datasource: "datasource",
              objectType: "Feature Request",
              container: "container",
              parentId: "JIRA_EN-1337",
              mimeType: "mimeType",
              documentId: "documentId",
              createTime: new Date("2000-01-23T04:56:07.000Z"),
              updateTime: new Date("2000-01-23T04:56:07.000Z"),
              author: {
                name: "name",
                obfuscatedId: "<id>",
              },
              components: [
                "Backend",
                "Networking",
              ],
              status: "[\"Done\"]",
              customData: {
                "someCustomField": {},
              },
            },
          },
        },
      },
      roles: [],
    },
  ],
  facetResults: [
    {
      sourceName: "container_name",
      operatorName: "SelectMultiple",
      buckets: [
        {
          count: 1,
          datasource: "jira",
          percentage: 5,
          value: {
            stringValue: "engineering",
            integerValue: 5,
            displayLabel: "engineering",
            iconConfig: {
              color: "#343CED",
              key: "person_icon",
              iconType: "GLYPH",
              name: "user",
            },
          },
        },
      ],
      hasMoreBuckets: false,
      groupName: "Service Cloud",
    },
  ],
  meta: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `shortcuts`                                                                                      | [components.Shortcut](../../models/components/shortcut.md)[]                                     | :heavy_check_mark:                                                                               | List of all shortcuts accessible to the user                                                     |
| `facetResults`                                                                                   | [components.FacetResult](../../models/components/facetresult.md)[]                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `meta`                                                                                           | [components.ShortcutsPaginationMetadata](../../models/components/shortcutspaginationmetadata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |