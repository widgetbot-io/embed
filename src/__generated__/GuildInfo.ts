/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GuildInfo
// ====================================================

export interface GuildInfo_guild_settings {
  __typename: "Settings";
  guestMode: boolean;
  readonly: boolean;
}

export interface GuildInfo_guild_channels_StoreChannel {
  __typename: "StoreChannel" | "VoiceChannel";
  name: string;
  id: string;
}

export interface GuildInfo_guild_channels_TextChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface GuildInfo_guild_channels_TextChannel {
  __typename: "TextChannel";
  name: string;
  id: string;
  canSend: boolean | null;
  nsfw: boolean | null;
  category: GuildInfo_guild_channels_TextChannel_category | null;
}

export interface GuildInfo_guild_channels_NewsChannel_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface GuildInfo_guild_channels_NewsChannel {
  __typename: "NewsChannel";
  name: string;
  id: string;
  canSend: boolean | null;
  nsfw: boolean | null;
  category: GuildInfo_guild_channels_NewsChannel_category | null;
}

export type GuildInfo_guild_channels = GuildInfo_guild_channels_StoreChannel | GuildInfo_guild_channels_TextChannel | GuildInfo_guild_channels_NewsChannel;

export interface GuildInfo_guild {
  __typename: "Guild";
  name: string;
  iconURL: string;
  invite: string | null;
  memberCount: number;
  bannerURL: string | null;
  splashURL: string | null;
  partnered: string;
  verified: string;
  premiumTier: string;
  settings: GuildInfo_guild_settings;
  channels: GuildInfo_guild_channels[];
}

export interface GuildInfo {
  guild: GuildInfo_guild;
}

export interface GuildInfoVariables {
  guild: string;
}
