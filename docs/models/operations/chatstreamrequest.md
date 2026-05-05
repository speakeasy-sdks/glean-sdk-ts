# ChatStreamRequest

## Example Usage

```typescript
import { ChatStreamRequest } from "@gleanwork/api-client/models/operations";

let value: ChatStreamRequest = {
  chatRequest: {
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
                    numLikes: 951547,
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
                        remindAt: 897358,
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
                    "during absentmindedly phew productive present than aside advancement",
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
                  id: 506209,
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
                type: "ACTION",
                name: "<value>",
                displayName: "Sylvan15",
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
                    startIndex: 281266,
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `timezoneOffset`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC. |
| `chatRequest`                                                                                              | [components.ChatRequest](../../models/components/chatrequest.md)                                           | :heavy_check_mark:                                                                                         | Includes chat history for Glean AI to respond to.                                                          |