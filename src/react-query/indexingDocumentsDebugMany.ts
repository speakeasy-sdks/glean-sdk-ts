/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { indexingDocumentsDebugMany } from "../funcs/indexingDocumentsDebugMany.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndexingDocumentsDebugManyMutationVariables = {
  debugDocumentsRequest: components.DebugDocumentsRequest;
  datasource: string;
  options?: RequestOptions;
};

export type IndexingDocumentsDebugManyMutationData =
  components.DebugDocumentsResponse;

/**
 * Beta: Get information of a batch of documents
 *
 * @remarks
 * Gives various information that would help in debugging related to a batch of documents. Currently in beta, might undergo breaking changes without prior notice.
 *
 * Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/) for more information.
 */
export function useIndexingDocumentsDebugManyMutation(
  options?: MutationHookOptions<
    IndexingDocumentsDebugManyMutationData,
    Error,
    IndexingDocumentsDebugManyMutationVariables
  >,
): UseMutationResult<
  IndexingDocumentsDebugManyMutationData,
  Error,
  IndexingDocumentsDebugManyMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildIndexingDocumentsDebugManyMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndexingDocumentsDebugMany(): MutationKey {
  return ["@gleanwork/api-client", "documents", "debugMany"];
}

export function buildIndexingDocumentsDebugManyMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndexingDocumentsDebugManyMutationVariables,
  ) => Promise<IndexingDocumentsDebugManyMutationData>;
} {
  return {
    mutationKey: mutationKeyIndexingDocumentsDebugMany(),
    mutationFn: function indexingDocumentsDebugManyMutationFn({
      debugDocumentsRequest,
      datasource,
      options,
    }): Promise<IndexingDocumentsDebugManyMutationData> {
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
      return unwrapAsync(indexingDocumentsDebugMany(
        client$,
        debugDocumentsRequest,
        datasource,
        mergedOptions,
      ));
    },
  };
}
