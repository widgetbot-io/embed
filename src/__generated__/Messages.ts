/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_StoreChannel {
  __typename: "StoreChannel" | "VoiceChannel";
  id: string;
}

export interface Messages_channel_TextChannel_messages_JoinMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface Messages_channel_TextChannel_messages_JoinMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface Messages_channel_TextChannel_messages_JoinMessage {
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
   * General discord user who authored the message
   */
  author: Messages_channel_TextChannel_messages_JoinMessage_author;
  /**
   * Author as member of guild.
   */
  member: Messages_channel_TextChannel_messages_JoinMessage_member | null;
}

export interface Messages_channel_TextChannel_messages_TextMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface Messages_channel_TextChannel_messages_TextMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface Messages_channel_TextChannel_messages_TextMessage_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string | null;
  id: string;
  url: string;
}

export interface Messages_channel_TextChannel_messages_TextMessage_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string | null;
  utf8: string;
}

export type Messages_channel_TextChannel_messages_TextMessage_reactions_emoji = Messages_channel_TextChannel_messages_TextMessage_reactions_emoji_CustomEmoji | Messages_channel_TextChannel_messages_TextMessage_reactions_emoji_TextEmoji;

export interface Messages_channel_TextChannel_messages_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: Messages_channel_TextChannel_messages_TextMessage_reactions_emoji | null;
}

export interface Messages_channel_TextChannel_messages_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface Messages_channel_TextChannel_messages_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Messages_channel_TextChannel_messages_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Messages_channel_TextChannel_messages_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface Messages_channel_TextChannel_messages_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Messages_channel_TextChannel_messages_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: Messages_channel_TextChannel_messages_TextMessage_embeds_fields[];
  footer: Messages_channel_TextChannel_messages_TextMessage_embeds_footer | null;
  thumbnail: Messages_channel_TextChannel_messages_TextMessage_embeds_thumbnail | null;
  video: Messages_channel_TextChannel_messages_TextMessage_embeds_video | null;
}

export interface Messages_channel_TextChannel_messages_TextMessage {
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
   * General discord user who authored the message
   */
  author: Messages_channel_TextChannel_messages_TextMessage_author;
  /**
   * Author as member of guild.
   */
  member: Messages_channel_TextChannel_messages_TextMessage_member | null;
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
  reactions: Messages_channel_TextChannel_messages_TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: Messages_channel_TextChannel_messages_TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: Messages_channel_TextChannel_messages_TextMessage_embeds[] | null;
}

export type Messages_channel_TextChannel_messages = Messages_channel_TextChannel_messages_JoinMessage | Messages_channel_TextChannel_messages_TextMessage;

export interface Messages_channel_TextChannel {
  __typename: "TextChannel";
  id: string;
  messages: Messages_channel_TextChannel_messages[] | null;
}

export interface Messages_channel_NewsChannel_messages_JoinMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface Messages_channel_NewsChannel_messages_JoinMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface Messages_channel_NewsChannel_messages_JoinMessage {
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
   * General discord user who authored the message
   */
  author: Messages_channel_NewsChannel_messages_JoinMessage_author;
  /**
   * Author as member of guild.
   */
  member: Messages_channel_NewsChannel_messages_JoinMessage_member | null;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string | null;
  id: string;
  url: string;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string | null;
  utf8: string;
}

export type Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji = Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji_CustomEmoji | Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji_TextEmoji;

export interface Messages_channel_NewsChannel_messages_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: Messages_channel_NewsChannel_messages_TextMessage_reactions_emoji | null;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Messages_channel_NewsChannel_messages_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: Messages_channel_NewsChannel_messages_TextMessage_embeds_fields[];
  footer: Messages_channel_NewsChannel_messages_TextMessage_embeds_footer | null;
  thumbnail: Messages_channel_NewsChannel_messages_TextMessage_embeds_thumbnail | null;
  video: Messages_channel_NewsChannel_messages_TextMessage_embeds_video | null;
}

export interface Messages_channel_NewsChannel_messages_TextMessage {
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
   * General discord user who authored the message
   */
  author: Messages_channel_NewsChannel_messages_TextMessage_author;
  /**
   * Author as member of guild.
   */
  member: Messages_channel_NewsChannel_messages_TextMessage_member | null;
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
  reactions: Messages_channel_NewsChannel_messages_TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: Messages_channel_NewsChannel_messages_TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: Messages_channel_NewsChannel_messages_TextMessage_embeds[] | null;
}

export type Messages_channel_NewsChannel_messages = Messages_channel_NewsChannel_messages_JoinMessage | Messages_channel_NewsChannel_messages_TextMessage;

export interface Messages_channel_NewsChannel {
  __typename: "NewsChannel";
  id: string;
  messages: Messages_channel_NewsChannel_messages[] | null;
}

export type Messages_channel = Messages_channel_StoreChannel | Messages_channel_TextChannel | Messages_channel_NewsChannel;

export interface Messages {
  channel: Messages_channel | null;
}

export interface MessagesVariables {
  channel: string;
  around?: string | null;
  before?: string | null;
  after?: string | null;
  limit?: number | null;
}
