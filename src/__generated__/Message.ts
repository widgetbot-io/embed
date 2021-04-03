/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType } from "./globalTypes";

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: number;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface Message_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface Message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface Message_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface Message_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface Message_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface Message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Message_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Message_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Message_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: Message_embeds_author | null;
  fields: Message_embeds_fields[] | null;
  image: Message_embeds_image | null;
  provider: Message_embeds_provider | null;
  footer: Message_embeds_footer | null;
  thumbnail: Message_embeds_thumbnail | null;
  video: Message_embeds_video | null;
}

export interface Message_mentions {
  __typename: "Mention";
  id: string;
  type: string;
  name: string;
}

export interface Message {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: Message_author;
  reactions: Message_reactions[] | null;
  attachments: Message_attachments[];
  stickers: Message_stickers[];
  messageReference: Message_messageReference | null;
  application: Message_application | null;
  embeds: Message_embeds[];
  mentions: Message_mentions[];
}
