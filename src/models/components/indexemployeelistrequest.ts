/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IndexEmployeeRequest,
  IndexEmployeeRequest$inboundSchema,
  IndexEmployeeRequest$Outbound,
  IndexEmployeeRequest$outboundSchema,
} from "./indexemployeerequest.js";

/**
 * Describes the request body of the /indexemployeelist API call
 */
export type IndexEmployeeListRequest = {
  /**
   * List of employee info and version.
   */
  employees?: Array<IndexEmployeeRequest> | undefined;
};

/** @internal */
export const IndexEmployeeListRequest$inboundSchema: z.ZodType<
  IndexEmployeeListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employees: z.array(IndexEmployeeRequest$inboundSchema).optional(),
});

/** @internal */
export type IndexEmployeeListRequest$Outbound = {
  employees?: Array<IndexEmployeeRequest$Outbound> | undefined;
};

/** @internal */
export const IndexEmployeeListRequest$outboundSchema: z.ZodType<
  IndexEmployeeListRequest$Outbound,
  z.ZodTypeDef,
  IndexEmployeeListRequest
> = z.object({
  employees: z.array(IndexEmployeeRequest$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexEmployeeListRequest$ {
  /** @deprecated use `IndexEmployeeListRequest$inboundSchema` instead. */
  export const inboundSchema = IndexEmployeeListRequest$inboundSchema;
  /** @deprecated use `IndexEmployeeListRequest$outboundSchema` instead. */
  export const outboundSchema = IndexEmployeeListRequest$outboundSchema;
  /** @deprecated use `IndexEmployeeListRequest$Outbound` instead. */
  export type Outbound = IndexEmployeeListRequest$Outbound;
}

export function indexEmployeeListRequestToJSON(
  indexEmployeeListRequest: IndexEmployeeListRequest,
): string {
  return JSON.stringify(
    IndexEmployeeListRequest$outboundSchema.parse(indexEmployeeListRequest),
  );
}

export function indexEmployeeListRequestFromJSON(
  jsonString: string,
): SafeParseResult<IndexEmployeeListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndexEmployeeListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndexEmployeeListRequest' from JSON`,
  );
}
