/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Emoji
// ====================================================

export interface Emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string | null;
  id: string;
  url: string;
}

export interface Emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string | null;
  utf8: string;
}

export type Emoji = Emoji_CustomEmoji | Emoji_TextEmoji;
