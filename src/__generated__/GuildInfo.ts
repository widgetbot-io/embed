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
}

export interface GuildInfo {
  guild: GuildInfo_guild;
}

export interface GuildInfoVariables {
  guild: string;
}
