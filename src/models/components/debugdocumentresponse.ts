/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DocumentPermissionsDefinition,
  DocumentPermissionsDefinition$inboundSchema,
  DocumentPermissionsDefinition$Outbound,
  DocumentPermissionsDefinition$outboundSchema,
} from "./documentpermissionsdefinition.js";
import {
  DocumentStatusResponse,
  DocumentStatusResponse$inboundSchema,
  DocumentStatusResponse$Outbound,
  DocumentStatusResponse$outboundSchema,
} from "./documentstatusresponse.js";

/**
 * Describes the response body of the /debug/{datasource}/document API call
 */
export type DebugDocumentResponse = {
  /**
   * Describes the document status response body
   */
  status?: DocumentStatusResponse | undefined;
  /**
   * describes the access control details of the document
   */
  uploadedPermissions?: DocumentPermissionsDefinition | undefined;
};

/** @internal */
export const DebugDocumentResponse$inboundSchema: z.ZodType<
  DebugDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: DocumentStatusResponse$inboundSchema.optional(),
  uploadedPermissions: DocumentPermissionsDefinition$inboundSchema.optional(),
});

/** @internal */
export type DebugDocumentResponse$Outbound = {
  status?: DocumentStatusResponse$Outbound | undefined;
  uploadedPermissions?: DocumentPermissionsDefinition$Outbound | undefined;
};

/** @internal */
export const DebugDocumentResponse$outboundSchema: z.ZodType<
  DebugDocumentResponse$Outbound,
  z.ZodTypeDef,
  DebugDocumentResponse
> = z.object({
  status: DocumentStatusResponse$outboundSchema.optional(),
  uploadedPermissions: DocumentPermissionsDefinition$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DebugDocumentResponse$ {
  /** @deprecated use `DebugDocumentResponse$inboundSchema` instead. */
  export const inboundSchema = DebugDocumentResponse$inboundSchema;
  /** @deprecated use `DebugDocumentResponse$outboundSchema` instead. */
  export const outboundSchema = DebugDocumentResponse$outboundSchema;
  /** @deprecated use `DebugDocumentResponse$Outbound` instead. */
  export type Outbound = DebugDocumentResponse$Outbound;
}

export function debugDocumentResponseToJSON(
  debugDocumentResponse: DebugDocumentResponse,
): string {
  return JSON.stringify(
    DebugDocumentResponse$outboundSchema.parse(debugDocumentResponse),
  );
}

export function debugDocumentResponseFromJSON(
  jsonString: string,
): SafeParseResult<DebugDocumentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DebugDocumentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DebugDocumentResponse' from JSON`,
  );
}
