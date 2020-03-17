/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Settings
// ====================================================

export interface Settings_guild_settings_theme_colors {
  __typename: "ThemeColors";
  /**
   * Primary theme color (font color)
   */
  primary: string | null;
  /**
   * Accent color (buttons)
   */
  accent: string | null;
  /**
   * Background color
   */
  background: string | null;
}

export interface Settings_guild_settings_theme {
  __typename: "Theme";
  /**
   * Custom CSS for the server
   */
  css: string | null;
  /**
   * Custom colors for the server
   */
  colors: Settings_guild_settings_theme_colors | null;
}

export interface Settings_guild_settings {
  __typename: "Settings";
  guestMode: boolean;
  readonly: boolean;
  theme: Settings_guild_settings_theme | null;
}

export interface Settings_guild {
  __typename: "Guild";
  settings: Settings_guild_settings;
}

export interface Settings {
  guild: Settings_guild;
}

export interface SettingsVariables {
  guild: string;
}
