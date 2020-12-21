/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessages
// ====================================================

export interface NewMessages_message_PinnedMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface NewMessages_message_PinnedMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface NewMessages_message_PinnedMessage {
  __typename: "PinnedMessage" | "JoinMessage";
  id: string;
  createdAt: any;
  user: NewMessages_message_PinnedMessage_user;
  flags: NewMessages_message_PinnedMessage_flags;
}

export interface NewMessages_message_TextMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface NewMessages_message_TextMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface NewMessages_message_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  name: string;
  url: string | null;
}

export interface NewMessages_message_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface NewMessages_message_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface NewMessages_message_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface NewMessages_message_TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface NewMessages_message_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface NewMessages_message_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface NewMessages_message_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessages_message_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface NewMessages_message_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: NewMessages_message_TextMessage_embeds_author | null;
  fields: NewMessages_message_TextMessage_embeds_fields[] | null;
  image: NewMessages_message_TextMessage_embeds_image | null;
  provider: NewMessages_message_TextMessage_embeds_provider | null;
  footer: NewMessages_message_TextMessage_embeds_footer | null;
  thumbnail: NewMessages_message_TextMessage_embeds_thumbnail | null;
  video: NewMessages_message_TextMessage_embeds_video | null;
}

export interface NewMessages_message_TextMessage {
  __typename: "TextMessage";
  id: string;
  createdAt: any;
  user: NewMessages_message_TextMessage_user;
  flags: NewMessages_message_TextMessage_flags;
  content: string;
  editedAt: any | null;
  reactions: NewMessages_message_TextMessage_reactions[];
  attachments: NewMessages_message_TextMessage_attachments[];
  embeds: NewMessages_message_TextMessage_embeds[] | null;
}

export interface NewMessages_message_BoostMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface NewMessages_message_BoostMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface NewMessages_message_BoostMessage {
  __typename: "BoostMessage";
  id: string;
  createdAt: any;
  user: NewMessages_message_BoostMessage_user;
  flags: NewMessages_message_BoostMessage_flags;
  tier: number;
}

export interface NewMessages_message_FollowMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface NewMessages_message_FollowMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface NewMessages_message_FollowMessage {
  __typename: "FollowMessage";
  id: string;
  createdAt: any;
  user: NewMessages_message_FollowMessage_user;
  flags: NewMessages_message_FollowMessage_flags;
  content: string;
}

export type NewMessages_message = NewMessages_message_PinnedMessage | NewMessages_message_TextMessage | NewMessages_message_BoostMessage | NewMessages_message_FollowMessage;

export interface NewMessages {
  message: NewMessages_message | null;
}

export interface NewMessagesVariables {
  channel: string;
}
