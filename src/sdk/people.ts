/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { peoplePostApiIndexV1Bulkindexemployees } from "../funcs/peoplePostApiIndexV1Bulkindexemployees.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class People extends ClientSDK {
  /**
   * Bulk index employees
   *
   * @remarks
   * Replaces all the currently indexed employees using paginated batch API calls. Please refer to the [bulk indexing](https://developers.glean.com/docs/indexing_api_bulk_indexing/#bulk-upload-model) documentation for an explanation of how to use bulk endpoints.
   */
  async postApiIndexV1Bulkindexemployees(
    request: components.BulkIndexEmployeesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(peoplePostApiIndexV1Bulkindexemployees(
      this,
      request,
      options,
    ));
  }
}
