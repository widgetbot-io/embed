/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Channels
// ====================================================

export interface Channels_guild_channels_CategoryChannel {
  __typename: "CategoryChannel" | "StoreChannel" | "VoiceChannel";
  name: string;
  id: string;
}

export interface Channels_guild_channels_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  canSend: boolean;
  nsfw: boolean;
  category: string | null;
}

export interface Channels_guild_channels_NewsChannel {
  __typename: "NewsChannel";
  name: string;
  id: string;
  canSend: boolean;
  nsfw: boolean;
  category: string | null;
}

export type Channels_guild_channels = Channels_guild_channels_CategoryChannel | Channels_guild_channels_TextChannel | Channels_guild_channels_NewsChannel;

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
