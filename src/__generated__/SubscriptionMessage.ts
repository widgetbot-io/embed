/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageType, FormatType, MentionType } from "./globalTypes";

// ====================================================
// GraphQL fragment: SubscriptionMessage
// ====================================================

export interface SubscriptionMessage_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  discrim: string;
  id: string;
  flags: number | null;
  name: string;
}

export interface SubscriptionMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
  emojiId: string | null;
  me: boolean;
}

export interface SubscriptionMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  filename: string;
  size: number;
}

export interface SubscriptionMessage_stickers {
  __typename: "Sticker";
  id: string;
  name: string;
  icon: string;
  formatType: FormatType;
  lottieData: string | null;
}

export interface SubscriptionMessage_messageReference {
  __typename: "MessageReference";
  guildId: string | null;
  channelId: string;
  messageId: string | null;
}

export interface SubscriptionMessage_application {
  __typename: "Application";
  id: string;
  name: string;
  icon: string;
}

export interface SubscriptionMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface SubscriptionMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface SubscriptionMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface SubscriptionMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface SubscriptionMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface SubscriptionMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface SubscriptionMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface SubscriptionMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: number | null;
  type: string | null;
  author: SubscriptionMessage_embeds_author | null;
  fields: SubscriptionMessage_embeds_fields[] | null;
  image: SubscriptionMessage_embeds_image | null;
  provider: SubscriptionMessage_embeds_provider | null;
  footer: SubscriptionMessage_embeds_footer | null;
  thumbnail: SubscriptionMessage_embeds_thumbnail | null;
  video: SubscriptionMessage_embeds_video | null;
}

export interface SubscriptionMessage_mentions {
  __typename: "Mention";
  id: string;
  type: MentionType;
  name: string;
}

export interface SubscriptionMessage_interaction_user {
  __typename: "Author";
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
}

export interface SubscriptionMessage_interaction {
  __typename: "MessageInteraction";
  name: string;
  user: SubscriptionMessage_interaction_user;
}

export interface SubscriptionMessage {
  __typename: "Message";
  id: string;
  content: string;
  type: MessageType;
  flags: number | null;
  createdAt: any;
  editedAt: any | null;
  isGuest: boolean;
  author: SubscriptionMessage_author;
  reactions: SubscriptionMessage_reactions[] | null;
  attachments: SubscriptionMessage_attachments[];
  stickers: SubscriptionMessage_stickers[];
  messageReference: SubscriptionMessage_messageReference | null;
  application: SubscriptionMessage_application | null;
  embeds: SubscriptionMessage_embeds[];
  mentions: SubscriptionMessage_mentions[];
  interaction: SubscriptionMessage_interaction | null;
}
