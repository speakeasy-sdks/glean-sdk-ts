/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { indexingTroubleshootingDocumentsStatus } from "../funcs/indexingTroubleshootingDocumentsStatus.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndexingTroubleshootingDocumentsStatusMutationVariables = {
  request: components.GetDocumentStatusRequest;
  options?: RequestOptions;
};

export type IndexingTroubleshootingDocumentsStatusMutationData =
  components.GetDocumentStatusResponse;

/**
 * Get document upload and indexing status
 *
 * @remarks
 * Intended for debugging/validation. Fetches the current upload and indexing status of documents.
 *
 * Tip: Use [/debug/{datasource}/document](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/#debug-datasource-document) for richer information.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export function useIndexingTroubleshootingDocumentsStatusMutation(
  options?: MutationHookOptions<
    IndexingTroubleshootingDocumentsStatusMutationData,
    Error,
    IndexingTroubleshootingDocumentsStatusMutationVariables
  >,
): UseMutationResult<
  IndexingTroubleshootingDocumentsStatusMutationData,
  Error,
  IndexingTroubleshootingDocumentsStatusMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildIndexingTroubleshootingDocumentsStatusMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndexingTroubleshootingDocumentsStatus(): MutationKey {
  return ["@gleanwork/api-client", "documents", "status"];
}

export function buildIndexingTroubleshootingDocumentsStatusMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndexingTroubleshootingDocumentsStatusMutationVariables,
  ) => Promise<IndexingTroubleshootingDocumentsStatusMutationData>;
} {
  return {
    mutationKey: mutationKeyIndexingTroubleshootingDocumentsStatus(),
    mutationFn: function indexingTroubleshootingDocumentsStatusMutationFn({
      request,
      options,
    }): Promise<IndexingTroubleshootingDocumentsStatusMutationData> {
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
      return unwrapAsync(indexingTroubleshootingDocumentsStatus(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
