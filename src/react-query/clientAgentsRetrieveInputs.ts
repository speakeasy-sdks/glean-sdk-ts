/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientAgentsRetrieveInputs } from "../funcs/clientAgentsRetrieveInputs.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ClientAgentsRetrieveInputsMutationVariables = {
  getAgentInputsRequest: components.GetAgentInputsRequest;
  timezoneOffset?: number | undefined;
  options?: RequestOptions;
};

export type ClientAgentsRetrieveInputsMutationData =
  components.GetAgentInputsResponse;

/**
 * Gets the inputs to an agent.
 *
 * @remarks
 * Get the inputs to an agent with a given id.
 */
export function useClientAgentsRetrieveInputsMutation(
  options?: MutationHookOptions<
    ClientAgentsRetrieveInputsMutationData,
    Error,
    ClientAgentsRetrieveInputsMutationVariables
  >,
): UseMutationResult<
  ClientAgentsRetrieveInputsMutationData,
  Error,
  ClientAgentsRetrieveInputsMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildClientAgentsRetrieveInputsMutation(client, options),
    ...options,
  });
}

export function mutationKeyClientAgentsRetrieveInputs(): MutationKey {
  return ["@gleanwork/api-client", "agents", "retrieveInputs"];
}

export function buildClientAgentsRetrieveInputsMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ClientAgentsRetrieveInputsMutationVariables,
  ) => Promise<ClientAgentsRetrieveInputsMutationData>;
} {
  return {
    mutationKey: mutationKeyClientAgentsRetrieveInputs(),
    mutationFn: function clientAgentsRetrieveInputsMutationFn({
      getAgentInputsRequest,
      timezoneOffset,
      options,
    }): Promise<ClientAgentsRetrieveInputsMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(clientAgentsRetrieveInputs(
        client$,
        getAgentInputsRequest,
        timezoneOffset,
        mergedOptions,
      ));
    },
  };
}
