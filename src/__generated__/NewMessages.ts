/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessages
// ====================================================

export interface NewMessages_message_JoinMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface NewMessages_message_JoinMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface NewMessages_message_JoinMessage {
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
  author: NewMessages_message_JoinMessage_author;
  /**
   * Author as member of guild.
   */
  member: NewMessages_message_JoinMessage_member | null;
}

export interface NewMessages_message_TextMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface NewMessages_message_TextMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface NewMessages_message_TextMessage_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string | null;
  id: string;
  url: string;
}

export interface NewMessages_message_TextMessage_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string | null;
  utf8: string;
}

export type NewMessages_message_TextMessage_reactions_emoji = NewMessages_message_TextMessage_reactions_emoji_CustomEmoji | NewMessages_message_TextMessage_reactions_emoji_TextEmoji;

export interface NewMessages_message_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: NewMessages_message_TextMessage_reactions_emoji | null;
}

export interface NewMessages_message_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface NewMessages_message_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  proxyIconURL: string | null;
  name: string | null;
  url: string | null;
}

export interface NewMessages_message_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface NewMessages_message_TextMessage_embeds_image {
  __typename: "EmbedImage";
  proxyURL: string;
  width: number;
  height: number;
}

export interface NewMessages_message_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessages_message_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconURL: string | null;
  text: string;
}

export interface NewMessages_message_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
}

export interface NewMessages_message_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface NewMessages_message_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: number | null;
  hexColor: string | null;
  type: string | null;
  author: NewMessages_message_TextMessage_embeds_author | null;
  fields: NewMessages_message_TextMessage_embeds_fields[];
  image: NewMessages_message_TextMessage_embeds_image | null;
  provider: NewMessages_message_TextMessage_embeds_provider | null;
  footer: NewMessages_message_TextMessage_embeds_footer | null;
  thumbnail: NewMessages_message_TextMessage_embeds_thumbnail | null;
  video: NewMessages_message_TextMessage_embeds_video | null;
}

export interface NewMessages_message_TextMessage {
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
  author: NewMessages_message_TextMessage_author;
  /**
   * Author as member of guild.
   */
  member: NewMessages_message_TextMessage_member | null;
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
  reactions: NewMessages_message_TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: NewMessages_message_TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: NewMessages_message_TextMessage_embeds[] | null;
}

export interface NewMessages_message_BoostMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface NewMessages_message_BoostMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface NewMessages_message_BoostMessage {
  __typename: "BoostMessage";
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
  author: NewMessages_message_BoostMessage_author;
  /**
   * Author as member of guild.
   */
  member: NewMessages_message_BoostMessage_member | null;
  tier: number;
}

export type NewMessages_message = NewMessages_message_JoinMessage | NewMessages_message_TextMessage | NewMessages_message_BoostMessage;

export interface NewMessages {
  message: NewMessages_message;
}

export interface NewMessagesVariables {
  channel: string;
}
