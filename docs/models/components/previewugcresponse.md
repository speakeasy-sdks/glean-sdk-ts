# PreviewUgcResponse

## Example Usage

```typescript
import { PreviewUgcResponse } from "@gleanwork/api-client/models/components";

let value: PreviewUgcResponse = {
  announcement: {
    draftId: 342,
  },
  answer: {
    id: 3,
    docId: "ANSWERS_answer_3",
    question: "Why is the sky blue?",
    bodyText:
      "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
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
    addedRoles: [],
    removedRoles: [],
    roles: [],
    combinedAnswerText: {
      text:
        "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
      structuredList: [],
    },
    likes: {
      likedBy: [],
      likedByUser: false,
      numLikes: 41172,
    },
    author: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    updatedBy: {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
    verification: {
      state: "VERIFIED",
      metadata: {
        lastVerifier: {
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
        reminders: [],
        lastReminder: {
          assignee: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          requestor: {
            name: "George Clooney",
            obfuscatedId: "abc123",
          },
          remindAt: 893324,
        },
        candidateVerifiers: [],
      },
    },
    board: {
      name: "<value>",
      description: "brr till inside amongst",
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
      id: 915184,
      creator: {
        name: "George Clooney",
        obfuscatedId: "abc123",
      },
    },
    collections: [],
    sourceDocument: {},
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `announcement`                                                     | [components.Announcement](../../models/components/announcement.md) | :heavy_minus_sign:                                                 | N/A                                                                | {<br/>"draftId": 342<br/>}                                         |
| `answer`                                                           | [components.Answer](../../models/components/answer.md)             | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |