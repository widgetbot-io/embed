/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Embed
// ====================================================

export interface Embed_author {
  __typename: "EmbedAuthor";
  proxyIconURL: string | null;
  name: string | null;
  url: string | null;
}

export interface Embed_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Embed_image {
  __typename: "EmbedImage";
  proxyURL: string;
  width: number;
  height: number;
}

export interface Embed_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Embed_footer {
  __typename: "EmbedFooter";
  proxyIconURL: string | null;
  text: string;
}

export interface Embed_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
}

export interface Embed_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Embed {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  hexColor: string | null;
  type: string | null;
  author: Embed_author | null;
  fields: Embed_fields[];
  image: Embed_image | null;
  provider: Embed_provider | null;
  footer: Embed_footer | null;
  thumbnail: Embed_thumbnail | null;
  video: Embed_video | null;
}
