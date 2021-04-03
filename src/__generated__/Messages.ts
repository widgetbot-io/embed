/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType } from "./globalTypes";

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_messages_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Messages_channel_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface Messages_channel_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Messages_channel_messages_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Messages_channel_messages_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Messages_channel_messages_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface Messages_channel_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Messages_channel_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_messages_embeds_author | null;
  fields: Messages_channel_messages_embeds_fields[] | null;
  image: Messages_channel_messages_embeds_image | null;
  provider: Messages_channel_messages_embeds_provider | null;
  footer: Messages_channel_messages_embeds_footer | null;
  thumbnail: Messages_channel_messages_embeds_thumbnail | null;
  video: Messages_channel_messages_embeds_video | null;
}

export interface Messages_channel_messages_mentions {
  __typename: "Mention";
  id: string;
  type: string;
  name: string;
}

export interface Messages_channel_messages {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Messages_channel_messages_author;
  reactions: Messages_channel_messages_reactions[] | null;
  attachments: Messages_channel_messages_attachments[];
  stickers: Messages_channel_messages_stickers[];
  messageReference: Messages_channel_messages_messageReference | null;
  application: Messages_channel_messages_application | null;
  embeds: Messages_channel_messages_embeds[];
  mentions: Messages_channel_messages_mentions[];
}

export interface Messages_channel {
  __typename: "TextChannel";
  id: string;
  messages: Messages_channel_messages[];
}

export interface Messages {
  channel: Messages_channel;
}

export interface MessagesVariables {
  channel: string;
  around?: string | null;
  before?: string | null;
  after?: string | null;
  limit?: number | null;
}
