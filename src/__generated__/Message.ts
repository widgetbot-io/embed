/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_JoinMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface Message_JoinMessage {
  __typename: "JoinMessage" | "PinnedMessage";
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
  author: Message_JoinMessage_author;
}

export interface Message_TextMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface Message_TextMessage_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string;
  id: string;
  url: string;
}

export interface Message_TextMessage_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string;
  utf8: string;
}

export type Message_TextMessage_reactions_emoji = Message_TextMessage_reactions_emoji_CustomEmoji | Message_TextMessage_reactions_emoji_TextEmoji;

export interface Message_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: Message_TextMessage_reactions_emoji;
}

export interface Message_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface Message_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Message_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Message_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface Message_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Message_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: Message_TextMessage_embeds_fields[];
  footer: Message_TextMessage_embeds_footer | null;
  thumbnail: Message_TextMessage_embeds_thumbnail | null;
  video: Message_TextMessage_embeds_video | null;
}

export interface Message_TextMessage {
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
  author: Message_TextMessage_author;
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
  reactions: Message_TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: Message_TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: Message_TextMessage_embeds[] | null;
}

export type Message = Message_JoinMessage | Message_TextMessage;
