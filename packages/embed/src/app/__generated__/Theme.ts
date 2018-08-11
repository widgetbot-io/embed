/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Theme
// ====================================================

export interface Theme_server_theme_colors {
  __typename: 'Colors'
  /**
   * Primary theme color (font color)
   */
  primary: string
  /**
   * Accent color (buttons)
   */
  accent: string
  /**
   * Background color
   */
  background: string
}

export interface Theme_server_theme {
  __typename: 'Theme'
  /**
   * Custom CSS for the server
   */
  css: string
  /**
   * Custom colors for the server
   */
  colors: Theme_server_theme_colors
}

export interface Theme_server {
  __typename: 'Server'
  /**
   * Theme for the server
   */
  theme: Theme_server_theme
}

export interface Theme {
  server: Theme_server
}

export interface ThemeVariables {
  server: string
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
