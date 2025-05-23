/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DatasourceUserDefinition,
  DatasourceUserDefinition$inboundSchema,
  DatasourceUserDefinition$Outbound,
  DatasourceUserDefinition$outboundSchema,
} from "./datasourceuserdefinition.js";

/**
 * Describes the request body of the /indexuser API call
 */
export type IndexUserRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version checks are done.
   */
  version?: number | undefined;
  /**
   * The datasource for which the user is added
   */
  datasource: string;
  /**
   * describes a user in the datasource
   */
  user: DatasourceUserDefinition;
};

/** @internal */
export const IndexUserRequest$inboundSchema: z.ZodType<
  IndexUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  version: z.number().int().optional(),
  datasource: z.string(),
  user: DatasourceUserDefinition$inboundSchema,
});

/** @internal */
export type IndexUserRequest$Outbound = {
  version?: number | undefined;
  datasource: string;
  user: DatasourceUserDefinition$Outbound;
};

/** @internal */
export const IndexUserRequest$outboundSchema: z.ZodType<
  IndexUserRequest$Outbound,
  z.ZodTypeDef,
  IndexUserRequest
> = z.object({
  version: z.number().int().optional(),
  datasource: z.string(),
  user: DatasourceUserDefinition$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IndexUserRequest$ {
  /** @deprecated use `IndexUserRequest$inboundSchema` instead. */
  export const inboundSchema = IndexUserRequest$inboundSchema;
  /** @deprecated use `IndexUserRequest$outboundSchema` instead. */
  export const outboundSchema = IndexUserRequest$outboundSchema;
  /** @deprecated use `IndexUserRequest$Outbound` instead. */
  export type Outbound = IndexUserRequest$Outbound;
}

export function indexUserRequestToJSON(
  indexUserRequest: IndexUserRequest,
): string {
  return JSON.stringify(
    IndexUserRequest$outboundSchema.parse(indexUserRequest),
  );
}

export function indexUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<IndexUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IndexUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IndexUserRequest' from JSON`,
  );
}
