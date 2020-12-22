/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: UpdatedMessages
// ====================================================

export interface UpdatedMessages_messageUpdate_PinnedMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface UpdatedMessages_messageUpdate_PinnedMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface UpdatedMessages_messageUpdate_PinnedMessage {
  __typename: "PinnedMessage" | "JoinMessage";
  id: string;
  createdAt: any;
  user: UpdatedMessages_messageUpdate_PinnedMessage_user;
  flags: UpdatedMessages_messageUpdate_PinnedMessage_flags;
}

export interface UpdatedMessages_messageUpdate_TextMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface UpdatedMessages_messageUpdate_TextMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: UpdatedMessages_messageUpdate_TextMessage_embeds_author | null;
  fields: UpdatedMessages_messageUpdate_TextMessage_embeds_fields[] | null;
  image: UpdatedMessages_messageUpdate_TextMessage_embeds_image | null;
  provider: UpdatedMessages_messageUpdate_TextMessage_embeds_provider | null;
  footer: UpdatedMessages_messageUpdate_TextMessage_embeds_footer | null;
  thumbnail: UpdatedMessages_messageUpdate_TextMessage_embeds_thumbnail | null;
  video: UpdatedMessages_messageUpdate_TextMessage_embeds_video | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage {
  __typename: "TextMessage";
  id: string;
  createdAt: any;
  user: UpdatedMessages_messageUpdate_TextMessage_user;
  flags: UpdatedMessages_messageUpdate_TextMessage_flags;
  content: string;
  editedAt: any | null;
  reactions: UpdatedMessages_messageUpdate_TextMessage_reactions[] | null;
  attachments: UpdatedMessages_messageUpdate_TextMessage_attachments[];
  embeds: UpdatedMessages_messageUpdate_TextMessage_embeds[] | null;
}

export interface UpdatedMessages_messageUpdate_BoostMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface UpdatedMessages_messageUpdate_BoostMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface UpdatedMessages_messageUpdate_BoostMessage {
  __typename: "BoostMessage";
  id: string;
  createdAt: any;
  user: UpdatedMessages_messageUpdate_BoostMessage_user;
  flags: UpdatedMessages_messageUpdate_BoostMessage_flags;
  tier: number;
}

export interface UpdatedMessages_messageUpdate_FollowMessage_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
  bot: boolean;
}

export interface UpdatedMessages_messageUpdate_FollowMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface UpdatedMessages_messageUpdate_FollowMessage {
  __typename: "FollowMessage";
  id: string;
  createdAt: any;
  user: UpdatedMessages_messageUpdate_FollowMessage_user;
  flags: UpdatedMessages_messageUpdate_FollowMessage_flags;
  content: string;
}

export type UpdatedMessages_messageUpdate = UpdatedMessages_messageUpdate_PinnedMessage | UpdatedMessages_messageUpdate_TextMessage | UpdatedMessages_messageUpdate_BoostMessage | UpdatedMessages_messageUpdate_FollowMessage;

export interface UpdatedMessages {
  messageUpdate: UpdatedMessages_messageUpdate | null;
}

export interface UpdatedMessagesVariables {
  channel: string;
}
