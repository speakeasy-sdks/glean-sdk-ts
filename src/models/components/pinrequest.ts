/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FacetFilter,
  FacetFilter$inboundSchema,
  FacetFilter$Outbound,
  FacetFilter$outboundSchema,
} from "./facetfilter.js";

export type PinRequest = {
  /**
   * The query strings for which the pinned result will show.
   */
  queries?: Array<string> | undefined;
  /**
   * Filters which restrict who should see the pinned document. Values are taken from the corresponding filters in people search.
   */
  audienceFilters?: Array<FacetFilter> | undefined;
  /**
   * The document to be pinned.
   */
  documentId?: string | undefined;
};

/** @internal */
export const PinRequest$inboundSchema: z.ZodType<
  PinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  queries: z.array(z.string()).optional(),
  audienceFilters: z.array(FacetFilter$inboundSchema).optional(),
  documentId: z.string().optional(),
});

/** @internal */
export type PinRequest$Outbound = {
  queries?: Array<string> | undefined;
  audienceFilters?: Array<FacetFilter$Outbound> | undefined;
  documentId?: string | undefined;
};

/** @internal */
export const PinRequest$outboundSchema: z.ZodType<
  PinRequest$Outbound,
  z.ZodTypeDef,
  PinRequest
> = z.object({
  queries: z.array(z.string()).optional(),
  audienceFilters: z.array(FacetFilter$outboundSchema).optional(),
  documentId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PinRequest$ {
  /** @deprecated use `PinRequest$inboundSchema` instead. */
  export const inboundSchema = PinRequest$inboundSchema;
  /** @deprecated use `PinRequest$outboundSchema` instead. */
  export const outboundSchema = PinRequest$outboundSchema;
  /** @deprecated use `PinRequest$Outbound` instead. */
  export type Outbound = PinRequest$Outbound;
}

export function pinRequestToJSON(pinRequest: PinRequest): string {
  return JSON.stringify(PinRequest$outboundSchema.parse(pinRequest));
}

export function pinRequestFromJSON(
  jsonString: string,
): SafeParseResult<PinRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PinRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PinRequest' from JSON`,
  );
}
