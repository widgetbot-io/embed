/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channels
// ====================================================

export interface Channels_guild_channels_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels {
  __typename: "TextChannel";
  name: string;
  id: string;
  position: number;
  canSend: boolean;
  nsfw: boolean;
  category: Channels_guild_channels_category | null;
}

export interface Channels_guild {
  __typename: "Guild";
  channels: Channels_guild_channels[];
}

export interface Channels {
  guild: Channels_guild;
}

export interface ChannelsVariables {
  guild: string;
}
