/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { searchAutocomplete } from "../funcs/searchAutocomplete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Search extends ClientSDK {
  /**
   * Autocomplete
   *
   * @remarks
   * Retrieve query suggestions, operators and documents for the given partially typed query.
   */
  async autocomplete(
    request: components.AutocompleteRequest,
    options?: RequestOptions,
  ): Promise<components.AutocompleteResponse> {
    return unwrapAsync(searchAutocomplete(
      this,
      request,
      options,
    ));
  }
}
