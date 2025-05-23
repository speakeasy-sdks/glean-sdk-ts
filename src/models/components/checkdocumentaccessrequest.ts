/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Describes the request body of the /checkdocumentaccess API call
 */
export type CheckDocumentAccessRequest = {
  /**
   * Datasource of document to check access for.
   */
  datasource: string;
  /**
   * Object type of document to check access for.
   */
  objectType: string;
  /**
   * Glean Document ID to check access for.
   */
  docId: string;
  /**
   * Email of user to check access for.
   */
  userEmail: string;
};

/** @internal */
export const CheckDocumentAccessRequest$inboundSchema: z.ZodType<
  CheckDocumentAccessRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  datasource: z.string(),
  objectType: z.string(),
  docId: z.string(),
  userEmail: z.string(),
});

/** @internal */
export type CheckDocumentAccessRequest$Outbound = {
  datasource: string;
  objectType: string;
  docId: string;
  userEmail: string;
};

/** @internal */
export const CheckDocumentAccessRequest$outboundSchema: z.ZodType<
  CheckDocumentAccessRequest$Outbound,
  z.ZodTypeDef,
  CheckDocumentAccessRequest
> = z.object({
  datasource: z.string(),
  objectType: z.string(),
  docId: z.string(),
  userEmail: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckDocumentAccessRequest$ {
  /** @deprecated use `CheckDocumentAccessRequest$inboundSchema` instead. */
  export const inboundSchema = CheckDocumentAccessRequest$inboundSchema;
  /** @deprecated use `CheckDocumentAccessRequest$outboundSchema` instead. */
  export const outboundSchema = CheckDocumentAccessRequest$outboundSchema;
  /** @deprecated use `CheckDocumentAccessRequest$Outbound` instead. */
  export type Outbound = CheckDocumentAccessRequest$Outbound;
}

export function checkDocumentAccessRequestToJSON(
  checkDocumentAccessRequest: CheckDocumentAccessRequest,
): string {
  return JSON.stringify(
    CheckDocumentAccessRequest$outboundSchema.parse(checkDocumentAccessRequest),
  );
}

export function checkDocumentAccessRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckDocumentAccessRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckDocumentAccessRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckDocumentAccessRequest' from JSON`,
  );
}
