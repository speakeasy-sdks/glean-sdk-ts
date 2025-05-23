/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WorkflowInputField,
  WorkflowInputField$inboundSchema,
  WorkflowInputField$Outbound,
  WorkflowInputField$outboundSchema,
} from "./workflowinputfield.js";

export type GetAgentInputsResponse = {
  /**
   * The inputs to the agent.
   */
  inputs?: Array<WorkflowInputField> | undefined;
};

/** @internal */
export const GetAgentInputsResponse$inboundSchema: z.ZodType<
  GetAgentInputsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  inputs: z.array(WorkflowInputField$inboundSchema).optional(),
});

/** @internal */
export type GetAgentInputsResponse$Outbound = {
  inputs?: Array<WorkflowInputField$Outbound> | undefined;
};

/** @internal */
export const GetAgentInputsResponse$outboundSchema: z.ZodType<
  GetAgentInputsResponse$Outbound,
  z.ZodTypeDef,
  GetAgentInputsResponse
> = z.object({
  inputs: z.array(WorkflowInputField$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAgentInputsResponse$ {
  /** @deprecated use `GetAgentInputsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAgentInputsResponse$inboundSchema;
  /** @deprecated use `GetAgentInputsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAgentInputsResponse$outboundSchema;
  /** @deprecated use `GetAgentInputsResponse$Outbound` instead. */
  export type Outbound = GetAgentInputsResponse$Outbound;
}

export function getAgentInputsResponseToJSON(
  getAgentInputsResponse: GetAgentInputsResponse,
): string {
  return JSON.stringify(
    GetAgentInputsResponse$outboundSchema.parse(getAgentInputsResponse),
  );
}

export function getAgentInputsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAgentInputsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAgentInputsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAgentInputsResponse' from JSON`,
  );
}
