/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The source from which document content was pulled, e.g. an API crawl or browser history
 */
export const ConnectorType = {
  ApiCrawl: "API_CRAWL",
  BrowserCrawl: "BROWSER_CRAWL",
  BrowserHistory: "BROWSER_HISTORY",
  Builtin: "BUILTIN",
  FederatedSearch: "FEDERATED_SEARCH",
  PushApi: "PUSH_API",
  WebCrawl: "WEB_CRAWL",
  NativeHistory: "NATIVE_HISTORY",
} as const;
/**
 * The source from which document content was pulled, e.g. an API crawl or browser history
 */
export type ConnectorType = ClosedEnum<typeof ConnectorType>;

/** @internal */
export const ConnectorType$inboundSchema: z.ZodNativeEnum<
  typeof ConnectorType
> = z.nativeEnum(ConnectorType);

/** @internal */
export const ConnectorType$outboundSchema: z.ZodNativeEnum<
  typeof ConnectorType
> = ConnectorType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorType$ {
  /** @deprecated use `ConnectorType$inboundSchema` instead. */
  export const inboundSchema = ConnectorType$inboundSchema;
  /** @deprecated use `ConnectorType$outboundSchema` instead. */
  export const outboundSchema = ConnectorType$outboundSchema;
}
