/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface Message_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string;
  id: string;
  url: string;
}

export interface Message_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string;
  utf8: string;
}

export type Message_reactions_emoji = Message_reactions_emoji_CustomEmoji | Message_reactions_emoji_TextEmoji;

export interface Message_reactions {
  __typename: "Reaction";
  count: number;
  emoji: Message_reactions_emoji;
}

export interface Message_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface Message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Message_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface Message_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: Message_embeds_fields[];
  footer: Message_embeds_footer | null;
  thumbnail: Message_embeds_thumbnail | null;
  video: Message_embeds_video | null;
}

export interface Message {
  __typename: "TextMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * Message Author.
   */
  author: Message_author;
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
  reactions: Message_reactions[];
  /**
   * Message attachments
   */
  attachments: Message_attachments[];
  /**
   * Message embeds
   */
  embeds: Message_embeds[] | null;
}
