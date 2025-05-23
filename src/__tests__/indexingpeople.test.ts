/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Glean } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Indexing People Post /Api/index/v1 /Getusercount", async () => {
  const testHttpClient = createTestHTTPClient(
    "post_/api/index/v1/getusercount",
  );

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.indexing.people.count({
    datasource: "<value>",
  });
  expect(result).toBeDefined();
});

test("Indexing People Post /Api/index/v1 /Processallemployeesandteams", async () => {
  const testHttpClient = createTestHTTPClient(
    "post_/api/index/v1/processallemployeesandteams",
  );

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  await glean.indexing.people.processAllEmployeesAndTeams();
});
