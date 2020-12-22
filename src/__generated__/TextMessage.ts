/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TextMessage
// ====================================================

export interface TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emojiName: string | null;
}

export interface TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  fileName: string;
  size: number;
}

export interface TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface TextMessage_embeds_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: TextMessage_embeds_author | null;
  fields: TextMessage_embeds_fields[] | null;
  image: TextMessage_embeds_image | null;
  provider: TextMessage_embeds_provider | null;
  footer: TextMessage_embeds_footer | null;
  thumbnail: TextMessage_embeds_thumbnail | null;
  video: TextMessage_embeds_video | null;
}

export interface TextMessage {
  __typename: "TextMessage";
  content: string;
  editedAt: any | null;
  reactions: TextMessage_reactions[] | null;
  attachments: TextMessage_attachments[];
  embeds: TextMessage_embeds[] | null;
}
