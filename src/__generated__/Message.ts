/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_PinnedMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Message_PinnedMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Message_PinnedMessage {
  __typename: "PinnedMessage" | "JoinMessage";
  id: string;
  createdAt: any;
  user: Message_PinnedMessage_user;
  flags: Message_PinnedMessage_flags;
}

export interface Message_TextMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Message_TextMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Message_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  name: string;
  url: string | null;
}

export interface Message_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface Message_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface Message_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Message_TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Message_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Message_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Message_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Message_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Message_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: Message_TextMessage_embeds_author | null;
  fields: Message_TextMessage_embeds_fields[] | null;
  image: Message_TextMessage_embeds_image | null;
  provider: Message_TextMessage_embeds_provider | null;
  footer: Message_TextMessage_embeds_footer | null;
  thumbnail: Message_TextMessage_embeds_thumbnail | null;
  video: Message_TextMessage_embeds_video | null;
}

export interface Message_TextMessage {
  __typename: "TextMessage";
  id: string;
  createdAt: any;
  user: Message_TextMessage_user;
  flags: Message_TextMessage_flags;
  content: string;
  editedAt: any | null;
  reactions: Message_TextMessage_reactions[];
  attachments: Message_TextMessage_attachments[];
  embeds: Message_TextMessage_embeds[] | null;
}

export interface Message_BoostMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Message_BoostMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Message_BoostMessage {
  __typename: "BoostMessage";
  id: string;
  createdAt: any;
  user: Message_BoostMessage_user;
  flags: Message_BoostMessage_flags;
  tier: number;
}

export interface Message_FollowMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface Message_FollowMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Message_FollowMessage {
  __typename: "FollowMessage";
  id: string;
  createdAt: any;
  user: Message_FollowMessage_user;
  flags: Message_FollowMessage_flags;
  content: string;
}

export type Message = Message_PinnedMessage | Message_TextMessage | Message_BoostMessage | Message_FollowMessage;
