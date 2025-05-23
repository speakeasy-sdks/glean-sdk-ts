/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DebugDocumentRequest,
  DebugDocumentRequest$inboundSchema,
  DebugDocumentRequest$Outbound,
  DebugDocumentRequest$outboundSchema,
} from "./debugdocumentrequest.js";

/**
 * Describes the request body of the /debug/{datasource}/documents API call.
 */
export type DebugDocumentsRequest = {
  /**
   * Documents to fetch debug information for
   */
  debugDocuments: Array<DebugDocumentRequest>;
};

/** @internal */
export const DebugDocumentsRequest$inboundSchema: z.ZodType<
  DebugDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  debugDocuments: z.array(DebugDocumentRequest$inboundSchema),
});

/** @internal */
export type DebugDocumentsRequest$Outbound = {
  debugDocuments: Array<DebugDocumentRequest$Outbound>;
};

/** @internal */
export const DebugDocumentsRequest$outboundSchema: z.ZodType<
  DebugDocumentsRequest$Outbound,
  z.ZodTypeDef,
  DebugDocumentsRequest
> = z.object({
  debugDocuments: z.array(DebugDocumentRequest$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DebugDocumentsRequest$ {
  /** @deprecated use `DebugDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = DebugDocumentsRequest$inboundSchema;
  /** @deprecated use `DebugDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema = DebugDocumentsRequest$outboundSchema;
  /** @deprecated use `DebugDocumentsRequest$Outbound` instead. */
  export type Outbound = DebugDocumentsRequest$Outbound;
}

export function debugDocumentsRequestToJSON(
  debugDocumentsRequest: DebugDocumentsRequest,
): string {
  return JSON.stringify(
    DebugDocumentsRequest$outboundSchema.parse(debugDocumentsRequest),
  );
}

export function debugDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<DebugDocumentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DebugDocumentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DebugDocumentsRequest' from JSON`,
  );
}
