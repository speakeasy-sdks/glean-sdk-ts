# ChatRequest

The minimal set of fields that form a chat request.

## Example Usage

```typescript
import { ChatRequest } from "@gleanwork/api-client/models/components";

let value: ChatRequest = {
  messages: [
    {
      fragments: [
        {
          structuredResults: [
            {
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
                poc: [
                  {
                    name: "George Clooney",
                    obfuscatedId: "abc123",
                  },
                ],
                mergedCustomers: [],
                notes: "CIO is interested in trying out the product.",
              },
              team: {
                id: "<id>",
                name: "<value>",
                members: [],
                customFields: [],
                datasourceProfiles: [
                  {
                    datasource: "github",
                    handle: "<value>",
                  },
                ],
              },
              customEntity: {
                roles: [],
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
                combinedAnswerText: {
                  text:
                    "From https://en.wikipedia.org/wiki/Diffuse_sky_radiation, the sky is blue because blue light is more strongly scattered than longer-wavelength light.",
                  structuredList: [],
                },
                likes: {
                  likedBy: [],
                  likedByUser: false,
                  numLikes: 483991,
                },
                updatedBy: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                verification: {
                  state: "UNVERIFIED",
                  metadata: {
                    lastVerifier: {
                      name: "George Clooney",
                      obfuscatedId: "abc123",
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
                      remindAt: 515340,
                    },
                    candidateVerifiers: [
                      {
                        name: "George Clooney",
                        obfuscatedId: "abc123",
                      },
                    ],
                  },
                },
                collections: [],
                sourceDocument: {},
              },
              generatedQna: {
                ranges: [],
              },
              extractedQnA: {
                questionResult: {
                  title: "title",
                  url: "https://example.com/foo/bar",
                  nativeAppUrl: "slack://foo/bar",
                  snippets: [
                    {
                      mimeType: "mimeType",
                      snippet: "snippet",
                    },
                  ],
                  mustIncludeSuggestions: {},
                },
              },
              meeting: {
                attendees: {
                  people: [],
                },
              },
              collection: {
                name: "<value>",
                description:
                  "yarmulke spork solder rigidly sugary baseboard jubilant lean alarmed schlep",
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
                id: 169055,
                creator: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                items: [],
                children: [],
              },
              code: {
                repoName: "scio",
                fileName: "README.md",
              },
              shortcut: {
                inputAlias: "<value>",
                createdBy: {
                  name: "George Clooney",
                  obfuscatedId: "abc123",
                },
                destinationDocument: {},
              },
              querySuggestions: {
                suggestions: [
                  {
                    query: "app:github type:pull author:mortimer",
                    label: "Mortimer's PRs",
                    datasource: "github",
                  },
                ],
              },
              chat: {
                icon: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
              relatedDocuments: [],
              relatedQuestion: {},
            },
          ],
          querySuggestion: {
            query: "app:github type:pull author:mortimer",
            label: "Mortimer's PRs",
            datasource: "github",
          },
          file: {
            id: "FILE_1234",
            url: "www.google.com",
            name: "sample.pdf",
          },
          action: {
            metadata: {
              type: "RETRIEVAL",
              name: "<value>",
              displayName: "Gunner85",
              displayDescription: "<value>",
              objectName: "[\"HR ticket\",\"Email\",\"Chat message\"]",
            },
          },
          citation: {
            sourceFile: {
              id: "FILE_1234",
              url: "www.google.com",
              name: "sample.pdf",
            },
            sourcePerson: {
              name: "George Clooney",
              obfuscatedId: "abc123",
            },
            sourceCustomEntity: {},
            referenceRanges: [
              {
                textRange: {
                  startIndex: 923427,
                },
                snippets: [
                  {
                    mimeType: "mimeType",
                    snippet: "snippet",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  timeoutMillis: 30000,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`                                                                                                                                                                                                                                                                                                                                                                                     | [components.ChatMessage](../../models/components/chatmessage.md)[]                                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                             | A list of chat messages, from most recent to least recent. At least one message must specify a USER author.                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                |
| `sessionInfo`                                                                                                                                                                                                                                                                                                                                                                                  | [components.SessionInfo](../../models/components/sessioninfo.md)                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                |
| `saveChat`                                                                                                                                                                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | Save the current interaction as a Chat for the user to access and potentially continue later.                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                |
| `chatId`                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | The id of the Chat that context should be retrieved from and messages added to. An empty id starts a new Chat, and the Chat is saved if saveChat is true.                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                |
| `agentConfig`                                                                                                                                                                                                                                                                                                                                                                                  | [components.AgentConfig](../../models/components/agentconfig.md)                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | Describes the agent that executes the request.                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                |
| `inclusions`                                                                                                                                                                                                                                                                                                                                                                                   | [components.ChatRestrictionFilters](../../models/components/chatrestrictionfilters.md)                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                |
| `exclusions`                                                                                                                                                                                                                                                                                                                                                                                   | [components.ChatRestrictionFilters](../../models/components/chatrestrictionfilters.md)                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                |
| `timeoutMillis`                                                                                                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | Timeout in milliseconds for the request. A `408` error will be returned if handling the request takes longer.                                                                                                                                                                                                                                                                                  | 30000                                                                                                                                                                                                                                                                                                                                                                                          |
| `applicationId`                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | The ID of the application this request originates from, used to determine the configuration of underlying chat processes. This should correspond to the ID set during admin setup. If not specified, the default chat experience will be used.                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                |
| `agentId`                                                                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | The ID of the Agent that should process this chat request. Only Agents with trigger set to 'User chat message' are invokable through this API. If not specified, the default chat experience will be used.                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                |
| `stream`                                                                                                                                                                                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                             | If set, response lines will be streamed one-by-one as they become available. Each will be a ChatResponse, formatted as JSON, and separated by a new line. If false, the entire response will be returned at once. Note that if this is set and the model being used does not support streaming, the model's response will not be streamed, but other messages from the endpoint still will be. |                                                                                                                                                                                                                                                                                                                                                                                                |