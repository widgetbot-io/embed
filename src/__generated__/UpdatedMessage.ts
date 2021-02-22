/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType } from "./globalTypes";

// ====================================================
// GraphQL fragment: UpdatedMessage
// ====================================================

export interface UpdatedMessage_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface UpdatedMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface UpdatedMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface UpdatedMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface UpdatedMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface UpdatedMessage_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface UpdatedMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface UpdatedMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface UpdatedMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface UpdatedMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface UpdatedMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: UpdatedMessage_embeds_author | null;
  fields: UpdatedMessage_embeds_fields[] | null;
  image: UpdatedMessage_embeds_image | null;
  provider: UpdatedMessage_embeds_provider | null;
  footer: UpdatedMessage_embeds_footer | null;
  thumbnail: UpdatedMessage_embeds_thumbnail | null;
  video: UpdatedMessage_embeds_video | null;
}

export interface UpdatedMessage {
  __typename: "UpdatedMessage";
  id: string;
  content: string | null;
  type: MessageType | null;
  flags: number | null;
  createdAt: any | null;
  editedAt: any | null;
  author: UpdatedMessage_author | null;
  reactions: UpdatedMessage_reactions[] | null;
  attachments: UpdatedMessage_attachments[] | null;
  stickers: UpdatedMessage_stickers[] | null;
  messageReference: UpdatedMessage_messageReference | null;
  application: UpdatedMessage_application | null;
  embeds: UpdatedMessage_embeds[] | null;
}
