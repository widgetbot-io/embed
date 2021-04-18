/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: NewMessage
// ====================================================

export interface NewMessage_message_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface NewMessage_message_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface NewMessage_message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface NewMessage_message_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface NewMessage_message_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface NewMessage_message_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface NewMessage_message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface NewMessage_message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewMessage_message_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface NewMessage_message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessage_message_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface NewMessage_message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessage_message_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessage_message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: NewMessage_message_embeds_author | null;
  fields: NewMessage_message_embeds_fields[] | null;
  image: NewMessage_message_embeds_image | null;
  provider: NewMessage_message_embeds_provider | null;
  footer: NewMessage_message_embeds_footer | null;
  thumbnail: NewMessage_message_embeds_thumbnail | null;
  video: NewMessage_message_embeds_video | null;
}

export interface NewMessage_message_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface NewMessage_message {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: NewMessage_message_author;
  reactions: NewMessage_message_reactions[] | null;
  attachments: NewMessage_message_attachments[];
  stickers: NewMessage_message_stickers[];
  messageReference: NewMessage_message_messageReference | null;
  application: NewMessage_message_application | null;
  embeds: NewMessage_message_embeds[];
  mentions: NewMessage_message_mentions[];
}

export interface NewMessage {
  message: NewMessage_message | null;
}

export interface NewMessageVariables {
  channel: string;
  guild: string;
}
