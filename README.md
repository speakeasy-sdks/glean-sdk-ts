# Glean TypeScript API Client

<!-- No Summary [summary] -->

The Glean TypeScript SDK provides convenient access to the Glean REST API in both browser and Node.js environments. It offers full TypeScript types, modern async/await support, and uses the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API under the hood.

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Glean TypeScript API Client](#glean-typescript-api-client)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add @gleanwork/api-client
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add @gleanwork/api-client zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example 1

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.chat.create({
    messages: [
      {
        fragments: [
          {
            text: "What are the company holidays this year?",
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```

### Example 2

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await glean.client.chat.createStream({
    messages: [
      {
        fragments: [
          {
            text: "What are the company holidays this year?",
          },
        ],
      },
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `GLEAN_BEARER_AUTH`  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [client](docs/sdks/client/README.md)


#### [client.activity](docs/sdks/activity/README.md)

* [report](docs/sdks/activity/README.md#report) - Report document activity
* [feedback](docs/sdks/activity/README.md#feedback) - Report client activity

#### [client.agents](docs/sdks/agents/README.md)

* [list](docs/sdks/agents/README.md#list) - Lists all agents.

#### [client.agents.agent](docs/sdks/agent/README.md)

* [run](docs/sdks/agent/README.md#run) - Runs an Agent.

#### [client.agents.agent.inputs](docs/sdks/inputs/README.md)

* [retrieve](docs/sdks/inputs/README.md#retrieve) - Gets the inputs to an agent.

#### [client.announcements](docs/sdks/announcements/README.md)

* [create](docs/sdks/announcements/README.md#create) - Create Announcement
* [delete](docs/sdks/announcements/README.md#delete) - Delete Announcement
* [update](docs/sdks/announcements/README.md#update) - Update Announcement

#### [client.answers](docs/sdks/answers/README.md)

* [create](docs/sdks/answers/README.md#create) - Create Answer
* [delete](docs/sdks/answers/README.md#delete) - Delete Answer
* [update](docs/sdks/answers/README.md#update) - Update Answer
* [retrieve](docs/sdks/answers/README.md#retrieve) - Read Answer
* [list](docs/sdks/answers/README.md#list) - List Answers

#### [client.authentication](docs/sdks/clientauthentication/README.md)

* [createToken](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token

#### [client.chat](docs/sdks/chat/README.md)

* [create](docs/sdks/chat/README.md#create) - Chat
* [deleteAll](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
* [delete](docs/sdks/chat/README.md#delete) - Deletes saved Chats
* [retrieve](docs/sdks/chat/README.md#retrieve) - Retrieves a Chat
* [list](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
* [createStream](docs/sdks/chat/README.md#createstream) - Chat

#### [client.chat.application](docs/sdks/application/README.md)

* [retrieve](docs/sdks/application/README.md#retrieve) - Gets the metadata for a custom Chat application

#### [client.chat.files](docs/sdks/files/README.md)

* [upload](docs/sdks/files/README.md#upload) - Upload files for Chat.
* [retrieve](docs/sdks/files/README.md#retrieve) - Get files uploaded by a user for Chat.
* [delete](docs/sdks/files/README.md#delete) - Delete files uploaded by a user for chat.

#### [client.collections](docs/sdks/collections/README.md)

* [addItems](docs/sdks/collections/README.md#additems) - Add Collection item
* [create](docs/sdks/collections/README.md#create) - Create Collection
* [delete](docs/sdks/collections/README.md#delete) - Delete Collection
* [update](docs/sdks/collections/README.md#update) - Update Collection
* [retrieve](docs/sdks/collections/README.md#retrieve) - Read Collection
* [list](docs/sdks/collections/README.md#list) - List Collections

#### [client.collections.item](docs/sdks/item/README.md)

* [delete](docs/sdks/item/README.md#delete) - Delete Collection item
* [update](docs/sdks/item/README.md#update) - Update Collection item

#### [client.documents](docs/sdks/clientdocuments/README.md)

* [retrieve](docs/sdks/clientdocuments/README.md#retrieve) - Read documents
* [retrieveByFacets](docs/sdks/clientdocuments/README.md#retrievebyfacets) - Read documents by facets

#### [client.documents.permissions](docs/sdks/documentspermissions/README.md)

* [retrieve](docs/sdks/documentspermissions/README.md#retrieve) - Read document permissions

#### [client.entities](docs/sdks/entities/README.md)

* [list](docs/sdks/entities/README.md#list) - List entities
* [readPeople](docs/sdks/entities/README.md#readpeople) - Read people

#### [client.insights](docs/sdks/insights/README.md)

* [retrieve](docs/sdks/insights/README.md#retrieve) - Read insights

#### [client.messages](docs/sdks/messages/README.md)

* [retrieve](docs/sdks/messages/README.md#retrieve) - Read messages

#### [client.pins](docs/sdks/pins/README.md)

* [update](docs/sdks/pins/README.md#update) - Update pin
* [retrieve](docs/sdks/pins/README.md#retrieve) - Read pin
* [list](docs/sdks/pins/README.md#list) - List pins
* [create](docs/sdks/pins/README.md#create) - Create pin
* [remove](docs/sdks/pins/README.md#remove) - Delete pin

#### [client.search](docs/sdks/clientsearch/README.md)

* [recommendations](docs/sdks/clientsearch/README.md#recommendations) - Recommend documents
* [query](docs/sdks/clientsearch/README.md#query) - Search

#### [client.search.admin](docs/sdks/admin/README.md)

* [query](docs/sdks/admin/README.md#query) - Search the index (admin)

#### [client.search.feed](docs/sdks/feed/README.md)

* [retrieve](docs/sdks/feed/README.md#retrieve) - Feed of documents and events

#### [client.shortcuts](docs/sdks/clientshortcuts/README.md)

* [delete](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
* [retrieve](docs/sdks/clientshortcuts/README.md#retrieve) - Read shortcut
* [list](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
* [update](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
* [upload](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts

#### [client.summarize](docs/sdks/summarize/README.md)

* [generate](docs/sdks/summarize/README.md#generate) - Summarize documents

#### [client.verification](docs/sdks/clientverification/README.md)

* [addReminder](docs/sdks/clientverification/README.md#addreminder) - Create verification
* [list](docs/sdks/clientverification/README.md#list) - List verifications


### [indexing](docs/sdks/indexing/README.md)


#### [indexing.authentication](docs/sdks/indexingauthentication/README.md)

* [rotateToken](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token

#### [indexing.datasources](docs/sdks/datasources/README.md)

* [add](docs/sdks/datasources/README.md#add) - Add or update datasource

#### [indexing.datasources.config](docs/sdks/config/README.md)

* [retrieve](docs/sdks/config/README.md#retrieve) - Get datasource config

#### [indexing.documents](docs/sdks/indexingdocuments/README.md)

* [addOrUpdate](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
* [index](docs/sdks/indexingdocuments/README.md#index) - Index documents
* [bulkIndex](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
* [processAll](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
* [delete](docs/sdks/indexingdocuments/README.md#delete) - Delete document

#### [indexing.people](docs/sdks/indexingpeople/README.md)

* [index](docs/sdks/indexingpeople/README.md#index) - Index employee
* [~~bulkIndex~~](docs/sdks/indexingpeople/README.md#bulkindex) - Bulk index employees :warning: **Deprecated**
* [processAllEmployeesAndTeams](docs/sdks/indexingpeople/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
* [delete](docs/sdks/indexingpeople/README.md#delete) - Delete employee
* [indexTeam](docs/sdks/indexingpeople/README.md#indexteam) - Index team
* [deleteTeam](docs/sdks/indexingpeople/README.md#deleteteam) - Delete team
* [bulkIndexTeams](docs/sdks/indexingpeople/README.md#bulkindexteams) - Bulk index teams

#### [indexing.permissions](docs/sdks/indexingpermissions/README.md)

* [updatePermissions](docs/sdks/indexingpermissions/README.md#updatepermissions) - Update document permissions
* [indexUser](docs/sdks/indexingpermissions/README.md#indexuser) - Index user
* [bulkIndexUsers](docs/sdks/indexingpermissions/README.md#bulkindexusers) - Bulk index users
* [indexGroup](docs/sdks/indexingpermissions/README.md#indexgroup) - Index group
* [bulkIndexGroups](docs/sdks/indexingpermissions/README.md#bulkindexgroups) - Bulk index groups
* [indexMembership](docs/sdks/indexingpermissions/README.md#indexmembership) - Index membership
* [bulkIndexMemberships](docs/sdks/indexingpermissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
* [processMemberships](docs/sdks/indexingpermissions/README.md#processmemberships) - Schedules the processing of group memberships
* [deleteUser](docs/sdks/indexingpermissions/README.md#deleteuser) - Delete user
* [deleteGroup](docs/sdks/indexingpermissions/README.md#deletegroup) - Delete group
* [deleteMembership](docs/sdks/indexingpermissions/README.md#deletemembership) - Delete membership
* [authorizeBetaUsers](docs/sdks/indexingpermissions/README.md#authorizebetausers) - Beta users

#### [indexing.shortcuts](docs/sdks/indexingshortcuts/README.md)

* [bulkIndex](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts

#### [indexing.troubleshooting](docs/sdks/troubleshooting/README.md)

* [checkAccess](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access

#### [indexing.troubleshooting.datasource](docs/sdks/datasource/README.md)

* [status](docs/sdks/datasource/README.md#status) - Beta: Get datasource status


#### [indexing.troubleshooting.datasource.document](docs/sdks/document/README.md)

* [debug](docs/sdks/document/README.md#debug) - Beta: Get document information


#### [indexing.troubleshooting.datasource.documents](docs/sdks/datasourcedocuments/README.md)

* [debug](docs/sdks/datasourcedocuments/README.md#debug) - Beta: Get information of a batch of documents


#### [indexing.troubleshooting.datasource.user](docs/sdks/user/README.md)

* [debug](docs/sdks/user/README.md#debug) - Beta: Get user information


#### [~~indexing.troubleshooting.documents~~](docs/sdks/troubleshootingdocuments/README.md)

* [~~status~~](docs/sdks/troubleshootingdocuments/README.md#status) - Get document upload and indexing status :warning: **Deprecated**
* [~~count~~](docs/sdks/troubleshootingdocuments/README.md#count) - Get document count :warning: **Deprecated**

#### [~~indexing.troubleshooting.users~~](docs/sdks/users/README.md)

* [~~count~~](docs/sdks/users/README.md#count) - Get user count :warning: **Deprecated**

### [people](docs/sdks/people/README.md)

* [postApiIndexV1Bulkindexemployees](docs/sdks/people/README.md#postapiindexv1bulkindexemployees) - Bulk index employees

### [search](docs/sdks/search/README.md)

* [autocomplete](docs/sdks/search/README.md#autocomplete) - Autocomplete

### [shortcuts](docs/sdks/shortcuts/README.md)

* [createshortcut](docs/sdks/shortcuts/README.md#createshortcut) - Create shortcut

### [verification](docs/sdks/verification/README.md)

* [verify](docs/sdks/verification/README.md#verify) - Update verification

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`clientActivityFeedback`](docs/sdks/activity/README.md#feedback) - Report client activity
- [`clientActivityReport`](docs/sdks/activity/README.md#report) - Report document activity
- [`clientAgentsAgentInputsRetrieve`](docs/sdks/inputs/README.md#retrieve) - Gets the inputs to an agent.
- [`clientAgentsAgentRun`](docs/sdks/agent/README.md#run) - Runs an Agent.
- [`clientAgentsList`](docs/sdks/agents/README.md#list) - Lists all agents.
- [`clientAnnouncementsCreate`](docs/sdks/announcements/README.md#create) - Create Announcement
- [`clientAnnouncementsDelete`](docs/sdks/announcements/README.md#delete) - Delete Announcement
- [`clientAnnouncementsUpdate`](docs/sdks/announcements/README.md#update) - Update Announcement
- [`clientAnswersCreate`](docs/sdks/answers/README.md#create) - Create Answer
- [`clientAnswersDelete`](docs/sdks/answers/README.md#delete) - Delete Answer
- [`clientAnswersList`](docs/sdks/answers/README.md#list) - List Answers
- [`clientAnswersRetrieve`](docs/sdks/answers/README.md#retrieve) - Read Answer
- [`clientAnswersUpdate`](docs/sdks/answers/README.md#update) - Update Answer
- [`clientAuthenticationCreateToken`](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token
- [`clientChatApplicationRetrieve`](docs/sdks/application/README.md#retrieve) - Gets the metadata for a custom Chat application
- [`clientChatCreate`](docs/sdks/chat/README.md#create) - Chat
- [`clientChatCreateStream`](docs/sdks/chat/README.md#createstream) - Chat
- [`clientChatDelete`](docs/sdks/chat/README.md#delete) - Deletes saved Chats
- [`clientChatDeleteAll`](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
- [`clientChatFilesDelete`](docs/sdks/files/README.md#delete) - Delete files uploaded by a user for chat.
- [`clientChatFilesRetrieve`](docs/sdks/files/README.md#retrieve) - Get files uploaded by a user for Chat.
- [`clientChatFilesUpload`](docs/sdks/files/README.md#upload) - Upload files for Chat.
- [`clientChatList`](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
- [`clientChatRetrieve`](docs/sdks/chat/README.md#retrieve) - Retrieves a Chat
- [`clientCollectionsAddItems`](docs/sdks/collections/README.md#additems) - Add Collection item
- [`clientCollectionsCreate`](docs/sdks/collections/README.md#create) - Create Collection
- [`clientCollectionsDelete`](docs/sdks/collections/README.md#delete) - Delete Collection
- [`clientCollectionsItemDelete`](docs/sdks/item/README.md#delete) - Delete Collection item
- [`clientCollectionsItemUpdate`](docs/sdks/item/README.md#update) - Update Collection item
- [`clientCollectionsList`](docs/sdks/collections/README.md#list) - List Collections
- [`clientCollectionsRetrieve`](docs/sdks/collections/README.md#retrieve) - Read Collection
- [`clientCollectionsUpdate`](docs/sdks/collections/README.md#update) - Update Collection
- [`clientDocumentsPermissionsRetrieve`](docs/sdks/documentspermissions/README.md#retrieve) - Read document permissions
- [`clientDocumentsRetrieve`](docs/sdks/clientdocuments/README.md#retrieve) - Read documents
- [`clientDocumentsRetrieveByFacets`](docs/sdks/clientdocuments/README.md#retrievebyfacets) - Read documents by facets
- [`clientEntitiesList`](docs/sdks/entities/README.md#list) - List entities
- [`clientEntitiesReadPeople`](docs/sdks/entities/README.md#readpeople) - Read people
- [`clientInsightsRetrieve`](docs/sdks/insights/README.md#retrieve) - Read insights
- [`clientMessagesRetrieve`](docs/sdks/messages/README.md#retrieve) - Read messages
- [`clientPinsCreate`](docs/sdks/pins/README.md#create) - Create pin
- [`clientPinsList`](docs/sdks/pins/README.md#list) - List pins
- [`clientPinsRemove`](docs/sdks/pins/README.md#remove) - Delete pin
- [`clientPinsRetrieve`](docs/sdks/pins/README.md#retrieve) - Read pin
- [`clientPinsUpdate`](docs/sdks/pins/README.md#update) - Update pin
- [`clientSearchAdminQuery`](docs/sdks/admin/README.md#query) - Search the index (admin)
- [`clientSearchFeedRetrieve`](docs/sdks/feed/README.md#retrieve) - Feed of documents and events
- [`clientSearchQuery`](docs/sdks/clientsearch/README.md#query) - Search
- [`clientSearchRecommendations`](docs/sdks/clientsearch/README.md#recommendations) - Recommend documents
- [`clientShortcutsDelete`](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
- [`clientShortcutsList`](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
- [`clientShortcutsRetrieve`](docs/sdks/clientshortcuts/README.md#retrieve) - Read shortcut
- [`clientShortcutsUpdate`](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
- [`clientShortcutsUpload`](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts
- [`clientSummarizeGenerate`](docs/sdks/summarize/README.md#generate) - Summarize documents
- [`clientVerificationAddReminder`](docs/sdks/clientverification/README.md#addreminder) - Create verification
- [`clientVerificationList`](docs/sdks/clientverification/README.md#list) - List verifications
- [`indexingAuthenticationRotateToken`](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token
- [`indexingDatasourcesAdd`](docs/sdks/datasources/README.md#add) - Add or update datasource
- [`indexingDatasourcesConfigRetrieve`](docs/sdks/config/README.md#retrieve) - Get datasource config
- [`indexingDocumentsAddOrUpdate`](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
- [`indexingDocumentsBulkIndex`](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
- [`indexingDocumentsDelete`](docs/sdks/indexingdocuments/README.md#delete) - Delete document
- [`indexingDocumentsIndex`](docs/sdks/indexingdocuments/README.md#index) - Index documents
- [`indexingDocumentsProcessAll`](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
- [`indexingPeopleBulkIndexTeams`](docs/sdks/indexingpeople/README.md#bulkindexteams) - Bulk index teams
- [`indexingPeopleDelete`](docs/sdks/indexingpeople/README.md#delete) - Delete employee
- [`indexingPeopleDeleteTeam`](docs/sdks/indexingpeople/README.md#deleteteam) - Delete team
- [`indexingPeopleIndex`](docs/sdks/indexingpeople/README.md#index) - Index employee
- [`indexingPeopleIndexTeam`](docs/sdks/indexingpeople/README.md#indexteam) - Index team
- [`indexingPeopleProcessAllEmployeesAndTeams`](docs/sdks/indexingpeople/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
- [`indexingPermissionsAuthorizeBetaUsers`](docs/sdks/indexingpermissions/README.md#authorizebetausers) - Beta users
- [`indexingPermissionsBulkIndexGroups`](docs/sdks/indexingpermissions/README.md#bulkindexgroups) - Bulk index groups
- [`indexingPermissionsBulkIndexMemberships`](docs/sdks/indexingpermissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
- [`indexingPermissionsBulkIndexUsers`](docs/sdks/indexingpermissions/README.md#bulkindexusers) - Bulk index users
- [`indexingPermissionsDeleteGroup`](docs/sdks/indexingpermissions/README.md#deletegroup) - Delete group
- [`indexingPermissionsDeleteMembership`](docs/sdks/indexingpermissions/README.md#deletemembership) - Delete membership
- [`indexingPermissionsDeleteUser`](docs/sdks/indexingpermissions/README.md#deleteuser) - Delete user
- [`indexingPermissionsIndexGroup`](docs/sdks/indexingpermissions/README.md#indexgroup) - Index group
- [`indexingPermissionsIndexMembership`](docs/sdks/indexingpermissions/README.md#indexmembership) - Index membership
- [`indexingPermissionsIndexUser`](docs/sdks/indexingpermissions/README.md#indexuser) - Index user
- [`indexingPermissionsProcessMemberships`](docs/sdks/indexingpermissions/README.md#processmemberships) - Schedules the processing of group memberships
- [`indexingPermissionsUpdatePermissions`](docs/sdks/indexingpermissions/README.md#updatepermissions) - Update document permissions
- [`indexingShortcutsBulkIndex`](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts
- [`indexingTroubleshootingCheckAccess`](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access
- [`indexingTroubleshootingDatasourceDocumentDebug`](docs/sdks/document/README.md#debug) - Beta: Get document information

- [`indexingTroubleshootingDatasourceDocumentsDebug`](docs/sdks/datasourcedocuments/README.md#debug) - Beta: Get information of a batch of documents

- [`indexingTroubleshootingDatasourceStatus`](docs/sdks/datasource/README.md#status) - Beta: Get datasource status

- [`indexingTroubleshootingDatasourceUserDebug`](docs/sdks/user/README.md#debug) - Beta: Get user information

- [`peoplePostApiIndexV1Bulkindexemployees`](docs/sdks/people/README.md#postapiindexv1bulkindexemployees) - Bulk index employees
- [`searchAutocomplete`](docs/sdks/search/README.md#autocomplete) - Autocomplete
- [`shortcutsCreateshortcut`](docs/sdks/shortcuts/README.md#createshortcut) - Create shortcut
- [`verificationVerify`](docs/sdks/verification/README.md#verify) - Update verification
- ~~[`indexingPeopleBulkIndex`](docs/sdks/indexingpeople/README.md#bulkindex)~~ - Bulk index employees :warning: **Deprecated**
- ~~[`indexingTroubleshootingDocumentsCount`](docs/sdks/troubleshootingdocuments/README.md#count)~~ - Get document count :warning: **Deprecated**
- ~~[`indexingTroubleshootingDocumentsStatus`](docs/sdks/troubleshootingdocuments/README.md#status)~~ - Get document upload and indexing status :warning: **Deprecated**
- ~~[`indexingTroubleshootingUsersCount`](docs/sdks/users/README.md#count)~~ - Get user count :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useClientActivityFeedbackMutation`](docs/sdks/activity/README.md#feedback) - Report client activity
- [`useClientActivityReportMutation`](docs/sdks/activity/README.md#report) - Report document activity
- [`useClientAgentsAgentInputsRetrieveMutation`](docs/sdks/inputs/README.md#retrieve) - Gets the inputs to an agent.
- [`useClientAgentsAgentRunMutation`](docs/sdks/agent/README.md#run) - Runs an Agent.
- [`useClientAgentsListMutation`](docs/sdks/agents/README.md#list) - Lists all agents.
- [`useClientAnnouncementsCreateMutation`](docs/sdks/announcements/README.md#create) - Create Announcement
- [`useClientAnnouncementsDeleteMutation`](docs/sdks/announcements/README.md#delete) - Delete Announcement
- [`useClientAnnouncementsUpdateMutation`](docs/sdks/announcements/README.md#update) - Update Announcement
- [`useClientAnswersCreateMutation`](docs/sdks/answers/README.md#create) - Create Answer
- [`useClientAnswersDeleteMutation`](docs/sdks/answers/README.md#delete) - Delete Answer
- [`useClientAnswersListMutation`](docs/sdks/answers/README.md#list) - List Answers
- [`useClientAnswersRetrieveMutation`](docs/sdks/answers/README.md#retrieve) - Read Answer
- [`useClientAnswersUpdateMutation`](docs/sdks/answers/README.md#update) - Update Answer
- [`useClientAuthenticationCreateTokenMutation`](docs/sdks/clientauthentication/README.md#createtoken) - Create authentication token
- [`useClientChatApplicationRetrieveMutation`](docs/sdks/application/README.md#retrieve) - Gets the metadata for a custom Chat application
- [`useClientChatCreateMutation`](docs/sdks/chat/README.md#create) - Chat
- [`useClientChatCreateStreamMutation`](docs/sdks/chat/README.md#createstream) - Chat
- [`useClientChatDeleteAllMutation`](docs/sdks/chat/README.md#deleteall) - Deletes all saved Chats owned by a user
- [`useClientChatDeleteMutation`](docs/sdks/chat/README.md#delete) - Deletes saved Chats
- [`useClientChatFilesDeleteMutation`](docs/sdks/files/README.md#delete) - Delete files uploaded by a user for chat.
- [`useClientChatFilesRetrieveMutation`](docs/sdks/files/README.md#retrieve) - Get files uploaded by a user for Chat.
- [`useClientChatFilesUploadMutation`](docs/sdks/files/README.md#upload) - Upload files for Chat.
- [`useClientChatListMutation`](docs/sdks/chat/README.md#list) - Retrieves all saved Chats
- [`useClientChatRetrieveMutation`](docs/sdks/chat/README.md#retrieve) - Retrieves a Chat
- [`useClientCollectionsAddItemsMutation`](docs/sdks/collections/README.md#additems) - Add Collection item
- [`useClientCollectionsCreateMutation`](docs/sdks/collections/README.md#create) - Create Collection
- [`useClientCollectionsDeleteMutation`](docs/sdks/collections/README.md#delete) - Delete Collection
- [`useClientCollectionsItemDeleteMutation`](docs/sdks/item/README.md#delete) - Delete Collection item
- [`useClientCollectionsItemUpdateMutation`](docs/sdks/item/README.md#update) - Update Collection item
- [`useClientCollectionsListMutation`](docs/sdks/collections/README.md#list) - List Collections
- [`useClientCollectionsRetrieveMutation`](docs/sdks/collections/README.md#retrieve) - Read Collection
- [`useClientCollectionsUpdateMutation`](docs/sdks/collections/README.md#update) - Update Collection
- [`useClientDocumentsPermissionsRetrieveMutation`](docs/sdks/documentspermissions/README.md#retrieve) - Read document permissions
- [`useClientDocumentsRetrieveByFacetsMutation`](docs/sdks/clientdocuments/README.md#retrievebyfacets) - Read documents by facets
- [`useClientDocumentsRetrieveMutation`](docs/sdks/clientdocuments/README.md#retrieve) - Read documents
- [`useClientEntitiesListMutation`](docs/sdks/entities/README.md#list) - List entities
- [`useClientEntitiesReadPeopleMutation`](docs/sdks/entities/README.md#readpeople) - Read people
- [`useClientInsightsRetrieveMutation`](docs/sdks/insights/README.md#retrieve) - Read insights
- [`useClientMessagesRetrieveMutation`](docs/sdks/messages/README.md#retrieve) - Read messages
- [`useClientPinsCreateMutation`](docs/sdks/pins/README.md#create) - Create pin
- [`useClientPinsListMutation`](docs/sdks/pins/README.md#list) - List pins
- [`useClientPinsRemoveMutation`](docs/sdks/pins/README.md#remove) - Delete pin
- [`useClientPinsRetrieveMutation`](docs/sdks/pins/README.md#retrieve) - Read pin
- [`useClientPinsUpdateMutation`](docs/sdks/pins/README.md#update) - Update pin
- [`useClientSearchAdminQueryMutation`](docs/sdks/admin/README.md#query) - Search the index (admin)
- [`useClientSearchFeedRetrieveMutation`](docs/sdks/feed/README.md#retrieve) - Feed of documents and events
- [`useClientSearchQueryMutation`](docs/sdks/clientsearch/README.md#query) - Search
- [`useClientSearchRecommendationsMutation`](docs/sdks/clientsearch/README.md#recommendations) - Recommend documents
- [`useClientShortcutsDeleteMutation`](docs/sdks/clientshortcuts/README.md#delete) - Delete shortcut
- [`useClientShortcutsListMutation`](docs/sdks/clientshortcuts/README.md#list) - List shortcuts
- [`useClientShortcutsRetrieveMutation`](docs/sdks/clientshortcuts/README.md#retrieve) - Read shortcut
- [`useClientShortcutsUpdateMutation`](docs/sdks/clientshortcuts/README.md#update) - Update shortcut
- [`useClientShortcutsUploadMutation`](docs/sdks/clientshortcuts/README.md#upload) - Upload shortcuts
- [`useClientSummarizeGenerateMutation`](docs/sdks/summarize/README.md#generate) - Summarize documents
- [`useClientVerificationAddReminderMutation`](docs/sdks/clientverification/README.md#addreminder) - Create verification
- [`useClientVerificationListMutation`](docs/sdks/clientverification/README.md#list) - List verifications
- [`useIndexingAuthenticationRotateTokenMutation`](docs/sdks/indexingauthentication/README.md#rotatetoken) - Rotate token
- [`useIndexingDatasourcesAddMutation`](docs/sdks/datasources/README.md#add) - Add or update datasource
- [`useIndexingDatasourcesConfigRetrieveMutation`](docs/sdks/config/README.md#retrieve) - Get datasource config
- [`useIndexingDocumentsAddOrUpdateMutation`](docs/sdks/indexingdocuments/README.md#addorupdate) - Index document
- [`useIndexingDocumentsBulkIndexMutation`](docs/sdks/indexingdocuments/README.md#bulkindex) - Bulk index documents
- [`useIndexingDocumentsDeleteMutation`](docs/sdks/indexingdocuments/README.md#delete) - Delete document
- [`useIndexingDocumentsIndexMutation`](docs/sdks/indexingdocuments/README.md#index) - Index documents
- [`useIndexingDocumentsProcessAllMutation`](docs/sdks/indexingdocuments/README.md#processall) - Schedules the processing of uploaded documents
- [`useIndexingPeopleBulkIndexTeamsMutation`](docs/sdks/indexingpeople/README.md#bulkindexteams) - Bulk index teams
- [`useIndexingPeopleDeleteMutation`](docs/sdks/indexingpeople/README.md#delete) - Delete employee
- [`useIndexingPeopleDeleteTeamMutation`](docs/sdks/indexingpeople/README.md#deleteteam) - Delete team
- [`useIndexingPeopleIndexMutation`](docs/sdks/indexingpeople/README.md#index) - Index employee
- [`useIndexingPeopleIndexTeamMutation`](docs/sdks/indexingpeople/README.md#indexteam) - Index team
- [`useIndexingPeopleProcessAllEmployeesAndTeamsMutation`](docs/sdks/indexingpeople/README.md#processallemployeesandteams) - Schedules the processing of uploaded employees and teams
- [`useIndexingPermissionsAuthorizeBetaUsersMutation`](docs/sdks/indexingpermissions/README.md#authorizebetausers) - Beta users
- [`useIndexingPermissionsBulkIndexGroupsMutation`](docs/sdks/indexingpermissions/README.md#bulkindexgroups) - Bulk index groups
- [`useIndexingPermissionsBulkIndexMembershipsMutation`](docs/sdks/indexingpermissions/README.md#bulkindexmemberships) - Bulk index memberships for a group
- [`useIndexingPermissionsBulkIndexUsersMutation`](docs/sdks/indexingpermissions/README.md#bulkindexusers) - Bulk index users
- [`useIndexingPermissionsDeleteGroupMutation`](docs/sdks/indexingpermissions/README.md#deletegroup) - Delete group
- [`useIndexingPermissionsDeleteMembershipMutation`](docs/sdks/indexingpermissions/README.md#deletemembership) - Delete membership
- [`useIndexingPermissionsDeleteUserMutation`](docs/sdks/indexingpermissions/README.md#deleteuser) - Delete user
- [`useIndexingPermissionsIndexGroupMutation`](docs/sdks/indexingpermissions/README.md#indexgroup) - Index group
- [`useIndexingPermissionsIndexMembershipMutation`](docs/sdks/indexingpermissions/README.md#indexmembership) - Index membership
- [`useIndexingPermissionsIndexUserMutation`](docs/sdks/indexingpermissions/README.md#indexuser) - Index user
- [`useIndexingPermissionsProcessMembershipsMutation`](docs/sdks/indexingpermissions/README.md#processmemberships) - Schedules the processing of group memberships
- [`useIndexingPermissionsUpdatePermissionsMutation`](docs/sdks/indexingpermissions/README.md#updatepermissions) - Update document permissions
- [`useIndexingShortcutsBulkIndexMutation`](docs/sdks/indexingshortcuts/README.md#bulkindex) - Bulk index external shortcuts
- [`useIndexingTroubleshootingCheckAccessMutation`](docs/sdks/troubleshooting/README.md#checkaccess) - Check document access
- [`useIndexingTroubleshootingDatasourceDocumentDebugMutation`](docs/sdks/document/README.md#debug) - Beta: Get document information

- [`useIndexingTroubleshootingDatasourceDocumentsDebugMutation`](docs/sdks/datasourcedocuments/README.md#debug) - Beta: Get information of a batch of documents

- [`useIndexingTroubleshootingDatasourceStatusMutation`](docs/sdks/datasource/README.md#status) - Beta: Get datasource status

- [`useIndexingTroubleshootingDatasourceUserDebugMutation`](docs/sdks/user/README.md#debug) - Beta: Get user information

- [`usePeoplePostApiIndexV1BulkindexemployeesMutation`](docs/sdks/people/README.md#postapiindexv1bulkindexemployees) - Bulk index employees
- [`useSearchAutocompleteMutation`](docs/sdks/search/README.md#autocomplete) - Autocomplete
- [`useShortcutsCreateshortcutMutation`](docs/sdks/shortcuts/README.md#createshortcut) - Create shortcut
- [`useVerificationVerifyMutation`](docs/sdks/verification/README.md#verify) - Update verification
- ~~[`useIndexingPeopleBulkIndexMutation`](docs/sdks/indexingpeople/README.md#bulkindex)~~ - Bulk index employees :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingDocumentsCountMutation`](docs/sdks/troubleshootingdocuments/README.md#count)~~ - Get document count :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingDocumentsStatusMutation`](docs/sdks/troubleshootingdocuments/README.md#status)~~ - Get document upload and indexing status :warning: **Deprecated**
- ~~[`useIndexingTroubleshootingUsersCountMutation`](docs/sdks/users/README.md#count)~~ - Get user count :warning: **Deprecated**

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Retries [retries] -->

## Error Handling

The following errors may be thrown by the SDK:

| Status Code | Description             | Error Type             | Content Type     |
| ----------- | ----------------------- | ---------------------- | ---------------- |
| 400         | Invalid Request         | errors.GleanError      | \*/\*            |
| 401         | Not Authorized          | errors.GleanError      | \*/\*            |
| 403         | Permission Denied       | errors.GleanDataError  | application/json |
| 408         | Request Timeout         | errors.GleanError      | \*/\*            |
| 422         | Invalid Query           | errors.GleanDataError  | application/json |
| 429         | Too Many Requests       | errors.GleanError      | \*/\*            |
| 4XX         | Other Client Errors     | errors.GleanError      | \*/\*            |
| 5XX         | Internal Server Errors  | errors.GleanError      | \*/\*            |

### Example

```typescript
import { Glean } from "@gleanwork/api-client";
import { GleanDataError, GleanError } from "glean/models/errors";

const glean = new Glean({
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

try {
  const data = await glean.client.search.execute({
    query: "What are the company holidays this year?",
  });
  console.log(data);
} catch (error) {
  if (error instanceof GleanError) {
    console.error(error.message);
    console.error(error.statusCode);
    console.error(error.rawResponse);
    console.error(error.body);
  }

  // If the server returned structured data
  if (error instanceof GleanDataError) {
    console.error(error.errorMessages);
    console.error(error.invalidOperators);
  }

  throw error;
}
```

### Advanced Error Handling

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- No Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://{domain}-be.glean.com` contains variables and is set to `https://domain-be.glean.com` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable | Parameter        | Default    | Description                                                              |
| -------- | ---------------- | ---------- | ------------------------------------------------------------------------ |
| `domain` | `domain: string` | `"domain"` | Email domain (without extension) that determines the deployment backend. |

#### Example

```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  domain: "scared-pearl.biz",
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Glean } from "@gleanwork/api-client";

const glean = new Glean({
  serverURL: "https://domain-be.glean.com",
  bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "",
});

async function run() {
  await glean.client.activity.report({
    events: [
      {
        action: "HISTORICAL_VIEW",
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
      {
        action: "SEARCH",
        params: {
          query: "query",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/search?q=query",
      },
      {
        action: "VIEW",
        params: {
          duration: 20,
          referrer: "https://example.com/document",
        },
        timestamp: new Date("2000-01-23T04:56:07.000Z"),
        url: "https://example.com/",
      },
    ],
  });
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Glean } from "@gleanwork/api-client";
import { HTTPClient } from "@gleanwork/api-client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Glean({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Glean } from "@gleanwork/api-client";

const sdk = new Glean({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `GLEAN_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=glean&utm_campaign=typescript)
