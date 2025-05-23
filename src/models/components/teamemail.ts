/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Information about a team's email
 */
export type TeamEmail = {
  /**
   * An email address
   */
  email: string;
  /**
   * An enum of `PRIMARY`, `SECONDARY`, `ONCALL`, `OTHER`
   */
  type?: string | undefined;
};

/** @internal */
export const TeamEmail$inboundSchema: z.ZodType<
  TeamEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  type: z.string().default("OTHER"),
});

/** @internal */
export type TeamEmail$Outbound = {
  email: string;
  type: string;
};

/** @internal */
export const TeamEmail$outboundSchema: z.ZodType<
  TeamEmail$Outbound,
  z.ZodTypeDef,
  TeamEmail
> = z.object({
  email: z.string(),
  type: z.string().default("OTHER"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamEmail$ {
  /** @deprecated use `TeamEmail$inboundSchema` instead. */
  export const inboundSchema = TeamEmail$inboundSchema;
  /** @deprecated use `TeamEmail$outboundSchema` instead. */
  export const outboundSchema = TeamEmail$outboundSchema;
  /** @deprecated use `TeamEmail$Outbound` instead. */
  export type Outbound = TeamEmail$Outbound;
}

export function teamEmailToJSON(teamEmail: TeamEmail): string {
  return JSON.stringify(TeamEmail$outboundSchema.parse(teamEmail));
}

export function teamEmailFromJSON(
  jsonString: string,
): SafeParseResult<TeamEmail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TeamEmail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TeamEmail' from JSON`,
  );
}
