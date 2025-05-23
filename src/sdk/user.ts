/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { indexingTroubleshootingDatasourceUserDebug } from "../funcs/indexingTroubleshootingDatasourceUserDebug.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class User extends ClientSDK {
  /**
   * Beta: Get user information
   *
   * @remarks
   * Gives various information that would help in debugging related to a particular user. Currently in beta, might undergo breaking changes without prior notice.
   *
   * Tip: Refer to the [Troubleshooting tutorial](https://developers.glean.com/docs/indexing_api/indexing_api_troubleshooting/) for more information.
   */
  async debug(
    debugUserRequest: components.DebugUserRequest,
    datasource: string,
    options?: RequestOptions,
  ): Promise<components.DebugUserResponse> {
    return unwrapAsync(indexingTroubleshootingDatasourceUserDebug(
      this,
      debugUserRequest,
      datasource,
      options,
    ));
  }
}
