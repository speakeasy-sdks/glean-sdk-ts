/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Summary,
  Summary$inboundSchema,
  Summary$Outbound,
  Summary$outboundSchema,
} from "./summary.js";

export type ErrorT = {
  message?: string | undefined;
};

export type SummarizeResponse = {
  error?: ErrorT | undefined;
  summary?: Summary | undefined;
  /**
   * An opaque token that represents this summary in this particular query. To be used for /feedback reporting.
   */
  trackingToken?: string | undefined;
};

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    message: z.string().optional(),
  });

/** @internal */
export type ErrorT$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const SummarizeResponse$inboundSchema: z.ZodType<
  SummarizeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => ErrorT$inboundSchema).optional(),
  summary: Summary$inboundSchema.optional(),
  trackingToken: z.string().optional(),
});

/** @internal */
export type SummarizeResponse$Outbound = {
  error?: ErrorT$Outbound | undefined;
  summary?: Summary$Outbound | undefined;
  trackingToken?: string | undefined;
};

/** @internal */
export const SummarizeResponse$outboundSchema: z.ZodType<
  SummarizeResponse$Outbound,
  z.ZodTypeDef,
  SummarizeResponse
> = z.object({
  error: z.lazy(() => ErrorT$outboundSchema).optional(),
  summary: Summary$outboundSchema.optional(),
  trackingToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SummarizeResponse$ {
  /** @deprecated use `SummarizeResponse$inboundSchema` instead. */
  export const inboundSchema = SummarizeResponse$inboundSchema;
  /** @deprecated use `SummarizeResponse$outboundSchema` instead. */
  export const outboundSchema = SummarizeResponse$outboundSchema;
  /** @deprecated use `SummarizeResponse$Outbound` instead. */
  export type Outbound = SummarizeResponse$Outbound;
}

export function summarizeResponseToJSON(
  summarizeResponse: SummarizeResponse,
): string {
  return JSON.stringify(
    SummarizeResponse$outboundSchema.parse(summarizeResponse),
  );
}

export function summarizeResponseFromJSON(
  jsonString: string,
): SafeParseResult<SummarizeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SummarizeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SummarizeResponse' from JSON`,
  );
}
