/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCollectionRequest = {
  /**
   * The ID of the Collection to be retrieved.
   */
  id: number;
  /**
   * Whether or not to include the Collection Items in this Collection. Only request if absolutely required, as this is expensive.
   */
  withItems?: boolean | undefined;
  /**
   * Whether or not to include the top level Collection in this Collection's hierarchy.
   */
  withHierarchy?: boolean | undefined;
  /**
   * The datasource allowed in the Collection returned.
   */
  allowedDatasource?: string | undefined;
};

/** @internal */
export const GetCollectionRequest$inboundSchema: z.ZodType<
  GetCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  withItems: z.boolean().optional(),
  withHierarchy: z.boolean().optional(),
  allowedDatasource: z.string().optional(),
});

/** @internal */
export type GetCollectionRequest$Outbound = {
  id: number;
  withItems?: boolean | undefined;
  withHierarchy?: boolean | undefined;
  allowedDatasource?: string | undefined;
};

/** @internal */
export const GetCollectionRequest$outboundSchema: z.ZodType<
  GetCollectionRequest$Outbound,
  z.ZodTypeDef,
  GetCollectionRequest
> = z.object({
  id: z.number().int(),
  withItems: z.boolean().optional(),
  withHierarchy: z.boolean().optional(),
  allowedDatasource: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCollectionRequest$ {
  /** @deprecated use `GetCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = GetCollectionRequest$inboundSchema;
  /** @deprecated use `GetCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = GetCollectionRequest$outboundSchema;
  /** @deprecated use `GetCollectionRequest$Outbound` instead. */
  export type Outbound = GetCollectionRequest$Outbound;
}

export function getCollectionRequestToJSON(
  getCollectionRequest: GetCollectionRequest,
): string {
  return JSON.stringify(
    GetCollectionRequest$outboundSchema.parse(getCollectionRequest),
  );
}

export function getCollectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCollectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCollectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCollectionRequest' from JSON`,
  );
}
