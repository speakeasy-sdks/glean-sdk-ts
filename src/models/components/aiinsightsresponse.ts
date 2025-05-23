/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserActivityInsight,
  UserActivityInsight$inboundSchema,
  UserActivityInsight$Outbound,
  UserActivityInsight$outboundSchema,
} from "./useractivityinsight.js";

export type AiInsightsResponse = {
  /**
   * Unix timestamp of the last activity processed to make the response (in seconds since epoch UTC).
   */
  lastLogTimestamp?: number | undefined;
  assistantInsights?: Array<UserActivityInsight> | undefined;
  /**
   * Total number of Active Assistant users (chat, summary, AIA) in requested period.
   */
  totalActiveAssistantUsers?: number | undefined;
  /**
   * Total number of Chat messages sent in requested period.
   */
  totalChatMessages?: number | undefined;
  /**
   * Total number of AI Document Summarizations invoked in the requested period.
   */
  totalAiSummarizations?: number | undefined;
  /**
   * Total number of AI Answers generated in the requested period.
   */
  totalAiAnswers?: number | undefined;
  /**
   * Total number of Chat messages which received upvotes by the user.
   */
  totalUpvotes?: number | undefined;
  /**
   * Total number of Chat messages which received downvotes by the user.
   */
  totalDownvotes?: number | undefined;
  /**
   * Total number of Gleanbot responses, both proactive and reactive.
   */
  totalGleanbotResponses?: number | undefined;
  /**
   * Total number of Gleanbot responses shared publicly (upvoted).
   */
  totalGleanbotResponsesShared?: number | undefined;
  /**
   * Total number of Glean responses rejected as not helpful (downvoted).
   */
  totalGleanbotResponsesNotHelpful?: number | undefined;
  /**
   * list of departments applicable for users tab.
   */
  departments?: Array<string> | undefined;
};

/** @internal */
export const AiInsightsResponse$inboundSchema: z.ZodType<
  AiInsightsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  lastLogTimestamp: z.number().int().optional(),
  assistantInsights: z.array(UserActivityInsight$inboundSchema).optional(),
  totalActiveAssistantUsers: z.number().int().optional(),
  totalChatMessages: z.number().int().optional(),
  totalAiSummarizations: z.number().int().optional(),
  totalAiAnswers: z.number().int().optional(),
  totalUpvotes: z.number().int().optional(),
  totalDownvotes: z.number().int().optional(),
  totalGleanbotResponses: z.number().int().optional(),
  totalGleanbotResponsesShared: z.number().int().optional(),
  totalGleanbotResponsesNotHelpful: z.number().int().optional(),
  departments: z.array(z.string()).optional(),
});

/** @internal */
export type AiInsightsResponse$Outbound = {
  lastLogTimestamp?: number | undefined;
  assistantInsights?: Array<UserActivityInsight$Outbound> | undefined;
  totalActiveAssistantUsers?: number | undefined;
  totalChatMessages?: number | undefined;
  totalAiSummarizations?: number | undefined;
  totalAiAnswers?: number | undefined;
  totalUpvotes?: number | undefined;
  totalDownvotes?: number | undefined;
  totalGleanbotResponses?: number | undefined;
  totalGleanbotResponsesShared?: number | undefined;
  totalGleanbotResponsesNotHelpful?: number | undefined;
  departments?: Array<string> | undefined;
};

/** @internal */
export const AiInsightsResponse$outboundSchema: z.ZodType<
  AiInsightsResponse$Outbound,
  z.ZodTypeDef,
  AiInsightsResponse
> = z.object({
  lastLogTimestamp: z.number().int().optional(),
  assistantInsights: z.array(UserActivityInsight$outboundSchema).optional(),
  totalActiveAssistantUsers: z.number().int().optional(),
  totalChatMessages: z.number().int().optional(),
  totalAiSummarizations: z.number().int().optional(),
  totalAiAnswers: z.number().int().optional(),
  totalUpvotes: z.number().int().optional(),
  totalDownvotes: z.number().int().optional(),
  totalGleanbotResponses: z.number().int().optional(),
  totalGleanbotResponsesShared: z.number().int().optional(),
  totalGleanbotResponsesNotHelpful: z.number().int().optional(),
  departments: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AiInsightsResponse$ {
  /** @deprecated use `AiInsightsResponse$inboundSchema` instead. */
  export const inboundSchema = AiInsightsResponse$inboundSchema;
  /** @deprecated use `AiInsightsResponse$outboundSchema` instead. */
  export const outboundSchema = AiInsightsResponse$outboundSchema;
  /** @deprecated use `AiInsightsResponse$Outbound` instead. */
  export type Outbound = AiInsightsResponse$Outbound;
}

export function aiInsightsResponseToJSON(
  aiInsightsResponse: AiInsightsResponse,
): string {
  return JSON.stringify(
    AiInsightsResponse$outboundSchema.parse(aiInsightsResponse),
  );
}

export function aiInsightsResponseFromJSON(
  jsonString: string,
): SafeParseResult<AiInsightsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AiInsightsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AiInsightsResponse' from JSON`,
  );
}
