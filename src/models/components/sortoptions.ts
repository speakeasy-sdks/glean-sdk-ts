/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const OrderBy = {
  Asc: "ASC",
  Desc: "DESC",
} as const;
export type OrderBy = ClosedEnum<typeof OrderBy>;

export type SortOptions = {
  orderBy?: OrderBy | undefined;
  sortBy?: string | undefined;
};

/** @internal */
export const OrderBy$inboundSchema: z.ZodNativeEnum<typeof OrderBy> = z
  .nativeEnum(OrderBy);

/** @internal */
export const OrderBy$outboundSchema: z.ZodNativeEnum<typeof OrderBy> =
  OrderBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderBy$ {
  /** @deprecated use `OrderBy$inboundSchema` instead. */
  export const inboundSchema = OrderBy$inboundSchema;
  /** @deprecated use `OrderBy$outboundSchema` instead. */
  export const outboundSchema = OrderBy$outboundSchema;
}

/** @internal */
export const SortOptions$inboundSchema: z.ZodType<
  SortOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  orderBy: OrderBy$inboundSchema.optional(),
  sortBy: z.string().optional(),
});

/** @internal */
export type SortOptions$Outbound = {
  orderBy?: string | undefined;
  sortBy?: string | undefined;
};

/** @internal */
export const SortOptions$outboundSchema: z.ZodType<
  SortOptions$Outbound,
  z.ZodTypeDef,
  SortOptions
> = z.object({
  orderBy: OrderBy$outboundSchema.optional(),
  sortBy: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SortOptions$ {
  /** @deprecated use `SortOptions$inboundSchema` instead. */
  export const inboundSchema = SortOptions$inboundSchema;
  /** @deprecated use `SortOptions$outboundSchema` instead. */
  export const outboundSchema = SortOptions$outboundSchema;
  /** @deprecated use `SortOptions$Outbound` instead. */
  export type Outbound = SortOptions$Outbound;
}

export function sortOptionsToJSON(sortOptions: SortOptions): string {
  return JSON.stringify(SortOptions$outboundSchema.parse(sortOptions));
}

export function sortOptionsFromJSON(
  jsonString: string,
): SafeParseResult<SortOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SortOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SortOptions' from JSON`,
  );
}
