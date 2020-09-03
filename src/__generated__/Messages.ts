/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_messages_PinnedMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Messages_channel_messages_PinnedMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Messages_channel_messages_PinnedMessage {
  __typename: "PinnedMessage" | "JoinMessage";
  id: string;
  createdAt: any;
  user: Messages_channel_messages_PinnedMessage_user;
  flags: Messages_channel_messages_PinnedMessage_flags;
}

export interface Messages_channel_messages_TextMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Messages_channel_messages_TextMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Messages_channel_messages_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  name: string;
  url: string | null;
}

export interface Messages_channel_messages_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface Messages_channel_messages_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface Messages_channel_messages_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Messages_channel_messages_TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string;
  width: number;
  height: number;
}

export interface Messages_channel_messages_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_messages_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_messages_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  url: string;
}

export interface Messages_channel_messages_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Messages_channel_messages_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  hexColor: string | null;
  type: string | null;
  author: Messages_channel_messages_TextMessage_embeds_author | null;
  fields: Messages_channel_messages_TextMessage_embeds_fields[];
  image: Messages_channel_messages_TextMessage_embeds_image | null;
  provider: Messages_channel_messages_TextMessage_embeds_provider | null;
  footer: Messages_channel_messages_TextMessage_embeds_footer | null;
  thumbnail: Messages_channel_messages_TextMessage_embeds_thumbnail | null;
  video: Messages_channel_messages_TextMessage_embeds_video | null;
}

export interface Messages_channel_messages_TextMessage {
  __typename: "TextMessage";
  id: string;
  createdAt: any;
  user: Messages_channel_messages_TextMessage_user;
  flags: Messages_channel_messages_TextMessage_flags;
  content: string;
  editedAt: any | null;
  reactions: Messages_channel_messages_TextMessage_reactions[];
  attachments: Messages_channel_messages_TextMessage_attachments[];
  embeds: Messages_channel_messages_TextMessage_embeds[] | null;
}

export interface Messages_channel_messages_BoostMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Messages_channel_messages_BoostMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Messages_channel_messages_BoostMessage {
  __typename: "BoostMessage";
  id: string;
  createdAt: any;
  user: Messages_channel_messages_BoostMessage_user;
  flags: Messages_channel_messages_BoostMessage_flags;
  tier: number;
}

export interface Messages_channel_messages_FollowMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Messages_channel_messages_FollowMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Messages_channel_messages_FollowMessage {
  __typename: "FollowMessage";
  id: string;
  createdAt: any;
  user: Messages_channel_messages_FollowMessage_user;
  flags: Messages_channel_messages_FollowMessage_flags;
  content: string;
}

export type Messages_channel_messages = Messages_channel_messages_PinnedMessage | Messages_channel_messages_TextMessage | Messages_channel_messages_BoostMessage | Messages_channel_messages_FollowMessage;

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
