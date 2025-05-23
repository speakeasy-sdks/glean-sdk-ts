/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListchatsRequest = {
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours behind UTC.
   */
  timezoneOffset?: number | undefined;
};

/** @internal */
export const ListchatsRequest$inboundSchema: z.ZodType<
  ListchatsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  timezoneOffset: z.number().int().optional(),
});

/** @internal */
export type ListchatsRequest$Outbound = {
  timezoneOffset?: number | undefined;
};

/** @internal */
export const ListchatsRequest$outboundSchema: z.ZodType<
  ListchatsRequest$Outbound,
  z.ZodTypeDef,
  ListchatsRequest
> = z.object({
  timezoneOffset: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListchatsRequest$ {
  /** @deprecated use `ListchatsRequest$inboundSchema` instead. */
  export const inboundSchema = ListchatsRequest$inboundSchema;
  /** @deprecated use `ListchatsRequest$outboundSchema` instead. */
  export const outboundSchema = ListchatsRequest$outboundSchema;
  /** @deprecated use `ListchatsRequest$Outbound` instead. */
  export type Outbound = ListchatsRequest$Outbound;
}

export function listchatsRequestToJSON(
  listchatsRequest: ListchatsRequest,
): string {
  return JSON.stringify(
    ListchatsRequest$outboundSchema.parse(listchatsRequest),
  );
}

export function listchatsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListchatsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListchatsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListchatsRequest' from JSON`,
  );
}
