/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TextMessage
// ====================================================

export interface TextMessage_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string | null;
  id: string;
  url: string;
}

export interface TextMessage_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string | null;
  utf8: string;
}

export type TextMessage_reactions_emoji = TextMessage_reactions_emoji_CustomEmoji | TextMessage_reactions_emoji_TextEmoji;

export interface TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: TextMessage_reactions_emoji | null;
}

export interface TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: TextMessage_embeds_fields[];
  footer: TextMessage_embeds_footer | null;
  thumbnail: TextMessage_embeds_thumbnail | null;
  video: TextMessage_embeds_video | null;
}

export interface TextMessage {
  __typename: "TextMessage";
  /**
   * Message content
   */
  content: string | null;
  /**
   * Time the message was edited
   */
  editedAt: any | null;
  /**
   * Message reactions
   */
  reactions: TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: TextMessage_embeds[] | null;
}
