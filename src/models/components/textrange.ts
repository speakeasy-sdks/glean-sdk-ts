/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Document,
  Document$inboundSchema,
  Document$Outbound,
  Document$outboundSchema,
} from "./document.js";

export const TextRangeType = {
  Bold: "BOLD",
  Citation: "CITATION",
  Link: "LINK",
} as const;
export type TextRangeType = ClosedEnum<typeof TextRangeType>;

/**
 * A subsection of a given string to which some special formatting should be applied.
 */
export type TextRange = {
  /**
   * The inclusive start index of the range.
   */
  startIndex: number;
  /**
   * The exclusive end index of the range.
   */
  endIndex?: number | undefined;
  type?: TextRangeType | undefined;
  /**
   * The URL associated with the range, if applicable. For example, the linked URL for a LINK range.
   */
  url?: string | undefined;
  document?: Document | undefined;
};

/** @internal */
export const TextRangeType$inboundSchema: z.ZodNativeEnum<
  typeof TextRangeType
> = z.nativeEnum(TextRangeType);

/** @internal */
export const TextRangeType$outboundSchema: z.ZodNativeEnum<
  typeof TextRangeType
> = TextRangeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextRangeType$ {
  /** @deprecated use `TextRangeType$inboundSchema` instead. */
  export const inboundSchema = TextRangeType$inboundSchema;
  /** @deprecated use `TextRangeType$outboundSchema` instead. */
  export const outboundSchema = TextRangeType$outboundSchema;
}

/** @internal */
export const TextRange$inboundSchema: z.ZodType<
  TextRange,
  z.ZodTypeDef,
  unknown
> = z.object({
  startIndex: z.number().int(),
  endIndex: z.number().int().optional(),
  type: TextRangeType$inboundSchema.optional(),
  url: z.string().optional(),
  document: z.lazy(() => Document$inboundSchema).optional(),
});

/** @internal */
export type TextRange$Outbound = {
  startIndex: number;
  endIndex?: number | undefined;
  type?: string | undefined;
  url?: string | undefined;
  document?: Document$Outbound | undefined;
};

/** @internal */
export const TextRange$outboundSchema: z.ZodType<
  TextRange$Outbound,
  z.ZodTypeDef,
  TextRange
> = z.object({
  startIndex: z.number().int(),
  endIndex: z.number().int().optional(),
  type: TextRangeType$outboundSchema.optional(),
  url: z.string().optional(),
  document: z.lazy(() => Document$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextRange$ {
  /** @deprecated use `TextRange$inboundSchema` instead. */
  export const inboundSchema = TextRange$inboundSchema;
  /** @deprecated use `TextRange$outboundSchema` instead. */
  export const outboundSchema = TextRange$outboundSchema;
  /** @deprecated use `TextRange$Outbound` instead. */
  export type Outbound = TextRange$Outbound;
}

export function textRangeToJSON(textRange: TextRange): string {
  return JSON.stringify(TextRange$outboundSchema.parse(textRange));
}

export function textRangeFromJSON(
  jsonString: string,
): SafeParseResult<TextRange, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TextRange$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TextRange' from JSON`,
  );
}
