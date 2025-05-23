/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { clientSummarizeGenerate } from "../funcs/clientSummarizeGenerate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ClientSummarizeGenerateMutationVariables = {
  request: components.SummarizeRequest;
  options?: RequestOptions;
};

export type ClientSummarizeGenerateMutationData = components.SummarizeResponse;

/**
 * Summarize documents
 *
 * @remarks
 * Generate an AI summary of the requested documents.
 */
export function useClientSummarizeGenerateMutation(
  options?: MutationHookOptions<
    ClientSummarizeGenerateMutationData,
    Error,
    ClientSummarizeGenerateMutationVariables
  >,
): UseMutationResult<
  ClientSummarizeGenerateMutationData,
  Error,
  ClientSummarizeGenerateMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildClientSummarizeGenerateMutation(client, options),
    ...options,
  });
}

export function mutationKeyClientSummarizeGenerate(): MutationKey {
  return ["@gleanwork/api-client", "summarize", "generate"];
}

export function buildClientSummarizeGenerateMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ClientSummarizeGenerateMutationVariables,
  ) => Promise<ClientSummarizeGenerateMutationData>;
} {
  return {
    mutationKey: mutationKeyClientSummarizeGenerate(),
    mutationFn: function clientSummarizeGenerateMutationFn({
      request,
      options,
    }): Promise<ClientSummarizeGenerateMutationData> {
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
      return unwrapAsync(clientSummarizeGenerate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
