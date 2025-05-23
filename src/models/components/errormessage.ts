/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ErrorMessage = {
  /**
   * The datasource this message relates to.
   */
  source?: string | undefined;
  errorMessage?: string | undefined;
};

/** @internal */
export const ErrorMessage$inboundSchema: z.ZodType<
  ErrorMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  source: z.string().optional(),
  errorMessage: z.string().optional(),
});

/** @internal */
export type ErrorMessage$Outbound = {
  source?: string | undefined;
  errorMessage?: string | undefined;
};

/** @internal */
export const ErrorMessage$outboundSchema: z.ZodType<
  ErrorMessage$Outbound,
  z.ZodTypeDef,
  ErrorMessage
> = z.object({
  source: z.string().optional(),
  errorMessage: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorMessage$ {
  /** @deprecated use `ErrorMessage$inboundSchema` instead. */
  export const inboundSchema = ErrorMessage$inboundSchema;
  /** @deprecated use `ErrorMessage$outboundSchema` instead. */
  export const outboundSchema = ErrorMessage$outboundSchema;
  /** @deprecated use `ErrorMessage$Outbound` instead. */
  export type Outbound = ErrorMessage$Outbound;
}

export function errorMessageToJSON(errorMessage: ErrorMessage): string {
  return JSON.stringify(ErrorMessage$outboundSchema.parse(errorMessage));
}

export function errorMessageFromJSON(
  jsonString: string,
): SafeParseResult<ErrorMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorMessage' from JSON`,
  );
}
