/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Embed
// ====================================================

export interface Embed_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Embed_footer {
  __typename: "EmbedFooter";
  iconURL: string | null;
  proxyIconURL: string | null;
  text: string;
}

export interface Embed_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
  url: string;
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
  fields: Embed_fields[];
  footer: Embed_footer | null;
  thumbnail: Embed_thumbnail | null;
  video: Embed_video | null;
}
