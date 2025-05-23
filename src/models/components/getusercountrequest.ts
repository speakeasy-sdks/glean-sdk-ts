/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Describes the request body of the /getusercount API call
 */
export type GetUserCountRequest = {
  /**
   * Datasource name for which user count is needed.
   */
  datasource: string;
};

/** @internal */
export const GetUserCountRequest$inboundSchema: z.ZodType<
  GetUserCountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasource: z.string(),
});

/** @internal */
export type GetUserCountRequest$Outbound = {
  datasource: string;
};

/** @internal */
export const GetUserCountRequest$outboundSchema: z.ZodType<
  GetUserCountRequest$Outbound,
  z.ZodTypeDef,
  GetUserCountRequest
> = z.object({
  datasource: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserCountRequest$ {
  /** @deprecated use `GetUserCountRequest$inboundSchema` instead. */
  export const inboundSchema = GetUserCountRequest$inboundSchema;
  /** @deprecated use `GetUserCountRequest$outboundSchema` instead. */
  export const outboundSchema = GetUserCountRequest$outboundSchema;
  /** @deprecated use `GetUserCountRequest$Outbound` instead. */
  export type Outbound = GetUserCountRequest$Outbound;
}

export function getUserCountRequestToJSON(
  getUserCountRequest: GetUserCountRequest,
): string {
  return JSON.stringify(
    GetUserCountRequest$outboundSchema.parse(getUserCountRequest),
  );
}

export function getUserCountRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetUserCountRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUserCountRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUserCountRequest' from JSON`,
  );
}
