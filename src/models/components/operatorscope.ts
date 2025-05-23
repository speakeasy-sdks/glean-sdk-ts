/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OperatorScope = {
  datasource?: string | undefined;
  docType?: string | undefined;
};

/** @internal */
export const OperatorScope$inboundSchema: z.ZodType<
  OperatorScope,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasource: z.string().optional(),
  docType: z.string().optional(),
});

/** @internal */
export type OperatorScope$Outbound = {
  datasource?: string | undefined;
  docType?: string | undefined;
};

/** @internal */
export const OperatorScope$outboundSchema: z.ZodType<
  OperatorScope$Outbound,
  z.ZodTypeDef,
  OperatorScope
> = z.object({
  datasource: z.string().optional(),
  docType: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OperatorScope$ {
  /** @deprecated use `OperatorScope$inboundSchema` instead. */
  export const inboundSchema = OperatorScope$inboundSchema;
  /** @deprecated use `OperatorScope$outboundSchema` instead. */
  export const outboundSchema = OperatorScope$outboundSchema;
  /** @deprecated use `OperatorScope$Outbound` instead. */
  export type Outbound = OperatorScope$Outbound;
}

export function operatorScopeToJSON(operatorScope: OperatorScope): string {
  return JSON.stringify(OperatorScope$outboundSchema.parse(operatorScope));
}

export function operatorScopeFromJSON(
  jsonString: string,
): SafeParseResult<OperatorScope, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OperatorScope$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OperatorScope' from JSON`,
  );
}
