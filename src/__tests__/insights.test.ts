/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Glean } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Insights Insights", async () => {
  const testHttpClient = createTestHTTPClient("insights");

  const glean = new Glean({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    bearerAuth: process.env["GLEAN_BEARER_AUTH"] ?? "value",
  });

  const result = await glean.client.insights.retrieve({
    categories: [
      "USERS",
    ],
  });
  expect(result).toBeDefined();
});
