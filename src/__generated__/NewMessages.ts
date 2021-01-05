/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: NewMessages
// ====================================================

export interface NewMessages_message_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: string;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface NewMessages_message_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface NewMessages_message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface NewMessages_message_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
}

export interface NewMessages_message_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewMessages_message_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface NewMessages_message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface NewMessages_message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewMessages_message_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface NewMessages_message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessages_message_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface NewMessages_message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessages_message_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessages_message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: NewMessages_message_embeds_author | null;
  fields: NewMessages_message_embeds_fields[] | null;
  image: NewMessages_message_embeds_image | null;
  provider: NewMessages_message_embeds_provider | null;
  footer: NewMessages_message_embeds_footer | null;
  thumbnail: NewMessages_message_embeds_thumbnail | null;
  video: NewMessages_message_embeds_video | null;
}

export interface NewMessages_message {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  author: NewMessages_message_author;
  reactions: NewMessages_message_reactions[] | null;
  attachments: NewMessages_message_attachments[];
  stickers: NewMessages_message_stickers[] | null;
  messageReference: NewMessages_message_messageReference | null;
  application: NewMessages_message_application | null;
  embeds: NewMessages_message_embeds[];
}

export interface NewMessages {
  message: NewMessages_message | null;
}

export interface NewMessagesVariables {
  channel: string;
  guild: string;
}
