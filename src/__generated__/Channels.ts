/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channels
// ====================================================

export interface Channels_guild_channels_StoreChannel {
  __typename: "StoreChannel" | "VoiceChannel";
  name: string;
  id: string;
  position: number | null;
}

export interface Channels_guild_channels_TextChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  position: number | null;
  canSend: boolean | null;
  nsfw: boolean | null;
  category: Channels_guild_channels_TextChannel_category | null;
}

export interface Channels_guild_channels_NewsChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface Channels_guild_channels_NewsChannel {
  __typename: "NewsChannel";
  name: string;
  id: string;
  position: number | null;
  canSend: boolean | null;
  nsfw: boolean | null;
  category: Channels_guild_channels_NewsChannel_category | null;
}

export type Channels_guild_channels = Channels_guild_channels_StoreChannel | Channels_guild_channels_TextChannel | Channels_guild_channels_NewsChannel;

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
