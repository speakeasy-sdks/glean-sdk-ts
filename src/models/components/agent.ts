/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ObjectPermissions,
  ObjectPermissions$inboundSchema,
  ObjectPermissions$Outbound,
  ObjectPermissions$outboundSchema,
} from "./objectpermissions.js";
import {
  Person,
  Person$inboundSchema,
  Person$Outbound,
  Person$outboundSchema,
} from "./person.js";

export type Agent = {
  author?: Person | undefined;
  /**
   * Server Unix timestamp of the creation time.
   */
  createTimestamp?: number | undefined;
  /**
   * Server Unix timestamp of the last update time.
   */
  lastUpdateTimestamp?: number | undefined;
  lastUpdatedBy?: Person | undefined;
  /**
   * The ID of the agent.
   */
  id?: string | undefined;
  /**
   * The name of the agent.
   */
  name?: string | undefined;
  permissions?: ObjectPermissions | undefined;
};

/** @internal */
export const Agent$inboundSchema: z.ZodType<Agent, z.ZodTypeDef, unknown> = z
  .object({
    author: Person$inboundSchema.optional(),
    createTimestamp: z.number().int().optional(),
    lastUpdateTimestamp: z.number().int().optional(),
    lastUpdatedBy: Person$inboundSchema.optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    permissions: ObjectPermissions$inboundSchema.optional(),
  });

/** @internal */
export type Agent$Outbound = {
  author?: Person$Outbound | undefined;
  createTimestamp?: number | undefined;
  lastUpdateTimestamp?: number | undefined;
  lastUpdatedBy?: Person$Outbound | undefined;
  id?: string | undefined;
  name?: string | undefined;
  permissions?: ObjectPermissions$Outbound | undefined;
};

/** @internal */
export const Agent$outboundSchema: z.ZodType<
  Agent$Outbound,
  z.ZodTypeDef,
  Agent
> = z.object({
  author: Person$outboundSchema.optional(),
  createTimestamp: z.number().int().optional(),
  lastUpdateTimestamp: z.number().int().optional(),
  lastUpdatedBy: Person$outboundSchema.optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  permissions: ObjectPermissions$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Agent$ {
  /** @deprecated use `Agent$inboundSchema` instead. */
  export const inboundSchema = Agent$inboundSchema;
  /** @deprecated use `Agent$outboundSchema` instead. */
  export const outboundSchema = Agent$outboundSchema;
  /** @deprecated use `Agent$Outbound` instead. */
  export type Outbound = Agent$Outbound;
}

export function agentToJSON(agent: Agent): string {
  return JSON.stringify(Agent$outboundSchema.parse(agent));
}

export function agentFromJSON(
  jsonString: string,
): SafeParseResult<Agent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Agent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Agent' from JSON`,
  );
}
