/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DocumentSpecUnion,
  DocumentSpecUnion$inboundSchema,
  DocumentSpecUnion$Outbound,
  DocumentSpecUnion$outboundSchema,
} from "./documentspecunion.js";

export const GetDocumentsRequestIncludeField = {
  LastViewedAt: "LAST_VIEWED_AT",
  VisitorsCount: "VISITORS_COUNT",
  RecentShares: "RECENT_SHARES",
  DocumentContent: "DOCUMENT_CONTENT",
} as const;
export type GetDocumentsRequestIncludeField = ClosedEnum<
  typeof GetDocumentsRequestIncludeField
>;

export type GetDocumentsRequest = {
  /**
   * The specification for the documents to be retrieved.
   */
  documentSpecs: Array<DocumentSpecUnion>;
  /**
   * List of Document fields to return (that aren't returned by default)
   */
  includeFields?: Array<GetDocumentsRequestIncludeField> | undefined;
};

/** @internal */
export const GetDocumentsRequestIncludeField$inboundSchema: z.ZodNativeEnum<
  typeof GetDocumentsRequestIncludeField
> = z.nativeEnum(GetDocumentsRequestIncludeField);

/** @internal */
export const GetDocumentsRequestIncludeField$outboundSchema: z.ZodNativeEnum<
  typeof GetDocumentsRequestIncludeField
> = GetDocumentsRequestIncludeField$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentsRequestIncludeField$ {
  /** @deprecated use `GetDocumentsRequestIncludeField$inboundSchema` instead. */
  export const inboundSchema = GetDocumentsRequestIncludeField$inboundSchema;
  /** @deprecated use `GetDocumentsRequestIncludeField$outboundSchema` instead. */
  export const outboundSchema = GetDocumentsRequestIncludeField$outboundSchema;
}

/** @internal */
export const GetDocumentsRequest$inboundSchema: z.ZodType<
  GetDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentSpecs: z.array(DocumentSpecUnion$inboundSchema),
  includeFields: z.array(GetDocumentsRequestIncludeField$inboundSchema)
    .optional(),
});

/** @internal */
export type GetDocumentsRequest$Outbound = {
  documentSpecs: Array<DocumentSpecUnion$Outbound>;
  includeFields?: Array<string> | undefined;
};

/** @internal */
export const GetDocumentsRequest$outboundSchema: z.ZodType<
  GetDocumentsRequest$Outbound,
  z.ZodTypeDef,
  GetDocumentsRequest
> = z.object({
  documentSpecs: z.array(DocumentSpecUnion$outboundSchema),
  includeFields: z.array(GetDocumentsRequestIncludeField$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentsRequest$ {
  /** @deprecated use `GetDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = GetDocumentsRequest$inboundSchema;
  /** @deprecated use `GetDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema = GetDocumentsRequest$outboundSchema;
  /** @deprecated use `GetDocumentsRequest$Outbound` instead. */
  export type Outbound = GetDocumentsRequest$Outbound;
}

export function getDocumentsRequestToJSON(
  getDocumentsRequest: GetDocumentsRequest,
): string {
  return JSON.stringify(
    GetDocumentsRequest$outboundSchema.parse(getDocumentsRequest),
  );
}

export function getDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentsRequest' from JSON`,
  );
}
