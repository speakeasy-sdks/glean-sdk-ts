/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { indexingTroubleshootingDatasourceDocumentsDebug } from "../funcs/indexingTroubleshootingDatasourceDocumentsDebug.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class DatasourceDocuments extends ClientSDK {
  /**
   * Beta: Get information of a batch of documents
   *
   * @remarks
   * Gives various information that would help in debugging related to a batch of documents. Currently in beta, might undergo breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/) for more information.
   */
  async debug(
    debugDocumentsRequest: components.DebugDocumentsRequest,
    datasource: string,
    options?: RequestOptions,
  ): Promise<components.DebugDocumentsResponse> {
    return unwrapAsync(indexingTroubleshootingDatasourceDocumentsDebug(
      this,
      debugDocumentsRequest,
      datasource,
      options,
    ));
  }
}
