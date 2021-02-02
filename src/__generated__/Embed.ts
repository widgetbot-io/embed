/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Embed
// ====================================================

export interface Embed_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
  icon: string | null;
}

export interface Embed_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean | null;
}

export interface Embed_image {
  __typename: "EmbedImage";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface Embed_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Embed_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Embed_thumbnail {
  __typename: "EmbedThumbnail";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Embed_video {
  __typename: "EmbedVideo";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface Embed {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: any | null;
  color: number | null;
  type: string | null;
  author: Embed_author | null;
  fields: Embed_fields[] | null;
  image: Embed_image | null;
  provider: Embed_provider | null;
  footer: Embed_footer | null;
  thumbnail: Embed_thumbnail | null;
  video: Embed_video | null;
}
