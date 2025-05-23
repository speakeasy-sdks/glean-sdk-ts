/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FacetResult,
  FacetResult$inboundSchema,
  FacetResult$Outbound,
  FacetResult$outboundSchema,
} from "./facetresult.js";
import {
  Shortcut,
  Shortcut$inboundSchema,
  Shortcut$Outbound,
  Shortcut$outboundSchema,
} from "./shortcut.js";
import {
  ShortcutsPaginationMetadata,
  ShortcutsPaginationMetadata$inboundSchema,
  ShortcutsPaginationMetadata$Outbound,
  ShortcutsPaginationMetadata$outboundSchema,
} from "./shortcutspaginationmetadata.js";

export type ListShortcutsPaginatedResponse = {
  /**
   * List of all shortcuts accessible to the user
   */
  shortcuts: Array<Shortcut>;
  facetResults?: Array<FacetResult> | undefined;
  meta: ShortcutsPaginationMetadata;
};

/** @internal */
export const ListShortcutsPaginatedResponse$inboundSchema: z.ZodType<
  ListShortcutsPaginatedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  shortcuts: z.array(Shortcut$inboundSchema),
  facetResults: z.array(FacetResult$inboundSchema).optional(),
  meta: ShortcutsPaginationMetadata$inboundSchema,
});

/** @internal */
export type ListShortcutsPaginatedResponse$Outbound = {
  shortcuts: Array<Shortcut$Outbound>;
  facetResults?: Array<FacetResult$Outbound> | undefined;
  meta: ShortcutsPaginationMetadata$Outbound;
};

/** @internal */
export const ListShortcutsPaginatedResponse$outboundSchema: z.ZodType<
  ListShortcutsPaginatedResponse$Outbound,
  z.ZodTypeDef,
  ListShortcutsPaginatedResponse
> = z.object({
  shortcuts: z.array(Shortcut$outboundSchema),
  facetResults: z.array(FacetResult$outboundSchema).optional(),
  meta: ShortcutsPaginationMetadata$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListShortcutsPaginatedResponse$ {
  /** @deprecated use `ListShortcutsPaginatedResponse$inboundSchema` instead. */
  export const inboundSchema = ListShortcutsPaginatedResponse$inboundSchema;
  /** @deprecated use `ListShortcutsPaginatedResponse$outboundSchema` instead. */
  export const outboundSchema = ListShortcutsPaginatedResponse$outboundSchema;
  /** @deprecated use `ListShortcutsPaginatedResponse$Outbound` instead. */
  export type Outbound = ListShortcutsPaginatedResponse$Outbound;
}

export function listShortcutsPaginatedResponseToJSON(
  listShortcutsPaginatedResponse: ListShortcutsPaginatedResponse,
): string {
  return JSON.stringify(
    ListShortcutsPaginatedResponse$outboundSchema.parse(
      listShortcutsPaginatedResponse,
    ),
  );
}

export function listShortcutsPaginatedResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListShortcutsPaginatedResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListShortcutsPaginatedResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListShortcutsPaginatedResponse' from JSON`,
  );
}
