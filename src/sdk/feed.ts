/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { clientSearchFeedRetrieve } from "../funcs/clientSearchFeedRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Feed extends ClientSDK {
  /**
   * Feed of documents and events
   *
   * @remarks
   * The personalized feed/home includes different types of contents including suggestions, recents, calendar events and many more.
   */
  async retrieve(
    request: components.FeedRequest,
    options?: RequestOptions,
  ): Promise<components.FeedResponse> {
    return unwrapAsync(clientSearchFeedRetrieve(
      this,
      request,
      options,
    ));
  }
}
