/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Glean } from "../index.js";
import { RFCDate } from "../types/index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Client Shortcuts Createshortcut", async () => {
  const testHttpClient = createTestHTTPClient("createshortcut");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.client.shortcuts.create({
    data: {
      addedRoles: [
        {
          person: {
            name: "George Clooney",
            obfuscatedId: "abc123",
            relatedDocuments: [],
            metadata: {
              type: "FULL_TIME",
              title: "Actor",
              department: "Movies",
              email: "george@example.com",
              location: "Hollywood, CA",
              phone: "6505551234",
              photoUrl: "https://example.com/george.jpg",
              startDate: new RFCDate("2000-01-23"),
              datasourceProfile: [
                {
                  datasource: "github",
                  handle: "<value>",
                },
              ],
              querySuggestions: {
                suggestions: [],
              },
              inviteInfo: {
                invites: [],
              },
              customFields: [],
              badges: [
                {
                  key: "deployment_name_new_hire",
                  displayName: "New hire",
                  iconConfig: {
                    color: "#343CED",
                    key: "person_icon",
                    iconType: "GLYPH",
                    name: "user",
                  },
                },
              ],
            },
          },
          role: "OWNER",
        },
        {
          role: "VERIFIER",
        },
      ],
      removedRoles: [
        {
          role: "VERIFIER",
        },
        {
          role: "ANSWER_MODERATOR",
        },
        {
          role: "OWNER",
        },
      ],
    },
  });
  expect(result).toBeDefined();
});

test("Client Shortcuts Deleteshortcut", async () => {
  const testHttpClient = createTestHTTPClient("deleteshortcut");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  await glean.client.shortcuts.delete({
    id: 545907,
  });
});

test("Client Shortcuts Getshortcut", async () => {
  const testHttpClient = createTestHTTPClient("getshortcut");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.client.shortcuts.retrieve({});
  expect(result).toBeDefined();
});

test("Client Shortcuts Listshortcuts", async () => {
  const testHttpClient = createTestHTTPClient("listshortcuts");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.client.shortcuts.list({
    pageSize: 10,
    filters: [
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
  });
  expect(result).toBeDefined();
});

test("Client Shortcuts Updateshortcut", async () => {
  const testHttpClient = createTestHTTPClient("updateshortcut");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.client.shortcuts.update({
    id: 857478,
    addedRoles: [
      {
        person: {
          name: "George Clooney",
          obfuscatedId: "abc123",
          relatedDocuments: [],
          metadata: {
            type: "FULL_TIME",
            title: "Actor",
            department: "Movies",
            email: "george@example.com",
            location: "Hollywood, CA",
            phone: "6505551234",
            photoUrl: "https://example.com/george.jpg",
            startDate: new RFCDate("2000-01-23"),
            datasourceProfile: [
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
              {
                datasource: "github",
                handle: "<value>",
              },
            ],
            querySuggestions: {
              suggestions: [],
            },
            inviteInfo: {
              invites: [],
            },
            customFields: [],
            badges: [
              {
                key: "deployment_name_new_hire",
                displayName: "New hire",
                iconConfig: {
                  color: "#343CED",
                  key: "person_icon",
                  iconType: "GLYPH",
                  name: "user",
                },
              },
            ],
          },
        },
        role: "ANSWER_MODERATOR",
      },
      {
        role: "EDITOR",
      },
    ],
    removedRoles: [
      {
        role: "VIEWER",
      },
      {
        role: "OWNER",
      },
      {
        role: "VIEWER",
      },
    ],
  });
  expect(result).toBeDefined();
});
