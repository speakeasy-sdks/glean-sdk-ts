# GetEventsResponse

## Example Usage

```typescript
import { GetEventsResponse } from "@gleanwork/api-client/models/components";

let value: GetEventsResponse = {
  events: [
    {
      category: "SOCIAL_LINK",
      primaryEntry: {
        title: "<value>",
        createdBy: {
          name: "George Clooney",
          obfuscatedId: "abc123",
        },
        document: {
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
        event: {
          id: "<id>",
          url: "https://quick-cosset.info",
          attendees: {
            people: [],
          },
          generatedAttachments: [
            {
              documents: [
                {},
              ],
              person: {
                name: "George Clooney",
                obfuscatedId: "abc123",
              },
              customer: {
                id: "<id>",
                company: {
                  name: "<value>",
                  location: "New York City",
                  industry: "Finances",
                  about:
                    "Financial, software, data, and media company headquartered in Midtown Manhattan, New York City",
                },
                poc: [],
                mergedCustomers: [],
                notes: "CIO is interested in trying out the product.",
              },
              externalLinks: [
                {
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
              content: [
                {
                  displayHeader: "Action Items",
                },
              ],
            },
          ],
        },
        announcement: {
          draftId: 342,
        },
        collection: {
          name: "<value>",
          description: "boss bleak aw membership ah um",
          addedRoles: [],
          removedRoles: [],
          audienceFilters: [
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
          id: 265344,
          creator: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          updatedBy: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          items: [],
          children: [],
          roles: [],
        },
        collectionItem: {
          collectionId: 594144,
          itemType: "DOCUMENT",
        },
        promptTemplate: {
          promptTemplate: {
            template: "<value>",
            addedRoles: [
              {
                role: "VIEWER",
              },
            ],
            removedRoles: [
              {
                role: "OWNER",
              },
            ],
            lastUpdatedBy: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            roles: [
              {
                role: "VIEWER",
              },
            ],
          },
        },
        workflow: {
          workflow: {},
        },
        activities: [
          {
            actor: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
          },
        ],
      },
      secondaryEntries: [
        {
          title: "<value>",
          event: {
            id: "<id>",
            url: "https://ripe-stump.com",
            generatedAttachments: [
              {
                documents: [
                  {},
                ],
                externalLinks: [
                  {
                    iconConfig: {
                      color: "#343CED",
                      key: "person_icon",
                      iconType: "GLYPH",
                      name: "user",
                    },
                  },
                ],
                content: [
                  {
                    displayHeader: "Action Items",
                  },
                ],
              },
            ],
          },
          announcement: {
            draftId: 342,
          },
          promptTemplate: {
            promptTemplate: {
              template: "<value>",
              addedRoles: [
                {
                  role: "ANSWER_MODERATOR",
                },
              ],
              removedRoles: [
                {
                  role: "VIEWER",
                },
              ],
              roles: [
                {
                  role: "EDITOR",
                },
              ],
            },
          },
          workflow: {
            workflow: {},
          },
          activities: [
            {},
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `events`                                                                                                             | [components.FeedResult](../../models/components/feedresult.md)[]                                                     | :heavy_minus_sign:                                                                                                   | The requested events. Uses a FeedResult for now as a Calendar Event doesn't have all event info such as attachments. |