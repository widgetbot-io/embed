/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Message
// ====================================================

export interface Message_user {
  __typename: "User";
  id: string;
  name: string;
  discrim: string;
  avatar: string;
  color: string;
}

export interface Message_flags {
  __typename: "MessageFlags";
  CROSSPOSTED: boolean | null;
  IS_CROSSPOST: boolean | null;
  SUPPRESS_EMBEDS: boolean | null;
  SOURCE_MESSAGE_DELETED: boolean | null;
  URGENT: boolean | null;
}

export interface Message_reactions {
  __typename: "Reaction";
  count: number;
  name: string;
  url: string | null;
}

export interface Message_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface Message_embeds_author {
  __typename: "EmbedAuthor";
  url: string | null;
  name: string | null;
}

export interface Message_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface Message_embeds_image {
  __typename: "EmbedImage";
  url: string;
  width: number;
  height: number;
}

export interface Message_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface Message_embeds_footer {
  __typename: "EmbedFooter";
  url: string | null;
  text: string;
}

export interface Message_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  url: string;
}

export interface Message_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface Message_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  hexColor: string | null;
  type: string | null;
  author: Message_embeds_author | null;
  fields: Message_embeds_fields[];
  image: Message_embeds_image | null;
  provider: Message_embeds_provider | null;
  footer: Message_embeds_footer | null;
  thumbnail: Message_embeds_thumbnail | null;
  video: Message_embeds_video | null;
}

export interface Message {
  __typename: "TextMessage";
  id: string;
  createdAt: string;
  user: Message_user;
  flags: Message_flags;
  content: string;
  editedAt: string | null;
  reactions: Message_reactions[];
  attachments: Message_attachments[];
  embeds: Message_embeds[] | null;
}
