/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const UgcType = {
  AnnouncementsType: "ANNOUNCEMENTS_TYPE",
  AnswersType: "ANSWERS_TYPE",
  CollectionsType: "COLLECTIONS_TYPE",
  ShortcutsType: "SHORTCUTS_TYPE",
  WorkflowsType: "WORKFLOWS_TYPE",
  PromptTemplatesType: "PROMPT_TEMPLATES_TYPE",
} as const;
export type UgcType = ClosedEnum<typeof UgcType>;

/** @internal */
export const UgcType$inboundSchema: z.ZodNativeEnum<typeof UgcType> = z
  .nativeEnum(UgcType);

/** @internal */
export const UgcType$outboundSchema: z.ZodNativeEnum<typeof UgcType> =
  UgcType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UgcType$ {
  /** @deprecated use `UgcType$inboundSchema` instead. */
  export const inboundSchema = UgcType$inboundSchema;
  /** @deprecated use `UgcType$outboundSchema` instead. */
  export const outboundSchema = UgcType$outboundSchema;
}
