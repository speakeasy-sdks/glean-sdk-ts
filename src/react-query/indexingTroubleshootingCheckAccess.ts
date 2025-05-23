/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { indexingTroubleshootingCheckAccess } from "../funcs/indexingTroubleshootingCheckAccess.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndexingTroubleshootingCheckAccessMutationVariables = {
  request: components.CheckDocumentAccessRequest;
  options?: RequestOptions;
};

export type IndexingTroubleshootingCheckAccessMutationData =
  components.CheckDocumentAccessResponse;

/**
 * Check document access
 *
 * @remarks
 * Check if a given user has access to access a document in a custom datasource
 *
 * Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/) for more information.
 */
export function useIndexingTroubleshootingCheckAccessMutation(
  options?: MutationHookOptions<
    IndexingTroubleshootingCheckAccessMutationData,
    Error,
    IndexingTroubleshootingCheckAccessMutationVariables
  >,
): UseMutationResult<
  IndexingTroubleshootingCheckAccessMutationData,
  Error,
  IndexingTroubleshootingCheckAccessMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildIndexingTroubleshootingCheckAccessMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndexingTroubleshootingCheckAccess(): MutationKey {
  return ["@gleanwork/api-client", "troubleshooting", "checkAccess"];
}

export function buildIndexingTroubleshootingCheckAccessMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndexingTroubleshootingCheckAccessMutationVariables,
  ) => Promise<IndexingTroubleshootingCheckAccessMutationData>;
} {
  return {
    mutationKey: mutationKeyIndexingTroubleshootingCheckAccess(),
    mutationFn: function indexingTroubleshootingCheckAccessMutationFn({
      request,
      options,
    }): Promise<IndexingTroubleshootingCheckAccessMutationData> {
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
      return unwrapAsync(indexingTroubleshootingCheckAccess(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
