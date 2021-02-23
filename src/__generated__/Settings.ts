/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Settings
// ====================================================

export interface Settings_guild_settings_theme_colors {
  __typename: "ThemeColorSettings";
  primary: string | null;
  accent: string | null;
  background: string | null;
}

export interface Settings_guild_settings_theme {
  __typename: "ThemeSettings";
  css: string | null;
  colors: Settings_guild_settings_theme_colors;
}

export interface Settings_guild_settings {
  __typename: "GuildSettings";
  guestMode: boolean;
  singleChannel: string | null;
  readonly: boolean;
  theme: Settings_guild_settings_theme | null;
}

export interface Settings_guild {
  __typename: "Guild";
  id: string;
  settings: Settings_guild_settings;
}

export interface Settings {
  guild: Settings_guild;
}

export interface SettingsVariables {
  guild: string;
}
