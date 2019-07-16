/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessages
// ====================================================

export interface NewMessages_message_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface NewMessages_message_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string;
  id: string;
  url: string;
}

export interface NewMessages_message_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string;
  utf8: string;
}

export type NewMessages_message_reactions_emoji = NewMessages_message_reactions_emoji_CustomEmoji | NewMessages_message_reactions_emoji_TextEmoji;

export interface NewMessages_message_reactions {
  __typename: "Reaction";
  count: number;
  emoji: NewMessages_message_reactions_emoji;
}

export interface NewMessages_message_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface NewMessages_message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface NewMessages_message_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface NewMessages_message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface NewMessages_message_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface NewMessages_message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: NewMessages_message_embeds_fields[];
  footer: NewMessages_message_embeds_footer | null;
  thumbnail: NewMessages_message_embeds_thumbnail | null;
  video: NewMessages_message_embeds_video | null;
}

export interface NewMessages_message {
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
  author: NewMessages_message_author;
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
  reactions: NewMessages_message_reactions[];
  /**
   * Message attachments
   */
  attachments: NewMessages_message_attachments[];
  /**
   * Message embeds
   */
  embeds: NewMessages_message_embeds[] | null;
}

export interface NewMessages {
  message: NewMessages_message;
}

export interface NewMessagesVariables {
  channel: string;
}
