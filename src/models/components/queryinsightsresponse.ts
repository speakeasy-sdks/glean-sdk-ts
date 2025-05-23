/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  QueryInsight,
  QueryInsight$inboundSchema,
  QueryInsight$Outbound,
  QueryInsight$outboundSchema,
} from "./queryinsight.js";

export type QueryInsightsResponse = {
  /**
   * Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC).
   */
  lastLogTimestamp?: number | undefined;
  /**
   * Insights for queries.
   */
  queryInsights?: Array<QueryInsight> | undefined;
  /**
   * Insights for low performing queries without good results.
   */
  lowPerformingQueryInsights?: Array<QueryInsight> | undefined;
  /**
   * list of departments applicable for queries tab.
   */
  departments?: Array<string> | undefined;
  /**
   * Min threshold in number of visitors while populating results, otherwise 0.
   */
  minVisitorThreshold?: number | undefined;
};

/** @internal */
export const QueryInsightsResponse$inboundSchema: z.ZodType<
  QueryInsightsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  lastLogTimestamp: z.number().int().optional(),
  queryInsights: z.array(QueryInsight$inboundSchema).optional(),
  lowPerformingQueryInsights: z.array(QueryInsight$inboundSchema).optional(),
  departments: z.array(z.string()).optional(),
  minVisitorThreshold: z.number().int().optional(),
});

/** @internal */
export type QueryInsightsResponse$Outbound = {
  lastLogTimestamp?: number | undefined;
  queryInsights?: Array<QueryInsight$Outbound> | undefined;
  lowPerformingQueryInsights?: Array<QueryInsight$Outbound> | undefined;
  departments?: Array<string> | undefined;
  minVisitorThreshold?: number | undefined;
};

/** @internal */
export const QueryInsightsResponse$outboundSchema: z.ZodType<
  QueryInsightsResponse$Outbound,
  z.ZodTypeDef,
  QueryInsightsResponse
> = z.object({
  lastLogTimestamp: z.number().int().optional(),
  queryInsights: z.array(QueryInsight$outboundSchema).optional(),
  lowPerformingQueryInsights: z.array(QueryInsight$outboundSchema).optional(),
  departments: z.array(z.string()).optional(),
  minVisitorThreshold: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryInsightsResponse$ {
  /** @deprecated use `QueryInsightsResponse$inboundSchema` instead. */
  export const inboundSchema = QueryInsightsResponse$inboundSchema;
  /** @deprecated use `QueryInsightsResponse$outboundSchema` instead. */
  export const outboundSchema = QueryInsightsResponse$outboundSchema;
  /** @deprecated use `QueryInsightsResponse$Outbound` instead. */
  export type Outbound = QueryInsightsResponse$Outbound;
}

export function queryInsightsResponseToJSON(
  queryInsightsResponse: QueryInsightsResponse,
): string {
  return JSON.stringify(
    QueryInsightsResponse$outboundSchema.parse(queryInsightsResponse),
  );
}

export function queryInsightsResponseFromJSON(
  jsonString: string,
): SafeParseResult<QueryInsightsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryInsightsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryInsightsResponse' from JSON`,
  );
}
