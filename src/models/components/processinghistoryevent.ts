/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Processing history event for a datasource
 */
export type ProcessingHistoryEvent = {
  /**
   * The start time of the processing in ISO 8601 format
   */
  startTime?: string | undefined;
  /**
   * The end time of the processing in ISO 8601 format, 'NA' if still in progress
   */
  endTime?: string | undefined;
};

/** @internal */
export const ProcessingHistoryEvent$inboundSchema: z.ZodType<
  ProcessingHistoryEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

/** @internal */
export type ProcessingHistoryEvent$Outbound = {
  startTime?: string | undefined;
  endTime?: string | undefined;
};

/** @internal */
export const ProcessingHistoryEvent$outboundSchema: z.ZodType<
  ProcessingHistoryEvent$Outbound,
  z.ZodTypeDef,
  ProcessingHistoryEvent
> = z.object({
  startTime: z.string().optional(),
  endTime: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProcessingHistoryEvent$ {
  /** @deprecated use `ProcessingHistoryEvent$inboundSchema` instead. */
  export const inboundSchema = ProcessingHistoryEvent$inboundSchema;
  /** @deprecated use `ProcessingHistoryEvent$outboundSchema` instead. */
  export const outboundSchema = ProcessingHistoryEvent$outboundSchema;
  /** @deprecated use `ProcessingHistoryEvent$Outbound` instead. */
  export type Outbound = ProcessingHistoryEvent$Outbound;
}

export function processingHistoryEventToJSON(
  processingHistoryEvent: ProcessingHistoryEvent,
): string {
  return JSON.stringify(
    ProcessingHistoryEvent$outboundSchema.parse(processingHistoryEvent),
  );
}

export function processingHistoryEventFromJSON(
  jsonString: string,
): SafeParseResult<ProcessingHistoryEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProcessingHistoryEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProcessingHistoryEvent' from JSON`,
  );
}
