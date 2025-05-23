/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GleanCore } from "../core.js";
import { indexingPermissionsIndexUser } from "../funcs/indexingPermissionsIndexUser.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGleanContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type IndexingPermissionsIndexUserMutationVariables = {
  request: components.IndexUserRequest;
  options?: RequestOptions;
};

export type IndexingPermissionsIndexUserMutationData = void;

/**
 * Index user
 *
 * @remarks
 * Adds a datasource user or updates an existing user.
 */
export function useIndexingPermissionsIndexUserMutation(
  options?: MutationHookOptions<
    IndexingPermissionsIndexUserMutationData,
    Error,
    IndexingPermissionsIndexUserMutationVariables
  >,
): UseMutationResult<
  IndexingPermissionsIndexUserMutationData,
  Error,
  IndexingPermissionsIndexUserMutationVariables
> {
  const client = useGleanContext();
  return useMutation({
    ...buildIndexingPermissionsIndexUserMutation(client, options),
    ...options,
  });
}

export function mutationKeyIndexingPermissionsIndexUser(): MutationKey {
  return ["@gleanwork/api-client", "permissions", "indexUser"];
}

export function buildIndexingPermissionsIndexUserMutation(
  client$: GleanCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: IndexingPermissionsIndexUserMutationVariables,
  ) => Promise<IndexingPermissionsIndexUserMutationData>;
} {
  return {
    mutationKey: mutationKeyIndexingPermissionsIndexUser(),
    mutationFn: function indexingPermissionsIndexUserMutationFn({
      request,
      options,
    }): Promise<IndexingPermissionsIndexUserMutationData> {
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
      return unwrapAsync(indexingPermissionsIndexUser(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
