/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChatStreamRequest = {
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.
   */
  timezoneOffset?: number | undefined;
  /**
   * Includes chat history for Glean AI to respond to.
   */
  chatRequest: components.ChatRequest;
};

/** @internal */
export const ChatStreamRequest$inboundSchema: z.ZodType<
  ChatStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  timezoneOffset: z.number().int().optional(),
  ChatRequest: components.ChatRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "ChatRequest": "chatRequest",
  });
});

/** @internal */
export type ChatStreamRequest$Outbound = {
  timezoneOffset?: number | undefined;
  ChatRequest: components.ChatRequest$Outbound;
};

/** @internal */
export const ChatStreamRequest$outboundSchema: z.ZodType<
  ChatStreamRequest$Outbound,
  z.ZodTypeDef,
  ChatStreamRequest
> = z.object({
  timezoneOffset: z.number().int().optional(),
  chatRequest: components.ChatRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    chatRequest: "ChatRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatStreamRequest$ {
  /** @deprecated use `ChatStreamRequest$inboundSchema` instead. */
  export const inboundSchema = ChatStreamRequest$inboundSchema;
  /** @deprecated use `ChatStreamRequest$outboundSchema` instead. */
  export const outboundSchema = ChatStreamRequest$outboundSchema;
  /** @deprecated use `ChatStreamRequest$Outbound` instead. */
  export type Outbound = ChatStreamRequest$Outbound;
}

export function chatStreamRequestToJSON(
  chatStreamRequest: ChatStreamRequest,
): string {
  return JSON.stringify(
    ChatStreamRequest$outboundSchema.parse(chatStreamRequest),
  );
}

export function chatStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<ChatStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChatStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChatStreamRequest' from JSON`,
  );
}
