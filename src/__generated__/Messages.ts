/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Messages
// ====================================================

export interface Messages_channel_messages_author {
  __typename: "User";
  avatar: string;
  bot: boolean;
  color: string;
  discrim: string;
  id: string;
  name: string;
}

export interface Messages_channel_messages_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
}

export interface Messages_channel_messages_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface Messages_channel_messages_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface Messages_channel_messages_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Messages_channel_messages_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Messages_channel_messages_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Messages_channel_messages_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Messages_channel_messages_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: Messages_channel_messages_embeds_author | null;
  fields: Messages_channel_messages_embeds_fields[] | null;
  image: Messages_channel_messages_embeds_image | null;
  provider: Messages_channel_messages_embeds_provider | null;
  footer: Messages_channel_messages_embeds_footer | null;
  thumbnail: Messages_channel_messages_embeds_thumbnail | null;
  video: Messages_channel_messages_embeds_video | null;
}

export interface Messages_channel_messages {
  __typename: "Message";
  content: string;
  editedAt: any | null;
  author: Messages_channel_messages_author;
  reactions: Messages_channel_messages_reactions[] | null;
  attachments: Messages_channel_messages_attachments[];
  embeds: Messages_channel_messages_embeds[];
}

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
