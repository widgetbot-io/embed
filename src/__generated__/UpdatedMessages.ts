/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: UpdatedMessages
// ====================================================

export interface UpdatedMessages_messageUpdate_JoinMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface UpdatedMessages_messageUpdate_JoinMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface UpdatedMessages_messageUpdate_JoinMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean;
  IS_CROSSPOST: boolean;
  SUPPRESS_EMBEDS: boolean;
  SOURCE_MESSAGE_DELETED: boolean;
  URGENT: boolean;
}

export interface UpdatedMessages_messageUpdate_JoinMessage {
  __typename: "JoinMessage" | "PinnedMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * General discord user who authored the message
   */
  author: UpdatedMessages_messageUpdate_JoinMessage_author;
  /**
   * Author as member of guild.
   */
  member: UpdatedMessages_messageUpdate_JoinMessage_member | null;
  /**
   * Message flags
   */
  flags: UpdatedMessages_messageUpdate_JoinMessage_flags;
}

export interface UpdatedMessages_messageUpdate_TextMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean;
  IS_CROSSPOST: boolean;
  SUPPRESS_EMBEDS: boolean;
  SOURCE_MESSAGE_DELETED: boolean;
  URGENT: boolean;
}

export interface UpdatedMessages_messageUpdate_TextMessage_reactions_emoji {
  __typename: "ReactionEmoji";
  name: string;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: UpdatedMessages_messageUpdate_TextMessage_reactions_emoji;
}

export interface UpdatedMessages_messageUpdate_TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  proxyIconURL: string | null;
  name: string | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_image {
  __typename: "EmbedImage";
  proxyURL: string;
  width: number;
  height: number;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconURL: string | null;
  text: string;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface UpdatedMessages_messageUpdate_TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: number | null;
  hexColor: string | null;
  type: string | null;
  author: UpdatedMessages_messageUpdate_TextMessage_embeds_author | null;
  fields: UpdatedMessages_messageUpdate_TextMessage_embeds_fields[];
  image: UpdatedMessages_messageUpdate_TextMessage_embeds_image | null;
  provider: UpdatedMessages_messageUpdate_TextMessage_embeds_provider | null;
  footer: UpdatedMessages_messageUpdate_TextMessage_embeds_footer | null;
  thumbnail: UpdatedMessages_messageUpdate_TextMessage_embeds_thumbnail | null;
  video: UpdatedMessages_messageUpdate_TextMessage_embeds_video | null;
}

export interface UpdatedMessages_messageUpdate_TextMessage {
  __typename: "TextMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * General discord user who authored the message
   */
  author: UpdatedMessages_messageUpdate_TextMessage_author;
  /**
   * Author as member of guild.
   */
  member: UpdatedMessages_messageUpdate_TextMessage_member | null;
  /**
   * Message flags
   */
  flags: UpdatedMessages_messageUpdate_TextMessage_flags;
  /**
   * Message content
   */
  content: string | null;
  /**
   * Time the message was edited
   */
  editedAt: any | null;
  /**
   * Message reactions
   */
  reactions: UpdatedMessages_messageUpdate_TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: UpdatedMessages_messageUpdate_TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: UpdatedMessages_messageUpdate_TextMessage_embeds[] | null;
}

export interface UpdatedMessages_messageUpdate_BoostMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface UpdatedMessages_messageUpdate_BoostMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface UpdatedMessages_messageUpdate_BoostMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean;
  IS_CROSSPOST: boolean;
  SUPPRESS_EMBEDS: boolean;
  SOURCE_MESSAGE_DELETED: boolean;
  URGENT: boolean;
}

export interface UpdatedMessages_messageUpdate_BoostMessage {
  __typename: "BoostMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * General discord user who authored the message
   */
  author: UpdatedMessages_messageUpdate_BoostMessage_author;
  /**
   * Author as member of guild.
   */
  member: UpdatedMessages_messageUpdate_BoostMessage_member | null;
  /**
   * Message flags
   */
  flags: UpdatedMessages_messageUpdate_BoostMessage_flags;
  tier: number;
}

export interface UpdatedMessages_messageUpdate_FollowMessage_author {
  __typename: "User";
  id: string;
  username: string;
  bot: boolean;
  discriminator: string;
  defaultAvatarURL: string;
  displayAvatarURL: string | null;
}

export interface UpdatedMessages_messageUpdate_FollowMessage_member {
  __typename: "IMember";
  displayName: string | null;
  displayHexColor: string | null;
}

export interface UpdatedMessages_messageUpdate_FollowMessage_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean;
  IS_CROSSPOST: boolean;
  SUPPRESS_EMBEDS: boolean;
  SOURCE_MESSAGE_DELETED: boolean;
  URGENT: boolean;
}

export interface UpdatedMessages_messageUpdate_FollowMessage {
  __typename: "FollowMessage";
  /**
   * Message ID
   */
  id: string;
  /**
   * Message timestamp
   */
  createdAt: any;
  /**
   * General discord user who authored the message
   */
  author: UpdatedMessages_messageUpdate_FollowMessage_author;
  /**
   * Author as member of guild.
   */
  member: UpdatedMessages_messageUpdate_FollowMessage_member | null;
  /**
   * Message flags
   */
  flags: UpdatedMessages_messageUpdate_FollowMessage_flags;
  content: string;
}

export type UpdatedMessages_messageUpdate = UpdatedMessages_messageUpdate_JoinMessage | UpdatedMessages_messageUpdate_TextMessage | UpdatedMessages_messageUpdate_BoostMessage | UpdatedMessages_messageUpdate_FollowMessage;

export interface UpdatedMessages {
  messageUpdate: UpdatedMessages_messageUpdate;
}

export interface UpdatedMessagesVariables {
  channel: string;
}
