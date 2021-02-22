/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MessageType, FormatType } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface SendMessage_sendMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface SendMessage_sendMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface SendMessage_sendMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface SendMessage_sendMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface SendMessage_sendMessage_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface SendMessage_sendMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface SendMessage_sendMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface SendMessage_sendMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface SendMessage_sendMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface SendMessage_sendMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface SendMessage_sendMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface SendMessage_sendMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface SendMessage_sendMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: SendMessage_sendMessage_embeds_author | null;
  fields: SendMessage_sendMessage_embeds_fields[] | null;
  image: SendMessage_sendMessage_embeds_image | null;
  provider: SendMessage_sendMessage_embeds_provider | null;
  footer: SendMessage_sendMessage_embeds_footer | null;
  thumbnail: SendMessage_sendMessage_embeds_thumbnail | null;
  video: SendMessage_sendMessage_embeds_video | null;
}

export interface SendMessage_sendMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  author: SendMessage_sendMessage_author;
  reactions: SendMessage_sendMessage_reactions[] | null;
  attachments: SendMessage_sendMessage_attachments[];
  stickers: SendMessage_sendMessage_stickers[];
  messageReference: SendMessage_sendMessage_messageReference | null;
  application: SendMessage_sendMessage_application | null;
  embeds: SendMessage_sendMessage_embeds[];
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage;
}

export interface SendMessageVariables {
  channel: string;
  content: string;
}
