/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: MessageUpdated
// ====================================================

export interface MessageUpdated_messageUpdate_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface MessageUpdated_messageUpdate_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface MessageUpdated_messageUpdate_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface MessageUpdated_messageUpdate_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface MessageUpdated_messageUpdate_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface MessageUpdated_messageUpdate_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface MessageUpdated_messageUpdate_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface MessageUpdated_messageUpdate_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface MessageUpdated_messageUpdate_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface MessageUpdated_messageUpdate_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface MessageUpdated_messageUpdate_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface MessageUpdated_messageUpdate_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: MessageUpdated_messageUpdate_embeds_author | null;
  fields: MessageUpdated_messageUpdate_embeds_fields[] | null;
  image: MessageUpdated_messageUpdate_embeds_image | null;
  provider: MessageUpdated_messageUpdate_embeds_provider | null;
  footer: MessageUpdated_messageUpdate_embeds_footer | null;
  thumbnail: MessageUpdated_messageUpdate_embeds_thumbnail | null;
  video: MessageUpdated_messageUpdate_embeds_video | null;
}

export interface MessageUpdated_messageUpdate_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface MessageUpdated_messageUpdate_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
}

export interface MessageUpdated_messageUpdate_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: MessageUpdated_messageUpdate_interaction_user;
}

export interface MessageUpdated_messageUpdate {
  __typename: "UpdatedMessage";
  id: string;
  content: string | null;
  type: MessageType | null;
  flags: number | null;
  createdAt: any | null;
  editedAt: any | null;
  author: MessageUpdated_messageUpdate_author | null;
  reactions: MessageUpdated_messageUpdate_reactions[] | null;
  attachments: MessageUpdated_messageUpdate_attachments[] | null;
  stickers: MessageUpdated_messageUpdate_stickers[] | null;
  messageReference: MessageUpdated_messageUpdate_messageReference | null;
  application: MessageUpdated_messageUpdate_application | null;
  embeds: MessageUpdated_messageUpdate_embeds[] | null;
  mentions: MessageUpdated_messageUpdate_mentions[] | null;
  interaction: MessageUpdated_messageUpdate_interaction | null;
}

export interface MessageUpdated {
  messageUpdate: MessageUpdated_messageUpdate | null;
}

export interface MessageUpdatedVariables {
  channel: string;
  guild: string;
}
