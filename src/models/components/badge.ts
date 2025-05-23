/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IconConfig,
  IconConfig$inboundSchema,
  IconConfig$Outbound,
  IconConfig$outboundSchema,
} from "./iconconfig.js";

/**
 * Displays a user's accomplishment or milestone
 */
export type Badge = {
  /**
   * An auto generated unique identifier.
   */
  key?: string | undefined;
  /**
   * The badge name displayed to users
   */
  displayName?: string | undefined;
  /**
   * Defines how to render an icon
   */
  iconConfig?: IconConfig | undefined;
  /**
   * The badge should be shown on the PersonAttribution
   */
  pinned?: boolean | undefined;
};

/** @internal */
export const Badge$inboundSchema: z.ZodType<Badge, z.ZodTypeDef, unknown> = z
  .object({
    key: z.string().optional(),
    displayName: z.string().optional(),
    iconConfig: IconConfig$inboundSchema.optional(),
    pinned: z.boolean().optional(),
  });

/** @internal */
export type Badge$Outbound = {
  key?: string | undefined;
  displayName?: string | undefined;
  iconConfig?: IconConfig$Outbound | undefined;
  pinned?: boolean | undefined;
};

/** @internal */
export const Badge$outboundSchema: z.ZodType<
  Badge$Outbound,
  z.ZodTypeDef,
  Badge
> = z.object({
  key: z.string().optional(),
  displayName: z.string().optional(),
  iconConfig: IconConfig$outboundSchema.optional(),
  pinned: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Badge$ {
  /** @deprecated use `Badge$inboundSchema` instead. */
  export const inboundSchema = Badge$inboundSchema;
  /** @deprecated use `Badge$outboundSchema` instead. */
  export const outboundSchema = Badge$outboundSchema;
  /** @deprecated use `Badge$Outbound` instead. */
  export type Outbound = Badge$Outbound;
}

export function badgeToJSON(badge: Badge): string {
  return JSON.stringify(Badge$outboundSchema.parse(badge));
}

export function badgeFromJSON(
  jsonString: string,
): SafeParseResult<Badge, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Badge$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Badge' from JSON`,
  );
}
