# EmailRequest

A request to send email[s] to the specified users

## Example Usage

```typescript
import { EmailRequest } from "@gleanwork/api-client/models/components";

let value: EmailRequest = {
  emailTemplate: "ONBOARDING_SURVEY",
  recipients: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
  ccRecipients: [
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
  senders: [
    {
      name: "George Clooney",
      obfuscatedId: "abc123",
    },
  ],
  documents: [
    {
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
  ],
  feedbackPayload: {
    customJson:
      "{\"comment\": \"glean is awesome!\", \"sender\": \"happycustomer@customer.com\"}",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `emailTemplate`                                                                                                                                  | [components.CommunicationTemplate](../../models/components/communicationtemplate.md)                                                             | :heavy_check_mark:                                                                                                                               | The type of email to send                                                                                                                        |
| `alertData`                                                                                                                                      | [components.AlertData](../../models/components/alertdata.md)                                                                                     | :heavy_minus_sign:                                                                                                                               | Admin alert related information that is used to construct the admin alert email                                                                  |
| `recipients`                                                                                                                                     | [components.Person](../../models/components/person.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                               | The people to send emails to                                                                                                                     |
| `ccRecipients`                                                                                                                                   | [components.Person](../../models/components/person.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                               | The people to CC for each email                                                                                                                  |
| `recipientFilters`                                                                                                                               | [components.PeopleFilters](../../models/components/peoplefilters.md)                                                                             | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `companyName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Name of the company.                                                                                                                             |
| `datasourceInstance`                                                                                                                             | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The instance ID of the datasource (if any)                                                                                                       |
| `senders`                                                                                                                                        | [components.Person](../../models/components/person.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                               | The people who triggered this email                                                                                                              |
| `webAppUrl`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The URL of the client triggering the request, as received in the ClientConfig                                                                    |
| `serverUrl`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The URL of the QE instance the email request is processed by.                                                                                    |
| `unsubscribeUrl`                                                                                                                                 | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The URL to unsubscribe from emails.                                                                                                              |
| `documents`                                                                                                                                      | [components.Document](../../models/components/document.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                               | The documents this email request refers to                                                                                                       |
| `reasons`                                                                                                                                        | *string*[]                                                                                                                                       | :heavy_minus_sign:                                                                                                                               | Reasons this email request was sent. Will be shown directly to end user.                                                                         |
| `blocks`                                                                                                                                         | Record<string, [components.Block](../../models/components/block.md)[]>                                                                           | :heavy_minus_sign:                                                                                                                               | For building complex email UIs, we use a block structure that dictates what we create in the UI                                                  |
| `subjects`                                                                                                                                       | Record<string, *string*>                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Mapping of recipientIds to the email subject they are to receive. Optional and only meant for templates with Sendgrid subject set to {{subject}} |
| `feedbackPayload`                                                                                                                                | [components.FeedbackPayload](../../models/components/feedbackpayload.md)                                                                         | :heavy_minus_sign:                                                                                                                               | Optional payload for feedback reporting.                                                                                                         |
| `chatFeedbackPayload`                                                                                                                            | [components.ChatFeedbackPayload](../../models/components/chatfeedbackpayload.md)                                                                 | :heavy_minus_sign:                                                                                                                               | Payload for chat feedback reporting. Required when template is `CHAT_FEEDBACK`.                                                                  |
| `dlpReportData`                                                                                                                                  | [components.DlpReportData](../../models/components/dlpreportdata.md)                                                                             | :heavy_minus_sign:                                                                                                                               | Dlp report metadata which is used to construct report email                                                                                      |
| `onboardingAdminInviteData`                                                                                                                      | [components.OnboardingAdminInviteData](../../models/components/onboardingadmininvitedata.md)                                                     | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |