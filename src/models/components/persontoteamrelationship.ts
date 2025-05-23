/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Person,
  Person$inboundSchema,
  Person$Outbound,
  Person$outboundSchema,
} from "./person.js";

/**
 * The team member's relationship to the team. This defaults to MEMBER if not set.
 */
export const PersonToTeamRelationshipRelationship = {
  Member: "MEMBER",
  Manager: "MANAGER",
  Lead: "LEAD",
  PointOfContact: "POINT_OF_CONTACT",
  Other: "OTHER",
} as const;
/**
 * The team member's relationship to the team. This defaults to MEMBER if not set.
 */
export type PersonToTeamRelationshipRelationship = ClosedEnum<
  typeof PersonToTeamRelationshipRelationship
>;

/**
 * Metadata about the relationship of a person to a team.
 */
export type PersonToTeamRelationship = {
  person: Person;
  /**
   * The team member's relationship to the team. This defaults to MEMBER if not set.
   */
  relationship?: PersonToTeamRelationshipRelationship | undefined;
  /**
   * Displayed name for the relationship if relationship is set to `OTHER`.
   */
  customRelationshipStr?: string | undefined;
  /**
   * The team member's start date
   */
  joinDate?: Date | undefined;
};

/** @internal */
export const PersonToTeamRelationshipRelationship$inboundSchema:
  z.ZodNativeEnum<typeof PersonToTeamRelationshipRelationship> = z.nativeEnum(
    PersonToTeamRelationshipRelationship,
  );

/** @internal */
export const PersonToTeamRelationshipRelationship$outboundSchema:
  z.ZodNativeEnum<typeof PersonToTeamRelationshipRelationship> =
    PersonToTeamRelationshipRelationship$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PersonToTeamRelationshipRelationship$ {
  /** @deprecated use `PersonToTeamRelationshipRelationship$inboundSchema` instead. */
  export const inboundSchema =
    PersonToTeamRelationshipRelationship$inboundSchema;
  /** @deprecated use `PersonToTeamRelationshipRelationship$outboundSchema` instead. */
  export const outboundSchema =
    PersonToTeamRelationshipRelationship$outboundSchema;
}

/** @internal */
export const PersonToTeamRelationship$inboundSchema: z.ZodType<
  PersonToTeamRelationship,
  z.ZodTypeDef,
  unknown
> = z.object({
  person: z.lazy(() => Person$inboundSchema),
  relationship: PersonToTeamRelationshipRelationship$inboundSchema.default(
    "MEMBER",
  ),
  customRelationshipStr: z.string().optional(),
  joinDate: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type PersonToTeamRelationship$Outbound = {
  person: Person$Outbound;
  relationship: string;
  customRelationshipStr?: string | undefined;
  joinDate?: string | undefined;
};

/** @internal */
export const PersonToTeamRelationship$outboundSchema: z.ZodType<
  PersonToTeamRelationship$Outbound,
  z.ZodTypeDef,
  PersonToTeamRelationship
> = z.object({
  person: z.lazy(() => Person$outboundSchema),
  relationship: PersonToTeamRelationshipRelationship$outboundSchema.default(
    "MEMBER",
  ),
  customRelationshipStr: z.string().optional(),
  joinDate: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PersonToTeamRelationship$ {
  /** @deprecated use `PersonToTeamRelationship$inboundSchema` instead. */
  export const inboundSchema = PersonToTeamRelationship$inboundSchema;
  /** @deprecated use `PersonToTeamRelationship$outboundSchema` instead. */
  export const outboundSchema = PersonToTeamRelationship$outboundSchema;
  /** @deprecated use `PersonToTeamRelationship$Outbound` instead. */
  export type Outbound = PersonToTeamRelationship$Outbound;
}

export function personToTeamRelationshipToJSON(
  personToTeamRelationship: PersonToTeamRelationship,
): string {
  return JSON.stringify(
    PersonToTeamRelationship$outboundSchema.parse(personToTeamRelationship),
  );
}

export function personToTeamRelationshipFromJSON(
  jsonString: string,
): SafeParseResult<PersonToTeamRelationship, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PersonToTeamRelationship$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PersonToTeamRelationship' from JSON`,
  );
}
