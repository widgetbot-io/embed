/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GuildInfo
// ====================================================

export interface GuildInfo_guild_channels_category {
  __typename: "Category";
  name: string;
  position: number;
}

export interface GuildInfo_guild_channels {
  __typename: "TextChannel";
  name: string;
  id: string;
  position: number;
  topic: string | null;
  canSend: boolean;
  nsfw: boolean;
  category: GuildInfo_guild_channels_category | null;
}

export interface GuildInfo_guild {
  __typename: "Guild";
  id: string;
  name: string;
  icon: string | null;
  invite: string;
  memberCount: number;
  rulesChannelId: string | null;
  banner: string | null;
  splash: string | null;
  partnered: string;
  verified: string;
  tier: string;
  channels: GuildInfo_guild_channels[];
}

export interface GuildInfo {
  guild: GuildInfo_guild;
}

export interface GuildInfoVariables {
  guild: string;
}
