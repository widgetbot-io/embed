/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: UpdatedMessages
// ====================================================

export interface UpdatedMessages_messageUpdate_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: string;
  discrim: string;
  id: string;
  name: string;
}

export interface UpdatedMessages_messageUpdate_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface UpdatedMessages_messageUpdate_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface UpdatedMessages_messageUpdate_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
}

export interface UpdatedMessages_messageUpdate_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface UpdatedMessages_messageUpdate_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface UpdatedMessages_messageUpdate_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface UpdatedMessages_messageUpdate_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface UpdatedMessages_messageUpdate_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface UpdatedMessages_messageUpdate_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface UpdatedMessages_messageUpdate_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: UpdatedMessages_messageUpdate_embeds_author | null;
  fields: UpdatedMessages_messageUpdate_embeds_fields[] | null;
  image: UpdatedMessages_messageUpdate_embeds_image | null;
  provider: UpdatedMessages_messageUpdate_embeds_provider | null;
  footer: UpdatedMessages_messageUpdate_embeds_footer | null;
  thumbnail: UpdatedMessages_messageUpdate_embeds_thumbnail | null;
  video: UpdatedMessages_messageUpdate_embeds_video | null;
}

export interface UpdatedMessages_messageUpdate {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  author: UpdatedMessages_messageUpdate_author;
  reactions: UpdatedMessages_messageUpdate_reactions[] | null;
  attachments: UpdatedMessages_messageUpdate_attachments[];
  stickers: UpdatedMessages_messageUpdate_stickers[] | null;
  messageReference: UpdatedMessages_messageUpdate_messageReference | null;
  application: UpdatedMessages_messageUpdate_application | null;
  embeds: UpdatedMessages_messageUpdate_embeds[];
}

export interface UpdatedMessages {
  messageUpdate: UpdatedMessages_messageUpdate | null;
}

export interface UpdatedMessagesVariables {
  channel: string;
  guild: string;
}
