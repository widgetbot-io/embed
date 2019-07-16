/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: UpdatedMessages
// ====================================================

export interface UpdatedMessages_messageUpdate_author {
  __typename: "User";
  id: string;
  username: string;
  discriminator: string;
  avatarURL: string | null;
}

export interface UpdatedMessages_messageUpdate_reactions_emoji_CustomEmoji {
  __typename: "CustomEmoji";
  name: string;
  id: string;
  url: string;
}

export interface UpdatedMessages_messageUpdate_reactions_emoji_TextEmoji {
  __typename: "TextEmoji";
  name: string;
  utf8: string;
}

export type UpdatedMessages_messageUpdate_reactions_emoji = UpdatedMessages_messageUpdate_reactions_emoji_CustomEmoji | UpdatedMessages_messageUpdate_reactions_emoji_TextEmoji;

export interface UpdatedMessages_messageUpdate_reactions {
  __typename: "Reaction";
  count: number;
  emoji: UpdatedMessages_messageUpdate_reactions_emoji;
}

export interface UpdatedMessages_messageUpdate_attachments {
  __typename: "Attachment";
  url: string;
  height: number;
  width: number;
}

export interface UpdatedMessages_messageUpdate_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface UpdatedMessages_messageUpdate_embeds_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface UpdatedMessages_messageUpdate_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
}

export interface UpdatedMessages_messageUpdate_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface UpdatedMessages_messageUpdate_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  fields: UpdatedMessages_messageUpdate_embeds_fields[];
  footer: UpdatedMessages_messageUpdate_embeds_footer | null;
  thumbnail: UpdatedMessages_messageUpdate_embeds_thumbnail | null;
  video: UpdatedMessages_messageUpdate_embeds_video | null;
}

export interface UpdatedMessages_messageUpdate {
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
   * Message Author.
   */
  author: UpdatedMessages_messageUpdate_author;
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
  reactions: UpdatedMessages_messageUpdate_reactions[];
  /**
   * Message attachments
   */
  attachments: UpdatedMessages_messageUpdate_attachments[];
  /**
   * Message embeds
   */
  embeds: UpdatedMessages_messageUpdate_embeds[] | null;
}

export interface UpdatedMessages {
  messageUpdate: UpdatedMessages_messageUpdate;
}

export interface UpdatedMessagesVariables {
  channel: string;
}
